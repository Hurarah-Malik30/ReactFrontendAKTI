import React from "react";
import "./AboutVc.css";
import vcimage from "../../src/assets/images/imranjani.jpg";
export default function AboutVc() {
  return (
    <>
      <div>
        <div className="vice">
          <h3 id="gta"> OUR VICE CHANCELLOR </h3>
          <p id="paragraph" />
          Our vice chancellor "Mr.Irshad Naqvi" has been serving this institute
          for past 10 years and we pray that he continues to <br />
          do so for next ten years as he is the best management we have seen in
          past 50 years.He has lifted this institution to the <br />
          heights of glory and splendour.In the words of our respected vice
          chancellor: <br />
          <center>
            <strong>
              "I intend to serve this institute and our country and my purpose
              is to train "<br /> our youth to be best in world in the field of
              IT as it is the future.
            </strong>
          </center>
          <div className="px-4">
            <img src={vcimage} alt="no img found" />
          </div>
        </div>
      </div>
      <div className="courses">
        <h3 id="newCourse">Courses</h3>
        <span id="offer">Following are the courses we offer:</span>
        <span id="more">We also offer following short courses:</span>
        <ul id="list">
          <li className="newList">BS Computer Science(4 years)</li>
          <li className="newList">BS Software Engineering(4 years)</li>
          <li className="newList">BS INFORMATION TEHNOLOGY(4 years)</li>
          <li className="newList">BS Software Engineering(4 years)</li>
          <li className="newList">BS Cyber-Security(4 years)</li>
        </ul>
        <ul id="short">
          <li className="basic">Web Development(front-end:3 months)</li>
          <li className="basic">Web Development(back-end:3 months)</li>
          <li className="basic">Web Development(full stack:6 months)</li>
          <li className="basic">Data Analyst(6 months)</li>
          <li className="basic">Database Administrator(6 months)</li>
        </ul>
      </div>
    </>
  );
}
// ctrl+alt+x

// crud => Create,
// R => Read,
// U => Update,
// D =>> Delete