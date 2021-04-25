import React from "react";
import styled from "styled-components";

const SidebarOption = ({
  Icon,
  title,
  number,
  showNumber = true,
  selected,
}) => {
  return (
    <Container>
      <InnerContainer className={`${selected && "sidebarOption--active"}`}>
        <Icon />
        <p className="title">{title}</p>
        {showNumber && <p className="number">{number}</p>}
      </InnerContainer>
    </Container>
  );
};

export default SidebarOption;

const Container = styled.div`
  .sidebarOption--active {
    background-color: #f7e9e9 !important;
  }

  .sidebarOption--active > .MuiSvgIcon-root,
  .sidebarOption--active > .title,
  .sidebarOption--active > .number {
    color: #d93025 !important;
  }

  .sidebarOption--active > .title {
    font-weight: bold;
  }

  .sidebarOption--active > .number {
    display: inline;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-evenly;
  padding-left: 26px;
  padding-right: 12px;
  height: 32px;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  cursor: pointer;

  &&:hover {
    background-color: #f0f0f0;
  }

  &&:hover > .number {
    display: inline;
    color: #d93025;
  }

  &&:hover > .title {
    font-weight: 600;
    color: #d93025;
  }

  &&:hover > .MuiSvgIcon-root {
    color: #d93025;
  }

  .title {
    flex: 1;
    font-size: 0.9rem;

    -webkit-transform: scale(1, 1.1); /* Safari and Chrome */
    -moz-transform: scale(1, 1.1); /* Firefox */
    -ms-transform: scale(1, 1.1); /* IE 9 */
    -o-transform: scale(1, 1.1); /* Opera */
    transform: scale(1, 1.1); /* W3C */
  }

  .number {
    display: none;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .MuiSvgIcon-root {
    width: 20px !important;
    height: 20px !important;
    color: gray;
    margin-right: 18px;
  }
`;
