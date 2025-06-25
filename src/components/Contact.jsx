import React from 'react';
import {openingHours,socials} from "../../constants/index.jsx";

const Contact = () => {
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className = "content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>Sec 23, Dakshin Marg, Chandigarh</p>
                </div>

                <div>
                    <h3>CONTACT US</h3>
                    <p>+91 8813099789</p>
                    <br/>
                    <p>helloMrMocktails@gmail.com</p>
                </div>

                <div>
                    <h3>OPEN EVERY DAY</h3>
                    {openingHours.map((time) =>(
                        <p key = {time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img src={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
