import React from "react";
import Profile from "./Components/Profile";

const users = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "UI/UX Designer",
    type: "Freelancer",
    salary: "$45/hr",
    skills: ["Figma", "React", "CSS", "UI"],
    desc: "Creative UI/UX designer focused on building modern and user-friendly interfaces.",
  },

  {
    id: 2,
    name: "Ethan Walker",
    role: "Frontend Developer",
    type: "Full Time",
    salary: "$52/hr",
    skills: ["React", "Tailwind", "JavaScript", "Redux"],
    desc: "Frontend developer passionate about responsive and scalable web applications.",
  },

  {
    id: 3,
    name: "Olivia Bennett",
    role: "Mobile Designer",
    type: "Freelancer",
    salary: "$38/hr",
    skills: ["Flutter", "Figma", "iOS", "Android"],
    desc: "Designs elegant mobile interfaces with a focus on usability and performance.",
  },

  {
    id: 4,
    name: "Liam Anderson",
    role: "Backend Developer",
    type: "Part Time",
    salary: "$60/hr",
    skills: ["Node.js", "MongoDB", "Express", "API"],
    desc: "Backend engineer building scalable APIs and real-time applications.",
  },

  {
    id: 5,
    name: "Emma Thompson",
    role: "React Developer",
    type: "Remote",
    salary: "$48/hr",
    skills: ["React", "Next.js", "Tailwind", "Firebase"],
    desc: "React developer creating fast and interactive user experiences.",
  },

  {
    id: 6,
    name: "Noah Wilson",
    role: "Full Stack Developer",
    type: "Full Time",
    salary: "$70/hr",
    skills: ["MERN", "TypeScript", "AWS", "Docker"],
    desc: "Experienced full stack engineer with strong backend and frontend skills.",
  },

  {
    id: 7,
    name: "Ava Martinez",
    role: "Graphic Designer",
    type: "Freelancer",
    salary: "$35/hr",
    skills: ["Photoshop", "Illustrator", "Branding", "Canva"],
    desc: "Graphic designer crafting clean visuals and impactful branding.",
  },

  {
    id: 8,
    name: "James Harris",
    role: "DevOps Engineer",
    type: "Remote",
    salary: "$80/hr",
    skills: ["AWS", "CI/CD", "Linux", "Docker"],
    desc: "DevOps engineer automating deployments and cloud infrastructure.",
  },

  {
    id: 9,
    name: "Isabella Moore",
    role: "Product Designer",
    type: "Contract",
    salary: "$55/hr",
    skills: ["Figma", "UX", "Wireframing", "Prototype"],
    desc: "Passionate product designer focused on intuitive user journeys.",
  },

  {
    id: 10,
    name: "Benjamin Clark",
    role: "Software Engineer",
    type: "Full Time",
    salary: "$90/hr",
    skills: ["Java", "Spring", "React", "MySQL"],
    desc: "Software engineer experienced in enterprise-level web applications.",
  },
];

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-wrap gap-2 p-2">
      {users.map((elem) => {
        return (
          <Profile
            key={elem.id}
            name={elem.name}
            role={elem.role}
            type={elem.type}
            salary={elem.salary}
            skills={elem.skills}
            desc={elem.desc}
          />
        );
      })}
    </div>
  );
};

export default App;