import React from 'react'
import styled from "styled-components";
import image from "../assets/character.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";
const Profile = () => {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>@User</h2>
        <h5>
          <HiOutlineLocationMarker /> Dhaka, Bangladesh
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Active Days Count</h5>
          <h3>56</h3>
        </div>
        <div className="container">
          <h5>Workers</h5>
          <h3>987</h3>
        </div>
        <div className="container">
          <h5>Total Hours</h5>
          <h3>4556</h3>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #07ff30;
      font-family: 'Bungee Inline', cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;

export default Profile;