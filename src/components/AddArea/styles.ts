import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: solid 1px #555;
  padding: 15px;
  margin: 20px 0;
  border-radius: 15px;
  align-items: center;

  .image {
    margin-right: 5px;
  }

  input {
    border: 0;
    outline: 0;
    background: transparent;
    color: white;
    font-size: 1.5rem;
    flex: 1;
  }
`;
