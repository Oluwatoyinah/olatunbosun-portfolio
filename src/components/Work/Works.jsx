import React from "react";
import WorksData from "./WorksData";
import Work from "./Work";

const Works = () => {
  return (
    <section className="container-fluid experience">
      <div className="container">
        <div className="row">
          <h1 className="reveal">.work experience</h1>
          <div className="col-lg-10 col-11 mx-auto first">
            {WorksData.reverse().map((work, i) => {
              return (
                <Work
                  key={i}
                  role={work.role}
                  company={work.company}
                  details={work.details}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
