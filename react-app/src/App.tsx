import Message from './message';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GoalsPage from './Pages/Goals';
import HomePage from './Pages/Home';
import NeueIdeePage from './Pages/NeueIdee'
import {Sidebar} from 'flowbite-react';
import { Button } from 'flowbite-react';
import { FaHome} from "react-icons/fa"
import { GiStairsGoal } from"react-icons/Gi"
import {AiOutlineFundProjectionScreen} from"react-icons/Ai"
import { GrScorecard } from "react-icons/Gr"
import { MdSchool } from "react-icons/md"
function App() {
  return (
    <BrowserRouter>
  <div className=" bg-cover bg-center flex justify-center   h-full" style={{backgroundImage: 'url(./src/assets/pexels-vasanth-babu-797797.jpg)'}}>
    <div className='justify-self-start h-screen absolute top-0 left-0'>
      <Sidebar className='justify-self-start h-screen' collapsed={true}>
      <Sidebar.Items >
      <Sidebar.ItemGroup >
        <Sidebar.Item
        icon={FaHome}>
          <Link to="/#">Home</Link>
        </Sidebar.Item>
        <Sidebar.Item
        icon={GiStairsGoal}>
          <Link to="/goals">Goals</Link>
        </Sidebar.Item>
        <Sidebar.Item
        icon={AiOutlineFundProjectionScreen}>
         <Link to="/projects">Projects</Link>
        </Sidebar.Item>
        <Sidebar.Item
        icon={GrScorecard}>
         <Link to="/scoreboard">Scoreboard</Link>
        </Sidebar.Item>
        <Sidebar.Item
        icon={MdSchool}
        >
          <Link to="/education">Education</Link>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
     </Sidebar.Items>
    </Sidebar>
</div>
    <div className='pl-10 pb-10 justify-center'>
    <Routes className="h-full  relative">
          <Route path="/" element={<Home />} />
          <Route path="/NeueIdee" element={<NeueIdee/>}/>
          <Route path="/goals" element={<Goals />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/further-information" element={<FurtherInformation />} />
        </Routes>
</div>
</div>

     </BrowserRouter>
  )
}

function Home() {
  return HomePage();
}

function NeueIdee() {
  return NeueIdeePage();
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