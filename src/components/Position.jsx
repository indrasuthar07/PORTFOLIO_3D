import React, { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Web Designer",
  "C++ Coder",
  "DSA Solver",
  "Problem Solver",
];

const Position = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (roles.length > 0 ? (prev + 1) % roles.length : 0));
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <h3 className="ml-8 mt-8 text-[50px] font-semibold min-w-[280px] text-animation">
      I'm a{" "}
      <span className="text-gray-500 relative text-primary">
        {roles[index]}
        <span
          className="absolute right-[-8px] bg-black border-l-[3px] border-black h-[130%] animate-typing"
          style={{ width: "calc(100% + 8px)" }}
        ></span>
      </span>
    </h3>
  );
};

export default Position;
