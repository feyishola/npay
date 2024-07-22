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
    <div className="feature-header">
      <h2>Key Features and Benefits</h2>
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


    <div style={{marginTop:"30px"}}>
    <PARTNERS id="partners">
  <Container>
    <div className="partner-header" style={{ paddingBottom: "16px", marginBottom: "5px" }}>
      <h2>Key Partners</h2>
      <p>
        {/* Let us help you identify strategic opportunities and increase impact
        with every dollar. */}
      </p>
    </div>
    <div className="partners">
      <div className="partner-infocard">
        <h5>All stream Energy Solutions Ltd</h5>
        <p>
          (AES) Ltd was incorporated in Nigeria on the 28th of June 2004, with RC No. 600654. It commenced business on the 1st of July 2004 with supply of Automotive Gas Oil (AGO) to all cell sites belonging to MTN Nigeria in the Northern part of Nigeria. The company was also supplying to all branches of Guaranty Trust Bank in the North and other corporate organizations. 
        </p>
      </div>
      <div className="partner-infocard">
        <h5>Irecharge</h5>
        <p>
          iRecharge is a bill payment platform that provides seamless financial solutions and access to frequently consumed services like Airtime, Internet, Electricity, Pay Cable TV, Sports Betting, Ticketing and other virtual services. We aggregate Telcos, DisCos and other service providers to provide value added services to consumers. Our Focus is Simplicity, Accessibility and Convenience.
        </p>
      </div>
      <div className="partner-infocard">
        <h5>United Bank for Africa</h5>
        <p>
          United Bank for Africa (UBA) is Africa’s Global bank with a rich history spanning over seven decades. The bank which is headquartered in Lagos, Nigeria, is one of the most recognised financial institutions to originate from Sub-Saharan Africa with thriving operations in 20 African countries – Republique du Benin, Burkina Faso, Cameroun, Congo Brazzaville, Congo DRC, Cote d’lvoire, Gabon, Ghana, Guinea, Kenya, Liberia, Mali, Mozambique, Nigeria, Senegal, Sierra Leone, Tanzania, Tchad, Uganda and Zambia.
        </p>
      </div>
      <div className="partner-infocard">
        <h5>Lotus Bank</h5>
        <p>
          LOTUS BANK is a Non-Interest Nigerian Bank deeply rooted in ethical banking, committed to ethical investing and ethical prosperity. We are committed to deepening financial inclusion and broadening the array of non-interest products available to the banked, unbanked, and under-banked population.
        </p>
      </div>
    </div>
  </Container>
</PARTNERS>

  </div>
  </div>
  );
};

const FEATURES = styled.section`
  width: min(69rem, 100%);
  margin-inline: auto;
  background-color: var(--secondary-npay);
  color: var(--primary-white);
  padding-block: 3rem;
  position: relative;

  div.feature-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-block: 1rem 5rem;
    margin-bottom: 2rem;
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
    background-color: var(--secondary-npay);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: var(--primary-white);
  }

  .features .feature-infocard h5 {
    max-width: 70%;
    margin-inline: auto;
    margin-bottom: 1rem;
    color: var(--background-light);
  }

  .features .feature-infocard p {
    font-size: var(--link);
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
      margin-bottom: 2rem;
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


const PARTNERS = styled.section`
  width: min(69rem, 100%);
  margin-inline: auto;
  color: var(--secondary-npay);
  padding-block: 3rem;
  position: relative;

  .partner-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-block: 1rem 5rem;
    margin-bottom: 2rem;
  }

  .partner-header h2 {
    max-width: 600px;
    line-height: 1.1;
    text-align: left;
  }

  .partner-header p {
    color: var(--primary-white);
    font-size: var(--paragraph-small);
    max-width: 40%;
    text-align: right;
  }

  .partners {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding-inline: 1rem;
  }

  .partners .partner-infocard {
    padding: 2rem;
    background-color: var(--secondary-npay);
    color: var(--primary-white);
    min-height: 250px;
    box-shadow: 0px 1px 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .partners .partner-infocard .icon {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: var(--secondary-npay);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: var(--primary-white);
  }

  .partners .partner-infocard h5 {
    margin-bottom: 1rem;
    color: var(--primary-white);
    text-align: center;
  }

  .partners .partner-infocard p {
    font-size: var(--link);
    text-align: center;
  }

  @media screen and (max-width: 1050px) {
    .partners {
      grid-template-columns: repeat(2, 1fr);
    }

    .partners .partner-infocard {
      padding: 1rem;
      min-height: auto;
    }

    .partners .partner-infocard .icon {
      width: 25px;
      height: 25px;
    }
  }

  @media screen and (max-width: 650px) {
    .partner-header {
      margin-bottom: 2rem;
    }

    .partner-header h2 {
      font-size: var(--h3);
    }

    .partner-header p {
      margin-bottom: 5rem;
    }

    .partners {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .partners .partner-infocard {
      padding: 1rem 0.5rem;
      margin-top: 2rem;
    }

    .partners .partner-infocard .icon {
      width: 20px;
      height: 20px;
    }

    .partners .partner-infocard h5 {
      margin-bottom: 0.5rem;
    }
  }
`;
