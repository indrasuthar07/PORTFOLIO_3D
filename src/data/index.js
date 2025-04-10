import {
    algorithms,
    devnotes,
    oscs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "hero",
      title: "Hero",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  
  ];
  
  const experiences = [
   
    {
      title: "Software Developer",
      company_name: "Indian Institute of Technology",
      date: "2024 - Present",
      details: [
        "Developed and delivered custom interdisciplinary coding clones like<span style='color: white;'>Twitter,treeLink and Amazon</span>.",
        "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
        "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "NULL",
      date: "2025 - now",
      details: [
        "Built custom Fanbase applications for  <span style='color: white;'>recieving payments from fans</span> as a full-stack software engineer.",
        "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
        "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
      ],
    },
    {
      title: "Computer Science",
      company_name: "IIIT Bhagalpur",
      date: "2024 - 2028",
      details: [
        "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
        "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
        "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
      ],
    },
  ];
  
  const portfolio = [
    {
      name: "Open Source Computer Science Repo",
      description:
        "A GitHub repo with many projects and resources for learning computer science.",
      image: oscs,
    },
    {
      name: "Dev Notes",
      description:
        "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
      image: devnotes,
    },
    {
      name: "Visually Understanding Algorithms",
      description:
        "A showcase of animated algorithms coded using C++ and .",
      image: algorithms,
    },
  ];
  
  export { experiences, portfolio };
  