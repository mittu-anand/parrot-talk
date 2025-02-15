"use client";

import React, { useEffect } from "react";
import { Drawer, Box, TextField, Button, Typography, Divider, Input, Alert } from "@mui/material";
import useIvrs from "@/app/hooks/useIvrs";

const IvrAudioDrawer = ({ open, onClose, audio }) => {
  const {
    formData,
    setFormData,
    error,
    handleInputChange,
    handleFileChange,
    handleSave,
    setOpenDrawer,
  } = useIvrs();

  useEffect(() => {
    if (audio) {
      setFormData({
        name: audio.name || "",
        file: null,
      });
    }
  }, [audio, setFormData]);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleCloseDrawer}>
      <Box sx={{ width: 600, padding: 8 }}>
        <Typography variant="h6">
          {audio ? "Edit IVR Audio" : "Add IVR Audio"}
        </Typography>
        <Divider sx={{ marginTop: 2 }} />

        <div style={{ marginTop: 24 }}>
          <TextField
            label="Audio Name"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
          />

          <Input
            type="file"
            accept=".wav"
            onChange={handleFileChange}
            sx={{ marginBottom: 2, width: "100%" }}
          />
        </div>

        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
          <Button variant="contained" color="secondary" onClick={handleCloseDrawer}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              const fileInfo = await handleSave();
              if (fileInfo) {
                handleCloseDrawer();
              }
            }}
          >
            {audio ? "Save Changes" : "Upload"}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default IvrAudioDrawer;
