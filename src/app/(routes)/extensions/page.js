"use client";

import { useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useExtensions from "@/app/hooks/useExtensions";
import ExtensionsTable from "@/app/components/Extensions/ExtensionsTable";

const Extensions = () => {
  const {
    extensions,
    fetchExtensions,
    handleEditButtonClick,
  } = useExtensions();

  useEffect(() => {
    fetchExtensions();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h5">EXTENSIONS</Typography>
        <IconButton color="primary" onClick={() => setOpenDrawer(true)}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>

      <ExtensionsTable extensions={extensions} onEdit={handleEditButtonClick} />
    </Container>
  );
};

export default Extensions;
