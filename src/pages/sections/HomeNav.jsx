import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ButtonSmall } from "../../components/Buttons";
import { Container } from "../../components/Layouts";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../redux/authReducer/actionTypes";
import { useToast } from "../../components/custom/ToastProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faXmark } from "@fortawesome/free-solid-svg-icons";

export const HomeNav = () => {
  const showToast = useToast();
  const [user, setUser] = useState(
    useSelector((store) => store.authReducer.loggedInUser) || null
  );
  const dispatch = useDispatch();
  const { isAdmin, isAuth } = useSelector((store) => store.authReducer);
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function scrollToSelector(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function onClickHandler() {
    navigate("/login");
  }

  function logOutHandler() {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    dispatch({ type: LOGOUT });
    showToast("success", "Logged Out Successfully");
    setIsSidebarOpen(false);
  }

  // const logoPrimary = "/logos/logo-primary.png";
  const logoPrimary = "/new-npay-logo.png";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <NAV>
      <Container className="navbar">
        {windowWidth <= 650 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ButtonSmall onClick={toggleSidebar}>
              <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
            </ButtonSmall>
            <div className="logo" style={{display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center", width:"80px"}}>
            <h4 style={{color:"var(--primary-npay)"}}>NPay</h4>
            <img src="/new-npay-logo.png" height={"40px"} width={"40px"} />
            
          </div>
          </div>
        ) : (
          <>
          <div className="logo" style={{display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center", width:"80px"}}>
            {/* <img src="/logos/npay-logo-removebg-preview.png" height={"45px"} width={"45px"}/> */}
            
            <h4 style={{color:"var(--primary-npay)"}}>NPay</h4>
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
              {isAdmin ? (
                <li>
                  <Link to="/admin">Admin Dashboard</Link>
                </li>
              ) : (
                isAuth && (
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                )
              )}
            </ul>
            {user || isAdmin ? (
              <ButtonSmall onClick={logOutHandler}>Logout</ButtonSmall>
            ) : (
              <ButtonSmall onClick={onClickHandler}>Login</ButtonSmall>
            )}
          </>
        )}
      </Container>
      {isSidebarOpen && (
        <Sidebar>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={toggleSidebar}
            style={{
              color: "white",
              alignSelf: "flex-start",
              cursor: "pointer",
            }}
          />
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
            {isAdmin ? (
              <li>
                <Link to="/admin">Admin Dashboard</Link>
              </li>
            ) : (
              isAuth && (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )
            )}
          </ul>
          {user || isAdmin ? (
            <ButtonSmall onClick={logOutHandler}>Logout</ButtonSmall>
          ) : (
            <ButtonSmall onClick={onClickHandler}>Login</ButtonSmall>
          )}
        </Sidebar>
      )}
    </NAV>
  );
};

const NAV = styled.div`
  background-color: var(--primary-white);
  box-shadow:0px 2px 2.9px rgba(54,170,196,0.15);
  // border-bottom:1px solid rgba(0,0,0,0.15);
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.5rem;
  }
  h4 {
    color: var(--primary-white);
  }
  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    margin-inline: 0.5rem;
  }

  ul li a {
    color: var(--primary-npay);
    transition: color 0.2s ease-in;
  }
  ul li a:hover {
    color: var(--secondary-npay);
  }
  img {
    width: 150px;
  }

  @media screen and (max-width: 1050px) {
    /* Add styles for screens up to 1050px width */
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background-color: var(--primary-npay);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  z-index: 10000;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      margin-bottom: 1rem;
      a {
        color: var(--primary-white);
        text-decoration: none;
        transition: color 0.2s ease-in;
        &:hover {
          color: var(--primary-npay);
        }
      }
    }
  }

  button {
    margin-top: auto;
    width: 60%;
    margin-inline: auto;
    background-color:white;
    color:var(--primary-npay)
  }
`;
