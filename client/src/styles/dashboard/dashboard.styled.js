import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;
export const Table = styled.table`
  width: 100%;
  text-align: center;
  overflow-x: auto;
  max-width: fit-content;
  margin: auto;

  th,
  td {
    padding: 10px;
  }
`;

export const DashboardButtons = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 500px;
  margin: 20px auto;
`;

export const Display = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
