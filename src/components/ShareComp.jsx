import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

const ShareComp = () => {
  return (
    <ShareStyle>
      <FaFacebookF className="icon" />
      <FaTwitter className="icon" />
      <FaInstagram className="icon" />
      <FaPinterestP className="icon" />
      <FaWhatsapp className="icon" />
    </ShareStyle>
  );
};

const ShareStyle = styled.div`
  display: flex;
  gap: 7px;
  .icon {
    border: 1px solid black;
    padding: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50px;
  }
`;

export default ShareComp;
