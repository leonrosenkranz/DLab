import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const IdeasFeed = React.lazy(() => import("pages/IdeasFeed"));
const NewIdeaSheet = React.lazy(() => import("pages/NewIdeaSheet"));
const ProjectsOne = React.lazy(() => import("pages/ProjectsOne"));
const MoreInfoAboutGoal = React.lazy(() => import("pages/MoreInfoAboutGoal"));
const Projects = React.lazy(() => import("pages/Projects"));
const Furtherinformation = React.lazy(() => import("pages/Furtherinformation"));
const Scoreboard = React.lazy(() => import("pages/Scoreboard"));
const Goals = React.lazy(() => import("pages/Goals"));
const Homescreen = React.lazy(() => import("pages/Homescreen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/furtherinformation" element={<Furtherinformation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/moreinfoaboutgoal" element={<MoreInfoAboutGoal />} />
          <Route path="/projectsone" element={<ProjectsOne />} />
          <Route path="/newideasheet" element={<NewIdeaSheet />} />
          <Route path="/ideasfeed" element={<IdeasFeed />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
