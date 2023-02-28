import ButtonIcon from "../../components/buttonIcon/ButtonIcon";
import H2heading from "../../components/h2heading/H2heading";
import "./style.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const style = {
    border: 0,
    margin: "50px 0px",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(  
        'service_vr48qda',
        'template_jkq3azf',
        form.current,
        'JI4FbwxXkQ3J6gv1Y',
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message Sent');
        },
        (error) => {
          console.log(error.text);
        }
      )
    
    e.target.reset()
  };

  return (
    <main>
      <div className="contact_all">
        <div className="contact_top">
          <div className="contact_form">
            <H2heading text={"Contact Form"} />
            <form ref={form} onSubmit={sendEmail}>
              <div className="inputs">
                <input type="text" placeholder="Name" name="user_name" />
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  name="user_email"
                />
              </div>
              <textarea
                placeholder="Message"
                id="message"
                name="message"
                rows="5"
              ></textarea>
              <ButtonIcon text={"Submit"} />
            </form>
          </div>
          <div className="contact_information">
            <H2heading text={"Contact information"} />
            <ul>
              <li>
                <strong>Address:</strong> 107727 Santa Monica Boulevard Los
                Angeles
              </li>
              <li>
                <strong>Phone:</strong> +38 012-3456-7890
              </li>
              <li>
                <strong>Job:</strong> Freelancer
              </li>
              <li>
                <strong>Email:</strong> henry@domain.com
              </li>
              <li>
                <strong>Skype:</strong> henryrooney85
              </li>
            </ul>
            <ul className="socialLinks">
              <li>
                <Link>F</Link>
              </li>
              <li>
                <Link>L</Link>
              </li>
              <li>
                <Link>G</Link>
              </li>
              <li>
                <Link>I</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact_bottom">
          <H2heading text={"Contact Map."} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6162.700106043214!2d49.87388843461039!3d40.38162781859051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzU0LjYiTiA0OcKwNTInMDUuNCJF!5e0!3m2!1sru!2saz!4v1677572139036!5m2!1sru!2saz"
            width="100%"
            height="350"
            style={style}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Location"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
