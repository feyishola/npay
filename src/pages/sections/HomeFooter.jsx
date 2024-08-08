import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from React Router

export const HomeFooter = ({ children }) => {
  function scrollToSelector(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <FOOTER style={{marginTop:"30px", paddingTop:"30px"}}>
      {children}
      <Container>
        <nav>
          <div className="logo" style={{display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <h4>NPay</h4>
              <img src="/new-npay-logo.png" height={"40px"} width={"40px"}/>
              
          </div>
          <ul>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#hero")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#features")}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#instructions")}>
                Instructions
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#services")}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="socials">
          <div>
            <a href="https://web.facebook.com/people/npayng/61564185981946/?mibextid=ZbWKwL">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/npayng?t=Q4zEAfbQ7sLJOMMcQzOO8w&s=09">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            {/* <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a> */}
            <a href="https://www.instagram.com/npay.ng?igsh=MTlmbmcxODd1dHd3Yw==">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div style={{textAlign:"right"}}>
            <p>
              <FontAwesomeIcon icon={faCopyright} className="copyright-icon" />
              2024 All rights reserved
            </p>
            <p>Phone: +2347016690777</p>
            <p>Email: info@npay.ng</p>
            <p>Website: https://npay.ng</p>
            <p>Address: No. 3 Block C, Along Ibrahim Taiwo Road, Jos, Plateau State.</p>
          </div>
          
        </div>
      </Container>
    </FOOTER>
  );
};

const FOOTER = styled.footer`
  margin-top: 20rem;
  position: relative;
  background-color: var(--background-dark);
  padding-top: 8rem;
  color: white;
  .logo {
    width: 8rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.5rem;
    margin-bottom: 1rem;
  }
  h4 {
    color: var(--primary-npay);
  }
  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    margin-inline: 0.5rem;
  }

  ul li a {
    color: white;
    transition: color 0.2s ease-in;
  }
  ul li a:hover {
    color: var(--primary-npay);
  }
  hr {
    margin-bottom: 1rem;
  }
  div.socials {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
  }
  div.socials > div a {
    color: white;
    font-size: var(--text-paragraph);
    margin-right: 0.75rem;
  }
  div.socials > div a:hover {
    color: var(--primary-npay);
  }

  div.socials > p {
    color: var(--primary-npay);
    font-size: var(--button);
  }
  .copyright-icon {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 650px) {
    margin-top:8rem;
  }
`;
