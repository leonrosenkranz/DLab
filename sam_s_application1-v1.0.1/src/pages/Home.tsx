import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Homescreen</Link>
        </li>
        <li>
          <Link to="/goals">Goals</Link>
        </li>
        <li>
          <Link to="/scoreboard">Scoreboard</Link>
        </li>
        <li>
          <Link to="/furtherinformation">Furtherinformation</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/moreinfoaboutgoal">MoreInfoAboutGoal</Link>
        </li>
        <li>
          <Link to="/projectsone">ProjectsOne</Link>
        </li>
        <li>
          <Link to="/newideasheet">NewIdeaSheet</Link>
        </li>
        <li>
          <Link to="/ideasfeed">IdeasFeed</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
