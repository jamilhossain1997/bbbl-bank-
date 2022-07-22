import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Common/Header';
import Home from './pages/Home';
import Footer from './Common/Footer';
import JoblistDel from './pages/JoblistDel';
import ApplyForm from "./pages/ApplyForm";
import ApplyFormNext from "./pages/ApplyFormNext";
import FromSubmit from "./pages/FromSubmit";
import AdminCard from "./pages/AdminCard";
import ApplyStatus from "./pages/Application/ApplyStatus";
import Login from "./Common/Login";
import Payment from "./pages/Application/Payment";
import Message from "./pages/Message";

function App() {
  return (
    <div className="App">
         <Header/>
         {/* <ApplyForm/> */}
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/joblistdel/:id" element={<JoblistDel/>} />
            <Route path="/applynext" element={<ApplyFormNext/>}/>
            <Route path="/applyfrom:id" element={<ApplyForm/>}/>
            <Route path="/formsubmit" element={<FromSubmit/>}/>
            <Route path="/AdminCard" element={<AdminCard/>}/>
            <Route path="/ApplyStatus" element={<ApplyStatus/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
         <Footer/>
    </div>
  );
}

export default App;
