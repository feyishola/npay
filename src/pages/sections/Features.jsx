import React from "react";
import { Container } from "../../components/Layouts";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faFileInvoice,
  faLock,
  faUserFriends,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export const Features = () => {
  return (
    <div>
      <div>
        <FEATURES id="features">
          <Container>
            <div className="feature-header" style={{marginBottom:"0px", paddingBottom:"0px"}}>
              <h2 style={{paddingBottom:"35px"}}>Key Features and Benefits</h2>
              <p>
                {/* Let us help you identify strategic opportunities and increase impact
                with every dollar. */}
              </p>
            </div>
            <div className="features">
              <div className="feature-infocard">
                <div>
                  <FontAwesomeIcon icon={faLock} className="icon" />
                </div>
                <h5>Fast and Secure Payments</h5>
                <p>
                  We ensure that your utility payments are processed instantly and securely.
                </p>
              </div>
              <div className="feature-infocard">
                <div>
                  <FontAwesomeIcon icon={faUserFriends} className="icon" />
                </div>
                <h5>User-Friendly Interface</h5>
                <p>
                  Our easy-to-navigate interface makes it simple for anyone to manage and pay their utility bills with just a few clicks.
                </p>
              </div>
              <div className="feature-infocard">
                <div>
                  <FontAwesomeIcon icon={faListAlt} className="icon" />
                </div>
                <h5>Comprehensive Transaction Tracking</h5>
                <p>
                  This feature helps you stay organized and in control of your utility expenses.
                </p>
              </div>
            </div>
          </Container>
        </FEATURES>
      </div>

      <div style={{marginTop:"100px"}}>

      <Container>
        <LogoCarousel>
          <div className="partner-header" style={{ paddingBottom: "70px", marginBottom: "5px", color:"var(--primary-npay)" }}>
            <h2>Key Partners</h2>
          </div>
          <div className="logos-wrapper">
            <img src="/removebg/aes.png" alt="Logo 1" className="logo" />
            <img src="/removebg/irecharge.png" alt="Logo 2" className="logo" />
            <img src="/removebg/lotus.png" alt="Logo 3" className="logo" />
            <img src="/removebg/uba2.png" alt="Logo 4" className="logo" />
            <img src="/removebg/aes.png" alt="Logo 1" className="logo" />
            <img src="/removebg/irecharge.png" alt="Logo 2" className="logo" />
            <img src="/removebg/lotus.png" alt="Logo 3" className="logo" />
            <img src="/removebg/uba2.png" alt="Logo 4" className="logo" />
          </div>
        </LogoCarousel>
      </Container>

      </div>
    </div>
  );
};

const FEATURES = styled.section`
  width: min(69rem, 100%);
  margin-inline: auto;
  background-color: var(--primary-npay);
  color: var(--primary-white);
  padding-block: 3rem;
  position: relative;

  div.feature-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-block: 1rem 5rem;
    // margin-bottom: 2rem;
  }

  div.feature-header h2 {
    max-width: 600px;
    line-height: 1.1;
    text-align: left;

  }

  div.feature-header p {
    color: var(--primary-grey);
    font-size: var(--paragraph-small);
    max-width: 40%;
    text-align: right;
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-inline: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  .features .feature-infocard {
    flex: 1 1 calc(33.333% - 2rem); /* Adjusted for the gap */
    padding: 2rem;
    background-color: var(--primary-white);
    color: var(--text-paragraph);
    min-height: 250px;
    box-shadow: 0px 1px 10px 0 rgba(0, 0, 0, 0.1);
  }

  .features .feature-infocard > div .icon {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: var(--primary-npay);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: var(--primary-white);
  }

  .features .feature-infocard h5 {
    max-width: 70%;
    margin-inline: auto;
    margin-bottom: 1rem;
    color: var(--primary-npay);
  }

  .features .feature-infocard p {
    font-size: var(--paragraph);
  }

  @media screen and (max-width: 1050px) {
    margin-inline: auto;
    padding-inline: 1rem;

    div.feature-header {
      padding-block: 1rem 5rem;
    }

    .features {
      gap: 1rem;
    }

    .features .feature-infocard {
      flex: 1 1 calc(50% - 1rem); /* Adjusted for the gap */
      padding: 1rem;
      min-height: auto;
    }

    .features .feature-infocard > div .icon {
      padding: 1rem;
      width: 25px;
      height: 25px;
    }
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    padding-inline: 0;

    div.feature-header {
      // margin-bottom: 2rem;
    }

    div.feature-header h2 {
      font-size: var(--h3);
    }

    div.feature-header p {
      margin-bottom: 5rem;
    }

    .features {
      gap: 1rem;
    }

    .features .feature-infocard {
      flex: 1 1 100%;
      padding: 1rem 0.5rem;
      margin-top: 2rem;
      height: auto;
    }

    .features .feature-infocard > div .icon {
      margin-bottom: 1rem;
      width: 20px;
      height: 20px;
    }

    .features .feature-infocard h5 {
      max-width: auto;
      margin-bottom: 0.5rem;
    }
  }
`;


const LogoCarousel = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f8f8f8;

  .logos-wrapper {
    display: flex;
    justify-content: space-around;
    animation: scroll 20s linear infinite;
    width: calc(4 * 350px); /* Adjust width to fit 4 logos */

    .logo {
      width: 350px;
      height: auto;
      padding: 15px;
      opacity:0.5;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @media screen and (max-width: 650px) {
    .logos-wrapper {
      width: calc(4 * 250px); /* Adjust width to fit 4 logos on smaller screens */
      animation: scroll 15s linear infinite;
    }

    .logo {
      width: 250px;
      padding: 10px;
    }
  }
`;

