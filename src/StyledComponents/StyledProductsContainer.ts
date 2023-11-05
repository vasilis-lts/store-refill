import styled from "@emotion/styled";

export const StyledProductsContainer = styled.div`
  display: flex;
  padding: 10px 0;
  width: 100%;
  overflow-x: auto;

  & img {
    margin-right: 10px;
    width: 80px;
    border: 1px solid #ddd;
    padding: 5px;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      border-color: #222;
    }
  }
`;
