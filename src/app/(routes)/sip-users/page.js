"use client";

import { useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SipUsersTable from "../../components/SipUsers/SipUsersTable";
import SipUserDrawer from "../../components/SipUsers/SipUserDrawer";
import useSipUsers from "../../hooks/useSipUsers";

const SipUsersPage = () => {
  const {
    openDrawer,
    users,
    currentUser,
    fetchUsers,
    handleAddUser,
    handleEditUser,
    handleEditButtonClick,
    setOpenDrawer
  } = useSipUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h5">SIP USERS</Typography>
        <IconButton color="primary" onClick={() => setOpenDrawer(true)}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>

      {users && <SipUsersTable users={users} onEdit={handleEditButtonClick} />}
      <SipUserDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onSave={currentUser ? handleEditUser : handleAddUser}
        user={currentUser}
      />
    </Container>
  );
};

export default SipUsersPage;
