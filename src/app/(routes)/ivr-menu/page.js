"use client";

import { useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useIvrs from "@/app/hooks/useIvrs";
import IvrMenuTable from "@/app/components/IvrMenu/IvrMenuTable";

const IvrMenu = () => {
  const {
    menu,
    fetchMenu,
    handleEditButtonClick,
  } = useIvrs();

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h5">IVR MENU</Typography>
        <IconButton color="primary" onClick={() => setOpenDrawer(true)}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>

      <IvrMenuTable ivrMenu={menu} onEdit={handleEditButtonClick} />
    </Container>
  );
};

export default IvrMenu;
