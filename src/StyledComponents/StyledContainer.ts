import styled from "@emotion/styled";

interface IProps {
  column?: any;
}

export const StyledContainer = styled.div((props: IProps) => ({
  display: "flex",
  flexDirection: props.column && "column",
}));
