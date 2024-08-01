import React from 'react';
import { useState, useEffect } from 'react';
import './Dashboard.css'
import axios from 'axios';
import user from '../images/userProfile.png'
import bookAppointment from '../images/BookAppointment.png'
import Calendar from '../components/Calendar';
import TechSupport from '../images/tech_support.jpeg'
import Headset from '../images/headset.png'
import News from '../images/news.png'


function UserDashboard() {
  const [profile, setProfile] = useState({});
  const [bookings, setBookings] = useState([]);
  const [techSupportInteractions, setTechSupportInteractions] = useState([]);
  const [newBookings, setNewBookings] = useState(0);

  useEffect(() => {
    axios.get('/api/profile')
     .then((response) => {
        setProfile(response.data);
      })
     .catch((error) => {
        console.error(error);
      });

    axios.get('/api/bookings')
     .then((response) => {
        setBookings(response.data);
      })
     .catch((error) => {
        console.error(error);
      });

    axios.get('/api/tech-support-interactions')
     .then((response) => {
        setTechSupportInteractions(response.data);
      })
     .catch((error) => {
        console.error(error);
      });

    axios.get('/api/new-bookings')
     .then((response) => {
        setNewBookings(response.data.count);
      })
     .catch((error) => {
        console.error(error);
      });
    }, []);

    function onClickCard1() {
        window.location.href='/UpdateUserProfile'
    }
    function onClickCard2() {
        window.location.href='/TechnicalSupportPage'
    }
    function onClickCard3() {
        window.location.href='/Appointment'
    }
    function onClickCard4() {
        window.location.href=''
    }
    
    return (
       <div className='dashboardMainContainer'>
            <div className='dashboardfirstdiv'>
                <div className='userWelcomeTextdiv'>
                    Welcome, Cherised User!
                    <a href='/Portfolio'><button className="browseProjectsbutton"> Browse projects </button></a>
                </div>
            </div>
            <div className='dashboardseconddiv'>
                <div className='dashboardPageTitle'>Content div</div>
                <div className='dashboardCardsContainer'> 
                    <div className='dashboardCard1' onClick={onClickCard1}> <img src={user} alt='' className='techsupporticon'></img>User Profile </div>
                    <div className='dashboardCard2' onClick={onClickCard2}> <img src={Headset} alt='' className='techsupporticon'/> 24/7 Support </div>
                    <div className='dashboardCard3' onClick={onClickCard3}> <img src={bookAppointment} alt='' className='techsupporticon'/> Book Appointment </div>
                    <div className='dashboardCard4' onClick={onClickCard4}> <img src={News} alt='' className='techsupporticon'/>Latest News </div>
                </div>

            </div>
                <div className='additionalTextGrid'>
                    <div className='belowTextdiv'>Click on the cards to make use of our services</div>
                    <div className='belowTextdiv2'>We hope you're loving your experience here and hope to hear from you soon</div>
                </div>

       </div>
    )    
}
    
export default UserDashboard;



{/* <div className="dashboardcontainer">
<div className="dashboardheader">
    Dashboard
    <div className='dashboardheaderIconsdiv'>
        <a href='/UpdateUserProfile' ><img src={user} className='userIcon' alt=''></img></a>
        <a href='/Appointment' ><img src={appointment} className='appointmentIcon' alt=''></img></a>
    </div>
</div>
    <h1>Welcome back, User</h1>

<div className='threedivdasboarddisplay'>
    <div>
        <section className="tech-support">
        <h2>Tech Support</h2>
        <ul>
            {techSupportInteractions.map((interaction) => (
            <li key={interaction.id}>
                <p>{interaction.date} - {interaction.description}</p>
            </li>
            ))}
        </ul>
        <img src={TechSupport}  className='TechSupport' alt=''/>
        <a href="/TechnicalSupportPage">
            <i className="fas fa-question-circle" />
            Contact Tech Support
        </a>
        </section>
    </div>
    <div><Calendar/></div>
    <div>
        <section className="bookings">
            <h2>Bookings</h2>
                <p>You have {newBookings} new bookings</p>
            <ul>
                {bookings.map((booking) => (
                <li key={booking.id}>
                    <p>{booking.service} - {booking.date} at {booking.time}</p>
                </li>
                ))}
            </ul>
        </section>
    </div>
</div>
</div> */}











//   return (
//     <div className="user-dashboard">
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <a href="/change-profile">
//                 <i className="fas fa-user" />
//               </a>
//             </li>
//             <li>
//               <a href="/Appointment">
//                 <i className="fas fa-calendar" />
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <section className="tech-support">
//           <h2>Tech Support</h2>
//           <ul>
//             {techSupportInteractions.map((interaction) => (
//               <li key={interaction.id}>
//                 <p>{interaction.date} - {interaction.description}</p>
//               </li>
//             ))}
//           </ul>
//           <a href="/TechnicalSupportPage">
//             <i className="fas fa-question-circle" />
//             Contact Tech Support
//           </a>
//         </section>
//         <section className="bookings">
//           <h2>Bookings</h2>
//           <p>You have {newBookings} new bookings</p>
//           <ul>
//             {bookings.map((booking) => (
//               <li key={booking.id}>
//                 <p>{booking.service} - {booking.date} at {booking.time}</p>
//               </li>
//             ))}
//           </ul>
//         </section>
//       </main>
//     </div>
//   );
// }
