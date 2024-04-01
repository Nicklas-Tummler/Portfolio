import React from "react";
import { useState } from "react";

const Contact = () => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleForm = (e) => {
        setContact(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <header id="contact">
            <main className="main-contact">
                <div className="div-contact">
                    <form onChange={handleForm} className="form-contact" action="https://formspree.io/f/mayrpayy" method="POST">
                    <h1>Contact Me</h1>
                        <div className="name-inputs">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={contact.firstName}
                                name="firstName"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={contact.lastName}
                                name="lastName"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="nicklastummler12@gmail.com"
                            value={contact.email}
                            name="email"
                        />

                        <textarea
                            placeholder="Message..."
                            value={contact.message}
                            name="message"
                        />

                        <button className="contact-button">Submit</button>
                    </form>
                </div>
            </main>
        </header>
    );
};

export default Contact;
