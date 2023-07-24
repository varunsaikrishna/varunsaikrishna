import React, { useState } from "react";

function EducationInfo() {
  return (
    <div className="education-box">
      <div className="education-heading">
        <h3>Education </h3>
      </div>

      <ul className="education">
        <li>
          <div className="education-item">
            <p1>Bachelor of Technology, Computer Science </p1> <br />
            <p1>Bennett University (2020-2024) </p1>
            <br /> <p1>CGPA: 8.0/10 </p1>
          </div>
        </li>
        <br />
        <li>
          <div className="education-item">
            <p1>Intermediate, MPC </p1> <br />
            <p1>Sri Chaiatanya Junior College (2018-2020) </p1> <br />{" "}
            <p1> CGPA: 8.5/10</p1>
          </div>
        </li>
        {/* <br />
        <li>
          <p1>Class X </p1> <br />
          <p1>Board Of Secondary Education Andhra Pradesh </p1> <br />
          <p1>ST.Claret EM High School (2017), GPA: 10/10 </p1>{" "}
        </li> */}
      </ul>
    </div>
  );
}

export default EducationInfo;
