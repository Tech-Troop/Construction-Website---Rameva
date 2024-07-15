import {
  BrowserRouter, Routes, Route, 
} from 'react-router-dom';
import Home from './routes/Home';
import Services from './routes/Services';
import Portfolio from './routes/Portfolio';
import About from './routes/About';
import Contact from './routes/Contact';
import NavBar from './components/NavBar';
import Bookings from './routes/Bookings';
import SignUp from './routes/SignUp';
import Appointment from './routes/Appointment';
import UpdateUserProfile from './routes/UpdateUserProfile';
import {ToastContainer} from 'react-toastify'
import PortfolioItem from './components/portfolio/PortfolioIterm';




function App() {
  return (
    <div >
      
      <BrowserRouter>
      <NavBar/>  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Bookings" element={<Bookings/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Appointment" element={<Appointment/>}/>
          <Route path="/UpdateUserProfile" element={<UpdateUserProfile/>}/>
          <Route path="/portfolio/:id" element={<PortfolioItem />} />
        </Routes>
        <ToastContainer theme='dark' />
      </BrowserRouter>
      
     
      
    </div>
  );
}

export default App;
