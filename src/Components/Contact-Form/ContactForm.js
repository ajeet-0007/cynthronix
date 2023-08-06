import { React, useState } from "react";
import "./ContactForm.css";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import axios from "axios";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [projectdescription, setProjectDescription] = useState("");
    const [date, setDate ] = useState(new Date().toLocaleString())

    const redirectToGmail = () => {
            const email = "cynthronix@gmail.com"; // Replace this with the desired email
            const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
                email
            )}`;
        window.open(gmailUrl, "_blank"); // Replace this URL with the Gmail URL
    };

    const formhandler = (event) => {
        event.preventDefault();
        const data = {
            Name: name,
            Email: email,
            Phone_Number: phonenumber,
            Project_Description: projectdescription,
            Date: date
        };
        axios
            .post(
                "https://sheet.best/api/sheets/95f5488b-9890-4761-865c-99bbca49bd57",
                data
            )
            .then((response) => {
                 setEmail("");
                 setName("");
                 setPhoneNumber("");
                 setProjectDescription("");
            });
       
    };

    return (
        <div className="contact-form-main">
            <div className="contact-form-heading">
                <h1>Let`s Chat and Get Started</h1>
            </div>
            <div className="contact-form-div">
                <div className="contact-form-div-aside">
                    <div>
                        <h2>Contact us any time</h2>
                    </div>
                    <div>
                        <h5>
                            If you have project requirements or you feel like
                            knowing Cynthronix, just the fill the form and we
                            are just a click away.
                        </h5>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <AiOutlineMail></AiOutlineMail>
                            </li>
                            <li onClick={redirectToGmail} target="_blank">
                                <h6>cynthronix@gmail.com</h6>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <AiOutlineWhatsApp></AiOutlineWhatsApp>
                            </li>
                            <li>
                                <h6>+91-7248148407</h6>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <CiLinkedin></CiLinkedin>
                            </li>
                            <li>
                                <h6>Reach Us</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact-form-div-right">
                    <form onSubmit={formhandler}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                aria-describedby="name"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            ></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">
                                Email address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            ></input>
                            <small id="emailHelp" class="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input
                                type="text"
                                class="form-control"
                                id="budget"
                                aria-describedby="budgeet"
                                placeholder="Enter phone number"
                                value={phonenumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                            ></input>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                                Project Description
                            </label>
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Enter project description"
                                value={projectdescription}
                                onChange={(e) => {
                                    setProjectDescription(e.target.value);
                                }}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="btn btn-primary"
                                onClick={() => {
                                    alert("Form Submitted Successfully");
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
