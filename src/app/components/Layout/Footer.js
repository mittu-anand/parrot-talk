import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Divider />
      <Box sx={{ mt: "auto", backgroundColor: "#f8f8f8", padding: 6 }}>
        <Typography variant="body2"  align="center">
          © {new Date().getFullYear()} ParrotsTALK. A tech portfolio project by <span style={{color:'#47a3b8 !important'}}>MITTU ANAND.</span>
        </Typography>
      </Box>
    </>
  );
}
