import React, { useState } from "react";
import { X } from "lucide-react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const tasks = [...task];
    tasks.push({ title, detail });
    setTask(tasks);
    setTitle("");
    setDetail("");
  };

  const Delete = (idx) => {
    const tasks = [...task];
    tasks.splice(idx, 1);
    setTask(tasks);
  };
  return (
    <>
      <div className="flex justify-between ">
        <form
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}
          action=""
          className="flex items-start justify-between"
        >
          <div className="flex flex-col items-start">
            <input
              className="px-10 py-2 mx-10 mt-10 border-2 rounded text-white w-full"
              placeholder="Enter The Title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              className="x-5 py-2 mx-10 mt-10 border-2 rounded h-30 text-white w-full"
              type="text"
              placeholder="Enter the desc"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />
            <button className="x-5 py-2 p-4 mt-10 border-2 ml-30 rounded-full text-white font-bold hover:bg-slate-900 w-80">
              Add
            </button>
          </div>
        </form>
        <div className="lg:w-1/2 lg:border-1/2 bg-slate-800 p-10 mt-6">
          <h1 className="text-xl font-bold text-white text-center mb-5">
            Your Notes
          </h1>
          <div className="flex gap-4 flex-wrap overflow-auto h-full">
            {task.map((elem, idx) => {
              return (
                <>
                  <div
                    key={idx}
                    className=" relative h-52 w-40 rounded-2xl text-black p-7 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZiRIBKbZmja-YbH5swhNMf-WcFTpOS4zSQ&s')",
                    }}
                  >
                    <h3 className="leading-relaxed font-bold">{elem.title}</h3>
                    <h3 className="leading-relaxed">{elem.detail}</h3>
                    <button
                      onClick={() => {
                        Delete(idx);
                      }}
                      className="bg-red-400 text-white cursor-pointer active:scale-95 p-1 mt-20 w-full rounded-full text-xs "
                    >
                      Delete
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
