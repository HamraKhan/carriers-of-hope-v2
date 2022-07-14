import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  h2,
  p {
    text-align: center;
  }
`;

export const StyledNav = styled.nav`
  height: 90px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  /* padding: 0.5rem 0rem; */
  background-color: hsl(0, 0%, 4%);
  color: black;
  z-index: 1;
  cursor: pointer;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  /* // navbar.css */

  .navigation-menu {
    margin-left: auto;
  }
  .navigation-menu ul {
    display: flex;
    padding: 0;
  }

  .navigation-menu li {
    /* // removes default disc bullet for li tags and applies margin to left & right side */
    list-style-type: none;
    margin: 0 1rem;
  }

  .navigation-menu li a {
    /* // increases the surface area of the anchor tag to span more than just the anchor text */
    text-decoration: none;
    display: block;
    width: 100%;
  }

  .hamburger {
    /* // removes default border on button element */
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    /* // positions the icon to the right and center aligns it vertically */
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
  }

  @media screen and (max-width: 768px) {
    .hamburger {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    .navigation-menu ul {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .navigation-menu.expanded ul {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    .navigation-menu ul {
      /* // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar) */
      position: absolute;
      top: 60px;
      left: 0;
      /* // stacks the li tags vertically  */
      flex-direction: column;
      /* // makes menu span full height and width */
      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;
    }

    .navigation-menu li {
      /* // centers link text and strips off margin */
      text-align: center;
      margin: 0;
    }

    .navigation-menu li a {
      color: black;
      /* // increases the surface area of the anchor tag to span the full width of the menu */
      width: 100%;
      padding: 1.5rem 0;
    }

    .navigation-menu li:hover {
      background-color: #eee;
    }
  }

  p {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 30px;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
`;

export const Text = styled.p`
  width: 60%;
`;

export const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  img {
    display: block;
    width: 40%;
    max-width: 100%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    margin-bottom: 50px;
  }
`;

export const StyledFooter = styled.footer`
  background-color: hsl(0, 0%, 4%);
  color: white;
  padding: 30px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Oops = styled.div`
  img {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 300px;
  gap: 20px;
  margin: 0 auto;
`;
