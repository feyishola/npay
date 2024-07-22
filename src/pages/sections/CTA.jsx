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
      
            {/* <Button bg="dark">Visit Site</Button> */}
          {/* </div> */}
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

  .cta {
    position: relative;
    top: 100%;
    background-color: var(--secondary-npay);
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
    /* margin-bottom:5.5rem; */
    bottom: 0;
    right: 10%;
    /* width:70%; */
  }
  @media screen and (max-width: 940px) {
    .cta .cta-content {
      max-width: 18rem;
      margin-left: 0rem;
    }
    .cta .cta-content p {
      margin-bottom: 1rem;
      color: var(--text-paragraph);
      font-size: var(--link);
    }
    .cta .cta-image img {
      width: 20rem;
      /* margin-bottom:5.5rem; */
      right: 6%;
      /* width:70%; */
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
    .cta .cta-content h2{
      font-size:var(--h3);
    }
    .cta .cta-content p {
      margin-bottom: 1rem;
      color: var(--text-paragraph);
      font-size: var(--link);
    }
    .cta .cta-image img {
      width: 13rem;
      /* margin-bottom:5.5rem; */
      right: 3%;
      /* width:70%; */
    }
  }
`;
// export const CTA = () => {
//   return (
//     <CALLTOACTION id="cta">
//       <Container>
//         <div className="cta">
//           <div className="cta-content">
//             <h2>Get in Touch</h2>
//             <p>Contact Details:</p>
//             <p>
//               <strong>Office Address:</strong> No. 3 Block C, Along Ibrahim Taiwo Road, Jos, Plateau State.
//             </p>
//             <p>
//               <strong>Phone Number:</strong> +2347016690777
//             </p>
//             <p>
//               <strong>Email Address:</strong> <a href="mailto:info@npay.ng">info@npay.ng</a>
//             </p>
//             <p>
//               <strong>Website:</strong> <a href="https://npay.ng" target="_blank" rel="noopener noreferrer">https://npay.ng</a>
//             </p>
//           </div>
//         </div>
//       </Container>
//     </CALLTOACTION>
//   );
// };

// const CALLTOACTION = styled.section`
//   width: 100%;
//   background-color: var(--secondary-npay);
//   padding: 2rem 0;

//   .cta {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .cta-content {
//     text-align: left;
//     color: var(--text-paragraph);
//     background-color: white;
//     padding: 2rem;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     max-width: 600px;
//     width: 100%;
//   }

//   .cta-content h2 {
//     color: var(--text-heading);
//     margin-bottom: 1rem;
//   }

//   .cta-content p {
//     margin-bottom: 1rem;
//   }

//   .cta-content a {
//     color: var(--primary-npay);
//     text-decoration: none;
//   }

//   @media (max-width: 940px) {
//     .cta-content {
//       padding: 1.5rem;
//     }
//   }

//   @media (max-width: 700px) {
//     .cta-content {
//       padding: 1rem;
//     }

//     .cta-content h2 {
//       font-size: 1.5rem;
//     }
//   }
// `;