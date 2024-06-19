import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideNav = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: auto;
  margin: 0;
  top: 0;
  right: 0;
  opacity: ${({ isOpen }) => (isOpen ? "99.5%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  transition: all 0.3s ease-in-out;
`;
export const SidebarWrapper = styled.ul`
  position: fixed;
  list-style-type: none;
  background: #212121;
  margin: 0;
  padding: 0;
  width: 18rem;
  height: 100%;
  overflow-x: hidden;
  border: none;
`;
export const CloseIcon = styled.i`
  position: fixed;
  top: 0.5rem;
  font-size: 25px;
  color: #dddddd;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? "15rem" : "0")};

  &:hover {
    color: red;
  }
`;

export const Item = styled.li`
  display: block;
  width: 100%;
  color: #dddddd;
  background: #000;
  padding: 0 0 0.5rem;
  font-size: 20px;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  padding-left: 1rem;
`;

export const SubList = styled.div`
  background: transparent;
  padding: 0.5rem 0 1.5rem;
`;

export const SubListWrapper = styled.ul`
  border: none;
  list-style: none;
`;

export const SubItem = styled.li`
  margin-left: 0;
  padding: 0.2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #161616;
    border: none;
    border-left: solid red 5px;
    cursor: pointer;
  }

  &:hover a {
    color: red;
    font-weight: 500;
  }

  &.settings {
    background: none;
    border: none;
  }

  &.anchor {
    display: block;
    background: none;
    border: none;
    color: red;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SubItemLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 200;
  color: #dddddd;
  transition: all 0.1s ease-in-out;
`;
