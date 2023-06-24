import Message from './message';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GoalsPage from './Pages/Goals';
import HomePage from './Pages/Home';
import {Sidebar} from 'flowbite-react';
import { Button } from 'flowbite-react';
import { FaHome} from "react-icons/fa"
import { GiStairsGoal } from"react-icons/Gi"
import {AiOutlineFundProjectionScreen} from"react-icons/Ai"
import { GrScorecard } from "react-icons/Gr"
import { MdSchool } from "react-icons/md"
function App() {
  return (<div>
    <Button>FlowBite</Button>
    <Sidebar>
      <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
        icon={FaHome}>
          <p>
            Home
          </p>
        </Sidebar.Item>
        <Sidebar.Item
        icon={GiStairsGoal}>
          <p>
            Ziele
          </p>
        </Sidebar.Item>
        <Sidebar.Item
        icon={AiOutlineFundProjectionScreen}>
          <p>
            Projekte
          </p>
        </Sidebar.Item>
        <Sidebar.Item
        icon={GrScorecard}>
          <p>
            Scoreboard
          </p>
        </Sidebar.Item>
        <Sidebar.Item
        icon={MdSchool}
        >
          <p>
            Bildung
          </p>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
     </Sidebar.Items>
    </Sidebar>
    <HomePage></HomePage>
     </div>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function Goals() {
  return <h2>Goals</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Education() {
  return <h2>Education</h2>;
}

function Scoreboard() {
  return <h2>Scoreboard</h2>;
}

function FurtherInformation() {
  return <h2>Further Information</h2>;
}


export default App;