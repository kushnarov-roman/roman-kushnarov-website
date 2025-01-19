"use client";

import { useState, useEffect } from "react";

const sections = ["about", "experience"];

const Navigation = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const thirdOfScreen = window.innerHeight / 3;
      let newActiveSection = active;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;
        const { top } = element.getBoundingClientRect();

        if (top >= 0 && top < thirdOfScreen) {
          newActiveSection = section;
        }
      });

      setActive(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  const handleClick = (section: string) => {
    setActive(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="hidden lg:flex mt-20 flex-col items-start gap-6">
      {["about", "experience"].map((section) => (
        <li
          key={section}
          className="relative text-sm uppercase cursor-pointer transition ease-in-out"
          onClick={() => handleClick(section)}
        >
          <a
            href={`#${section}`}
            className={`group/link flex items-center transition-transform ease-in-out hover:!text-teal-400 ${
              active === section ? "text-primary-bright" : "text-primary-grey"
            }`}
          >
            <span
              className={`group-hover/link:!bg-teal-400 absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] transition-all ease-in-out  ${
                active === section
                  ? "w-12 bg-primary-bright"
                  : "w-6 bg-primary-grey"
              }`}
            />
            <p
              className={`ml-8 transition-all ease-in-out font-bold ${
                active === section ? "translate-x-6" : ""
              }`}
            >
              {section}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
