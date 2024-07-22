import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Buttons";
import { Container } from "../../components/Layouts";

export const CTA = () => {
  return (
    <CALLTOACTION id="contact">
      <Container>
        <div className="cta">
          <div className="cta-content">
            <h2>Get in Touch</h2>
            <p>Contact Details:</p>
            <p>
              <strong>Office Address:</strong> No. 3 Block C, Along Ibrahim Taiwo Road, Jos, Plateau State.
            </p>
            <p>
              <strong>Phone Number:</strong> +2347016690777
            </p>
            <p>
              <strong>Email Address:</strong> <a href="mailto:info@npay.ng">info@npay.ng</a>
            </p>
            <p>
              <strong>Website:</strong> <a href="https://npay.ng" target="_blank" rel="noopener noreferrer">https://npay.ng</a>
            </p>
          </div>
          <div className="cta-image">
            <img src="/contact-us.png" alt="Call To Action Image" />
          </div>
        </div>
      </Container>
    </CALLTOACTION>
  );
};

const CALLTOACTION = styled.section`
  position: absolute;
  width: 100%;
  left: 50%;
  bottom: 70%;
  transform: translateX(-50%);
  background-color: var(--secondary-npay);

  .cta {
    position: relative;
    top: 100%;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 25rem;
  }

  .cta .cta-content {
    max-width: 20rem;
    text-align: left;
    margin-left: 2rem;
  }
  .cta .cta-content h2 {
    margin-bottom: 0.5rem;
    color: var(--primary-white);
  }
  .cta .cta-content p {
    margin-bottom: 2rem;
    color: var(--primary-white);
  }
  .cta .cta-image {
    overflow-x: hidden;
  }
  .cta .cta-image img {
    position: absolute;
    object-fit: cover;
    width: 25rem;
    bottom: 0;
    right: 10%;
  }

  @media screen and (max-width: 940px) {
    .cta .cta-content {
      max-width: 18rem;
      margin-left: 0rem;
    }
    .cta .cta-content p {
      margin-bottom: 1rem;
      font-size: var(--link);
    }
    .cta .cta-image img {
      width: 15rem;
      right: 6%;
    }
  }

  @media screen and (max-width: 700px) {
    .cta {
      padding: 1rem;
    }
    .cta .cta-content {
      max-width: 13rem;
      margin: 0rem;
    }
    .cta .cta-content h2 {
      font-size: var(--h3);
    }
    .cta .cta-content p {
      margin-bottom: 1rem;
      font-size: var(--link);
    }
    .cta .cta-image img {
      width: 8rem;
      right: 3%;
    }
  }
`;
