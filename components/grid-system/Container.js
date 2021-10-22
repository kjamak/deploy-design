import styled from "styled-components";

export default styled.div`
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 576px) and (max-width: 768px) {
    max-width: ${({ fluid }) => (fluid ? "none" : "540px")};
  }
  @media (min-width: 768px) and (max-width: 992px) {
    max-width: ${({ fluid }) => (fluid ? "none" : "750px")};
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: ${({ fluid }) => (fluid ? "none" : "960px")};
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
    max-width: ${({ fluid }) => (fluid ? "none" : "1140px")};
  }
  @media (min-width: 1600px) {
    max-width: ${({ fluid }) => (fluid ? "none" : "1540px")};
  }
`;
