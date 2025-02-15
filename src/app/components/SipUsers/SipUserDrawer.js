"use client";

import React, { useState, useEffect } from "react";
import { Drawer, Box, TextField, Button, Typography, Divider } from "@mui/material";

const SipUserDrawer = ({ open, onClose, onSave, user }) => {
  const [formData, setFormData] = useState({
    username: "",
    secret: "",
    context: "",
    host: "",
    disallow: "all",
    allow: "ulaw",
    nat: "yes",
    directmedia: "no",
    qualifymethod: "sip",
    port: 5060,
    is_active: 1,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        ...user,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({
      username: "",
      secret: "",
      context: "",
      host: "",
      disallow: "all",
      allow: "ulaw",
      nat: "yes",
      directmedia: "no",
      qualifymethod: "sip",
      port: 5060,
      is_active: 1,
    });
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 600, padding: 8 }}>
        <Typography variant="h6">
          {user ? "Edit SIP User" : "Create SIP User"}
        </Typography>
        <Divider sx={{marginTop:2}}/>
      <div style={{marginTop: 24}}>
      <TextField
          label="Username"
          name="username"
          fullWidth
          value={formData.username}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Secret"
          name="secret"
          fullWidth
          value={formData.secret}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Context"
          name="context"
          fullWidth
          value={formData.context}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Host"
          name="host"
          fullWidth
          value={formData.host}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Disallow"
          name="disallow"
          fullWidth
          value={formData.disallow}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Allow"
          name="allow"
          fullWidth
          value={formData.allow}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="NAT"
          name="nat"
          fullWidth
          value={formData.nat}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Direct Media"
          name="directmedia"
          fullWidth
          value={formData.directmedia}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Qualify Method"
          name="qualifymethod"
          fullWidth
          value={formData.qualifymethod}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Port"
          name="port"
          fullWidth
          value={formData.port}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Active"
          name="is_active"
          fullWidth
          value={formData.is_active}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
      </div>
      

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            {user ? "Save Changes" : "Create User"}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SipUserDrawer;
