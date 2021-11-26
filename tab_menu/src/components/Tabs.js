import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from 'react-router-dom';
import {useState } from "react";
import TestButton from "./Buttons/TestButton";

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
            <button onClick={() => setValue(index)} key={tab.id}>
              {tab.company}
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
            <div key={index}>
              <MdOutlineDoubleArrow  />
              <p > {duty}</p>
            </div>
          );
        })}
      </article>
      <TestButton>
        <Link to="/about">
      <button type="button"> More Info</button>
        </Link>

      </TestButton>
      
    </section>
  );
};

export default Tabs;
