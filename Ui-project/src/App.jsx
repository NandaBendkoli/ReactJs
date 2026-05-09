import React from "react";
import Section01 from "./Component/Section1/Section01";
import Section02 from "./Component/Section2/Section02";

const App = () => {
  const users = [
  {
    id: 1,
    tag: "Satisfied",
    job: "UI/UX Designer",
    color:"#7F5AF0",
    desc: "Creative designer focused on building modern and user-friendly interfaces for mobile and web applications.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",

  },

  {
    id: 2,
    tag: "Frontend",
    job: "React Developer",
     color:"#2CB67D",
    desc: "Passionate frontend developer experienced in React, Tailwind CSS, and responsive web applications.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=687&auto=format&fit=crop",
  },

  {
    id: 3,
    tag: "Backend",
    job: "Node.js Engineer",
     color:"#EF4565",
    desc: "Backend engineer building scalable APIs and real-time applications using Node.js and MongoDB.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
  },

  {
    id: 4,
    tag: "Remote",
    job: "Full Stack Developer",
     color:"#3DA9FC",
    desc: "Full stack developer skilled in MERN stack and cloud deployment for scalable products.",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=687&auto=format&fit=crop",
  },

  {
    id: 5,
    tag: "Creative",
    job: "Product Designer",
     color:"#F25F4C",
    desc: "Product designer passionate about intuitive experiences, clean visuals, and modern interfaces.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop",
  },
];
  return (
    <>
      <Section01 users={users}/>
      {/* <Section02 /> */}
    </>
  );
};

export default App;
