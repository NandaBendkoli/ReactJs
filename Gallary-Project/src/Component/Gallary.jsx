import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallary = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    // console.log(response.data);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUser = (
    <h3 className="text-gray-500 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading......
    </h3>
  );

  if (data.length > 0) {
    {
      printUser = data.map((elem, idx) => {
        return (
          <>
            <a href={elem.url} target="_blank">
              <div key={idx}>
                <div className="h-40 w-44 overflow-hidden rounded-xl">
                  <img
                    className="h-full w-full object-cover"
                    src={elem.download_url}
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl">{elem.author}</h2>
              </div>
            </a>
          </>
        );
      });
    }
  }

  return (
    <>
      {/* <button
        onClick={getData}
        className="bg-slate-500 active:scale-95 mt-10 ml-10 text-center p-2 rounded-full font-bold"
      >
        Get the Data
      </button> */}
      <div className="flex flex-wrap gap-4 pt-10">{printUser}</div>

      <div className="flex justify-center gap-30 items-center">
        <button
          className="bg-slate-700 p-2 rounded-full w-30 font-bold cursor-poi
         active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setData([]);
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
            setData([]);
          }}
          className="bg-slate-700 p-2 rounded-full w-30 font-bold cursor-poi
         active:scale-95"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Gallary;
