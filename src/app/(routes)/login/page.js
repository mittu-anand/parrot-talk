"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function LoginPage() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column"}}>

      <Container
        component="main"
        maxWidth="xs"
        sx={{ flexGrow: 1, padding: 4, marginTop: 32 }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 8,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Log in to your account
          </Typography>

          <form>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<LockIcon />}
              sx={{
                marginTop: 2,
                color: theme.text.secondary,
                fontWeight: "bolder",
              }}
            >
              Log In
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
