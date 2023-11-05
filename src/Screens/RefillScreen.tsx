import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Block from "../Components/Block";
import { IBlock } from "../Interfaces/IBlock.js";
import { StoreContainer } from "../StyledComponents/StoreContainer.js";
import { StyledProductsContainer } from "../StyledComponents/StyledProductsContainer.js";
import { storeData } from "../storeData.js";

export default function RefillScreen() {
  const [Blocks, setBlocks] = useState<IBlock[]>(storeData.Blocks);

  const updateBlock = (
    e: React.ChangeEvent<HTMLInputElement>,
    blockIndex: number,
    lockerIndex: number
  ) => {
    setBlocks((prevBlocks: IBlock[]) =>
      prevBlocks.map((block, index) => {
        if (index === blockIndex) {
          return {
            ...block,
            Lockers: block.Lockers.map((locker, _lockerIndex) => {
              if (lockerIndex > -1) {
                if (lockerIndex === _lockerIndex) {
                  return { ...locker, selected: e.target.checked };
                }
                return locker;
              } else {
                return { ...locker, selected: e.target.checked };
              }
            }),
          };
        }
        return block;
      })
    );
  };

  const modifyLocker = (productId: number | null) => {
    setBlocks((prevBlocks: IBlock[]) =>
      prevBlocks.map((block) => {
        return {
          ...block,
          Lockers: block.Lockers.map((locker) => {
            if (locker.selected) {
              return { ...locker, productId: productId };
            }
            return locker;
          }),
        };
      })
    );
  };

  return (
    <Box p={1}>
      <Stack>
        {Blocks?.length ? (
          <StoreContainer>
            {Blocks.map((block, index) => {
              return (
                <Block
                  key={block.code}
                  data={block}
                  blockIndex={index}
                  updateBlock={updateBlock}
                />
              );
            })}
          </StoreContainer>
        ) : (
          "Loading store data..."
        )}
        <Box
          sx={{ background: "#ccc", borderTop: "1px solid #222", padding: 2 }}
        >
          <Typography variant="h5">Products</Typography>
          <StyledProductsContainer>
            <div onClick={() => modifyLocker(1)}>
              <img src="/1.png" alt="1" />
            </div>
            <div onClick={() => modifyLocker(2)}>
              <img src="/2.png" alt="1" />
            </div>
            <div onClick={() => modifyLocker(null)}>
              <img src="/empty.jpg" alt="1" />
            </div>
          </StyledProductsContainer>
          <Typography variant="subtitle1">How to use!</Typography>
          <Typography variant="subtitle2">
            <b>Step1:</b> Select 1 or more lockers <br />
            <b>Step2:</b> Click on a product to put it in the selected lockers!{" "}
            <br />
            Click on empty to empty the selected lockers!
          </Typography>
        </Box>
        <Box p={2}>
          <Typography variant="h5" sx={{ textDecoration: "underline" }}>
            What is this?
          </Typography>
          <Typography align="justify" paragraph>
            This is a small app, that shows a UI that monitors a modern store,
            in which products are filled into lockers by an employee, that also
            delivers the products from the farm to the store. <br />
            The employee can modify the state of each locker in the app (using a
            tablet perhaps) while changing the products in the lockers in the
            real world. <br />
            An admin (store owner or support) can monitor the state of the store
            24/7, so there is no need for an in-store employee (self checkout is
            added). <br />
            In later versions more features can be added like analytics,
            save/load store setups etc
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
