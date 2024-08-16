import React, { useState } from 'react';
import './Appointment.css';
import Dropdown from '../components/Dropdown';
import warningIcon from '../images/warning.png';
import Calendar from '../components/Calendar';
import appointmentpic from '../images/appointment-book.png';
import { db } from '../config/firebase' //Over here we import the firebase database (firestore) config file
import { collection, addDoc } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css'
import {toast } from  'react-toastify'

const Appointment = () => {
  // const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    service: '',
    date: '',
    time: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleDropdownSelect = (service) => {
    setFormData({ ...formData, service })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'appointments'), formData)
      // alert('Appointment booked successfully')
      toast.success('Appointment booked Succesfully')
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }
  
  return (
    <div className='appointmentpagebody'>
      <h1 className='appointmentheader'>Book an Appointment</h1>
      <form onSubmit={handleSubmit} className='appointmentForm'>
        <div className='twosectionAppointmentdiv'>
          <div className='calendardiv'>
            <img src={appointmentpic} className='appointmentpic' alt='' />
            <input type="email" name="email" placeholder="Enter your email" className='consultancyselectionfield' value={formData.email} onChange={handleChange} required/>
            <Calendar/>
          </div>
          <div className='timesdiv'>
            <input 
              type="service" 
              name="service" 
              placeholder="Select a consultancy service" 
              className='consultancyselectionfield' 
              value={formData.service} 
              onChange={handleChange}
              required
            />
            <Dropdown onSelectService={handleDropdownSelect}/>
            <span className='selectAvailablePeriod'>Select Time & date</span>
            <input type="date" name="date" placeholder="Select a date" className='consultancyselectionfield'value={formData.date} onChange={handleChange} required/>
            <input type="time" name="time" placeholder="Select a time" className='consultancyselectionfield'value={formData.time} onChange={handleChange} required/>
            <span className='selectTimestext'>Available Times</span>
            <div className='timesAvailable'>
              <div className='timesdiv1'>09:00 am</div>
              <div className='timesdiv2'>10:00 am</div>
              <div className='timesdiv3'>11:00 am</div>
              <div className='timesdiv4'>12:00 pm</div>
              <div className='timesdiv5'>01:00 pm</div>
              <div className='timesdiv6'>02:00 pm</div>
              <div className='timesdiv7'>03:00 pm</div>
              <div className='timesdiv8'>04:00 pm</div>
              <div className='timesdiv9'>05:00 pm</div>
            </div>
            <div className='timesZonediv'>
              <div className='warningIcondiv'><img src={warningIcon} className='warningIcon' alt=''/></div>
              <span className='timesZone'>All times are in central time (GMT/UTC +00)</span>
            </div>
          </div>
        </div>
      <div className='bookAppointmentButtondiv'>
        <button type="submit" className='bookAppointmentButton'><span className='bookAppointment'>Book Appointment</span></button>
      </div>
      </form>
    </div>
  );
};

export default Appointment;
