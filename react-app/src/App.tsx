import Message from './message';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GoalsPage from './Pages/Goals';

function App() {
  return (<div>
   <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/goals">Goals</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/scoreboard">Scoreboard</Link>
            </li>
            <li>
              <Link to="/further-information">Further Information</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals" element={<GoalsPage/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/further-information" element={<FurtherInformation />} />
        </Routes>
      </div>
    </BrowserRouter>
  <div><Message/></div>
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