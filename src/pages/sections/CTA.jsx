import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Buttons";
import { Container } from "../../components/Layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const CTA = () => {
  return (
    <div id="contact">
    
       <MyContainer>
      <Wrapper>
        <Info>
          <Map src="/removebg/map.png" alt="Map" />
          <div style={{ textAlign: "start", fontWeight:"bold", color:"var(--primary-npay)"}}>
            <p>Address: No. 3 Block C, Along Ibrahim Taiwo Road, Jos, Plateau State.</p>
            <p>Phone: +2347016690777</p>
            <p>Email: info@npay.ng</p>
            <p>Website: https://npay.ng</p>
          </div>
          <div >
            <div style={{ textAlign: "start",gap:"30px"}}>
              <a href="https://web.facebook.com/people/npayng/61564185981946/?mibextid=ZbWKwL">
                <FontAwesomeIcon icon={faFacebook} style={{padding:"10px",fontSize:"50px", color:"white"}}/>
              </a>
              <a href="https://x.com/npayng?t=Q4zEAfbQ7sLJOMMcQzOO8w&s=09">
                <FontAwesomeIcon icon={faTwitter} style={{padding:"10px",fontSize:"50px", color:"white"}}/>
              </a>
              {/* <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a> */}
              <a href="https://www.instagram.com/npay.ng?igsh=MTlmbmcxODd1dHd3Yw==">
                <FontAwesomeIcon icon={faInstagram} style={{padding:"10px",fontSize:"50px", color:"white"}}/>
              </a>
            </div>
          </div>
        </Info>
        <FormWrapper>
          <Title>Need Help?</Title>
          <Subtitle>We work with you on your most critical business priorities</Subtitle>
          <label style={{color:"white", textAlign:"start", font:"20px"}}>Name:</label>
          <Input type="text" placeholder="Name" />
          <label style={{color:"white", textAlign:"start", font:"20px"}}>Subject:</label>
          <Input type="text" placeholder="Subject" />
          <label style={{color:"white", textAlign:"start", font:"20px"}}>Email:</label>
          <Input type="email" placeholder="Email" />
          <label style={{color:"white", textAlign:"start", font:"20px"}}>PhoneNumber:</label>
          <Input type="text" placeholder="Phone Number" />
          <TextArea placeholder="Your Message"></TextArea>
          <FormButton>Contact Us</FormButton>
        </FormWrapper>
      </Wrapper>
    </MyContainer>
    </div>
  );
};



const MyContainer = styled.div`
  // background-color: #0b4075; /* Use the actual background color from the Figma file */
  padding: 50px 20px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--primary-npay) url('/removebg/office.jpg') no-repeat center center/cover;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Overlay color */
    z-index: 1;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
    a:hover {
    color: var(--primary);
  }
`;

const Info = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2; /* Ensures the content is above the overlay */
`;

const Map = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
`;

const FormWrapper = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2; /* Ensures the content is above the overlay */
`;

const Title = styled.h2`
  color: var(--primary-npay);
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  background-color:transparent;

   color: white; /* Ensures text is visible */
  
  &:focus {
    outline: none; /* Removes the black outline on focus */
    border-color: white; /* Ensures the border color remains white */
  }

  ::placeholder {
    color: black; /* Sets placeholder color to white */
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  height: 100px;
  width: 100%;
`;

const FormButton = styled.button`
  background-color: var(--primary-npay);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;