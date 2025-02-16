"use client";

import { useState } from "react";
import { Box, Button, Container, Paper, TextField, Typography, Alert, useTheme } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const theme = useTheme();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    
    if (!form.username.trim() || !form.password.trim()) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);
    
    const result = await signIn("credentials", {
      redirect: false,
      username: form.username,
      password: form.password,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid username or password.");
    } else {
      window.location.href = "/sip-users";
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container component="main" maxWidth="xs" sx={{ flexGrow: 1, padding: 4, marginTop: 32 }}>
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

          {error && <Alert severity="error" sx={{ width: "100%", marginBottom: 2 }}>{error}</Alert>}

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={form.username}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={form.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<LockIcon />}
              sx={{ marginTop: 2, fontWeight: "bolder", color: theme.text.secondary, }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
