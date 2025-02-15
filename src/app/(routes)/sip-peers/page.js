"use client";

import { useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useSipPeers from "../../hooks/useSipPeers";
import SipPeersTable from "@/app/components/SipPeers/SipPeersTable";

const SipPeersPage = () => {
  const {
    setOpenDrawer,
    peers,
    fetchPeers,
    handleEditButtonClick,
  } = useSipPeers();

  useEffect(() => {
    fetchPeers();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h5">SIP PEERS</Typography>
        <IconButton color="primary" onClick={() => setOpenDrawer(true)}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>

      <SipPeersTable peers={peers} onEdit={handleEditButtonClick} />
    </Container>
  );
};

export default SipPeersPage;
