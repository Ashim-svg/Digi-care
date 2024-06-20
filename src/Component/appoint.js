import React, { useState } from 'react';
import Nav from "./navbar";

const Appointment = () => {
    const [showDoctorList, setShowDoctorList] = useState(true);
    const [doctorInfo, setDoctorInfo] = useState({});

    const showAppointmentForm = (doctorName, specialty, availability) => {
        setDoctorInfo({ doctorName, specialty, availability });
        setShowDoctorList(false);
    };

    const showDoctorListHandler = () => {
        setShowDoctorList(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <>
        <Nav/>
        <div className="doc-container">
           
            <h2 className="headings">Book an Appointment</h2>

            {/* List of Doctors */}
            {showDoctorList && (
                <div className="doctors">
                    <div className="doctor-container" onClick={() => showAppointmentForm('Dr. John Doe', 'Cardiology', 'Monday to Friday, 9:00 AM - 5:00 PM')}>
                        <div className="doctor-info">
                            <h3>Dr. John Doe</h3>
                            <p>Specialty: Cardiology</p>
                            <p>Availability: Monday to Friday, 9:00 AM - 5:00 PM</p>
                        </div>
                        <div className="doctor-image">
                            <img src="images/ne.jpg" alt="Dr. John Doe" />
                        </div>
                    </div>

                    <div className="doctor-container" onClick={() => showAppointmentForm('Dr. Jane Smith', 'Pediatrics', 'Monday, Wednesday, Friday, 10:00 AM - 3:00 PM')}>
                        <div className="doctor-info">
                            <h3>Dr. Jane Smith</h3>
                            <p>Specialty: Pediatrics</p>
                            <p>Availability: Monday, Wednesday, Friday, 10:00 AM - 3:00 PM</p>
                        </div>
                        <div className="doctor-image">
                            <img src="doctor2.jpg" alt="Dr. Jane Smith" />
                        </div>
                    </div>
                    <div className="doctor-container" onClick={() => showAppointmentForm('Dr. John Doe', 'Cardiology', 'Monday to Friday, 9:00 AM - 5:00 PM')}>
                        <div className="doctor-info">
                            <h3>Dr. John Doe</h3>
                            <p>Specialty: Cardiology</p>
                            <p>Availability: Monday to Friday, 9:00 AM - 5:00 PM</p>
                        </div>
                        <div className="doctor-image">
                            <img src="images/ne.jpg" alt="Dr. John Doe" />
                        </div>
                    </div>
                </div>
            )}

            {/* Appointment Form */}
            {!showDoctorList && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" id="fullname" name="fullname" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="date">Preferred Date:</label>
                    <input type="date" id="date" name="date" required />

                    <input type="submit" value="Book Appointment" style={{ backgroundColor: '#8BC34A' }} />
                </form>
            )}

            {/* Back Button */}
            {!showDoctorList && (
                <button onClick={showDoctorListHandler} style={{ backgroundColor: '#8BC34A' }}>Back</button>
            )}
        </div>
        </>
    );
};

export default Appointment;
