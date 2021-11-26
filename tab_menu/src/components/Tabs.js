import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useEffect, useState } from "react";

const Tabs = ({ tabs }) => {
  const [value, setValue] = useState(0);
  const { duties, company, title, dates } = tabs[value];

  return (
    <section>
      <div>
        <h2>Job Experience </h2>
        <div className="underline"></div>
      </div>

      <div>
        {tabs.map((tab, index) => {
          return (
            <button onClick={() => setValue(index)} key={index}>
              {" "}
              {tab.company}{" "}
            </button>
          );
        })}
      </div>

      <article>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div>
              <MdOutlineDoubleArrow key={index} />
              <p> {duty}</p>
            </div>
          );
        })}
      </article>

      <button> More Info</button>
    </section>
  );
};

export default Tabs;
