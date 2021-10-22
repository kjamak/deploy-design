import styled from "styled-components";

export default styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-flow: row wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: ${({ alignItems }) => alignItems || "normal"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
`;
