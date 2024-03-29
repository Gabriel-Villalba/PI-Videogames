import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import LandingPage from "./components/LandingPage"
import CreateVideogame from "./components/CreateVideogame"
import DetailsVideogames from "./components/DetailsVideogames"
import Header from './components/Header'
function App() {
  return (
    <BrowserRouter>
       <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/create" element={<CreateVideogame/>} />
        <Route path="/:id" element={<DetailsVideogames/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
