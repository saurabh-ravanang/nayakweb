import NewNav from "./Components/Navbar/Navbar"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import img from '../src/Assets/Navbar/Nayaks_logo.png'
import HomeCon from "./Components/HomeMain/HomeCon";
import Pageroute from "./Route/Route";

const App = () => {
  return (
    <>
      <Pageroute />
    </>
  );
};

export default App;