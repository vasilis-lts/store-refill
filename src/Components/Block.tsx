import { Box, Checkbox, Typography } from "@mui/material";
import { IBlock } from "../Interfaces/IBlock";
import { StyledBlock } from "../StyledComponents/StyledBlock";
import { StyledContainer } from "../StyledComponents/StyledContainer";
import { StyledProductBlock } from "../StyledComponents/StyledProductBlock";

interface IProps {
  data: IBlock;
  blockIndex: number;
  updateBlock: (
    e: React.ChangeEvent<HTMLInputElement>,
    blockIndex: number,
    lockerIndex: number
  ) => void;
}

export default function Block(props: IProps) {
  const { code, Lockers } = props.data;
  const { blockIndex, updateBlock } = props;

  return (
    <StyledBlock>
      <StyledContainer>
        <header>Block {code}</header>
        <Checkbox
          onChange={(e) => updateBlock(e, blockIndex, -1)}
          inputProps={{ "aria-label": code }}
        />
      </StyledContainer>
      {Lockers?.length && (
        <StyledContainer column style={{ width: "100%" }}>
          {Lockers.map((locker, lockerIndex) => {
            return (
              <Box
                key={lockerIndex}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid #222",
                  padding: "0 5px",
                }}
              >
                <Typography variant="subtitle1">
                  Locker {locker.code}
                </Typography>
                <StyledProductBlock>
                  {locker.productId ? (
                    <img
                      src={`/${locker.productId}.png`}
                      alt={`${locker.productId}`}
                    />
                  ) : (
                    <img src={`/empty.jpg`} alt={`no product`} />
                  )}
                </StyledProductBlock>
                <Checkbox
                  key={lockerIndex}
                  checked={!!locker.selected}
                  onChange={(e) => updateBlock(e, blockIndex, lockerIndex)}
                  inputProps={{ "aria-label": locker.code }}
                />
              </Box>
            );
          })}
        </StyledContainer>
      )}
    </StyledBlock>
  );
}
