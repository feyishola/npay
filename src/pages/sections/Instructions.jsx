import React from "react";
import { Container } from "../../components/Layouts";
import styled from "styled-components";

export const Instructions = () => {
  return (
    <INSTRUCTIONS id="instructions">
      <Container>
        <h2>How it works</h2>
        <p>
        Managing and paying your utility bills has never been easier. Our platform is designed to provide a seamless and convenient experience for all users. Follow these simple steps to get started:
        </p>
        <div className="instructions-details">
          <img src="/creditcards.png" alt="Credit Card Image" />
          <div>
            <div>
              <span>01.</span>
              <div>
                <h4>
                Sign Up <b>NPay.ng</b>
                </h4>
                <p>Create an account on our platform by providing your basic details.</p>
              </div>
            </div>
            <div>
              <span>02.</span>
              <div>
                <h4>Link Your Utility Accounts</h4>
                <p>Our system supports seamless integration with major utility providers.</p>
              </div>
            </div>
            <div>
              <span>03.</span>
              <div>
                <h4>Pay Your Bills</h4>
                <p>View your due bills and make instant payments with just a few clicks.</p>
              </div>
            </div>
            <div>
              <span>04.</span>
              <div>
                <h4>Track Your Transactions</h4>
                <p>Keep track of all your payments and view detailed transaction history anytime, anywhere.</p>
              </div>
            </div>
            
          </div>
        </div>
      </Container>
    </INSTRUCTIONS>
  );
};

const INSTRUCTIONS = styled.section`
  padding-block: 4rem;
  h2 {
    color: var(--primary-npay);
    margin-bottom: 1rem;
    font-weight: bolder;
  }
  p {
    color: var(--text-paragraph);
    margin-bottom: 2rem;
    margin-inline: auto;
    width: min(35rem, 100%);
    font-size: var(--paragraph-small);
  }
  div.instructions-details {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
  }
  div.instructions-details > img {
    width: 45%;
    object-fit: cover;
  }

  div.instructions-details > div > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 2rem;
    text-align: left;
  }
  div.instructions-details > div > div span {
    background: var(--primary-white);
    padding: 1rem;
    border-radius: 50%;
    box-shadow: 1px 2px 3px 0px rgba(0 0 0 / 0.2);
  }
  div.instructions-details > div > div:nth-of-type(1) span {
    background: var(--primary-npay);
    color: var(--primary-white);
  }
  div.instructions-details > div > div h4 {
    line-height: 1.3;
    margin-bottom: 0.35rem;
    font-weight: 600;
  }
  div.instructions-details > div > div h4 b {
    color: var(--primary-npay);
    font-weight: 100;
  }
  div.instructions-details > div > div p {
    font-size: var(--paragraph-small);
    color: var(--text-paragraph);
  }

  @media screen and (max-width: 650px) {
    padding-block: 3rem;
    div.instructions-details {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      justify-content: space-between;
    }
    div.instructions-details > img {
      width: 75%;
      object-fit: cover;
    }
  }
`;
