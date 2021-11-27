import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

import { StyledButton } from "./button/StyledButton.js";



const Tabs = ({ tabs }) => {
  const [value, setValue] = useState(0);
  const { duties, company, title, dates } = tabs[value];

  return (
    <div>
   
      <div>
        <h2 className="header_title">Job Experience </h2>
        <div className="underline"></div>
      </div>

      <div className="wrapper">

      <div className="btn">
        {tabs.map((tab, index) => {
          return (
            <StyledButton key={tab.id}>
              <div
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
                key={tab.id}
              >
                {tab.company}
              </div>
            </StyledButton>
          );
        })}
      </div>

      <article className="article">
        <h3>{title}</h3>
        <h4 className="text-bg">{company}</h4>
        <p>{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div className="duties" key={index}>
              <div className="arrow-icon">
              <MdOutlineDoubleArrow />
              </div>
              <p> {duty}</p>
            </div>
          );
        })}
      </article>
   </div>
      <Link style={{textDecoration: 'none'}} to="/about">
        <div className="more_btn"> More Info</div>
      </Link>
    </div>
  );
};

export default Tabs;
