import React from "react";
import Card from "./Components/Card/Card";
import Map from "./Components/Map";

const App = () => {
  const jobs = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhqOC_8TpCUmksmFEIm1YqtkLvN8N-S1dew&s",
      company: "Google",
      posted: "3 days ago",
      role: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$110/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw9ADW_e3phAevjk1wGYCyOujxGmT_3cTQQ&s",
      company: "Amazon",
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/3840px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png",
      company: "Meta",
      posted: "1 week ago",
      role: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$105/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      company: "Netflix",
      posted: "2 weeks ago",
      role: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$130/hr",
      location: "Remote",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s",
      company: "Apple",
      posted: "4 days ago",
      role: "Backend Engineer (Node.js)",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$115/hr",
      location: "Pune, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ccmph3FIPRRoY9m6aYXblfogFTczyMqDGg&s",
      company: "Microsoft",
      posted: "6 days ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      salary: "$100/hr",
      location: "Noida, India",
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
      company: "Adobe",
      posted: "3 weeks ago",
      role: "UI Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$108/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
      company: "IBM",
      posted: "1 week ago",
      role: "Backend Developer",
      tag1: "Full Time",
      tag2: "Entry Level",
      salary: "$95/hr",
      location: "Chennai, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrc5Nptz1FFjFMUuU45DPLj333PHw9-wLj-A&s",
      company: "Oracle",
      posted: "2 days ago",
      role: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$112/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "data:image/png;base64,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",
      company: "Salesforce",
      posted: "5 days ago",
      role: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      salary: "$98/hr",
      location: "Gurgaon, India",
    },
  ];
  return (
    <>
      <div className="cards-container">
        {jobs.map((elem, idx) => {
          return (
            <Card
              key={idx}
              company={elem.company}
              logo={elem.logo}
              posted={elem.posted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              role={elem.role}
              location={elem.location}
              salary={elem.salary}
            />
          );
        })}
      </div>
    </>
  );

  
 
};

export default App;
