import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px;
  border-radius: 4px;
  background: ${grey[500]};

  & header {
    font-size: 20px;
    font-weight: 700;
    padding: 5px;
    margin-bottom: 5px;
  }
`;
