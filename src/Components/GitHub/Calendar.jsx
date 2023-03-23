import GitHubCalendar from "react-github-calendar";
import style from "./Calendar.module.css";
import React from "react";

function Calendar() {
  return (
    <div
      style={{
        padding: "20px",
        margin: "30px 0 0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={style.gitCalender}
    >
      <p
        style={{
          margin: "30px 0 50px 0",
        }}
      >
        Git<span style={{ color: "#36f588" }}>Hub</span> Calendar
      </p>
      <div className={style.calender}>
        <GitHubCalendar username="sristyverma" />
      </div>
      <div className={style.stats}>
        <a href="https://github.com/sristyverma">
          <img
            align="center" id="github-streak-stats" 
            src="https://github-readme-streak-stats.herokuapp.com?user=sristyverma&theme=dark"
            width="100%"
            alt="stats"
          />
        </a>

        <a href="https://github.com/sristyverma">
          <img
            align="center"  id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=sristyverma&theme=dark&count_private=true&show_icons=true
          "
          alt="stats"
          />
        </a>
        <a href="https://github.com/sristyverma">
          <img
            align="center" id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sristyverma&layout=compact&langs_count=6&card_width=400&card_height=200"
          alt="stats"
          />
        </a>
       
      </div>
    </div>
  );
}
export default Calendar;
