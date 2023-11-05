import { Box, AppBar, Typography } from '@mui/material'

export default function TopBar() {
  return (
    <AppBar sx={{ background: "#120987" }} position="static">
      <Box p={1} sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Store Refill
        </Typography>
      </Box>
    </AppBar>
  );
}