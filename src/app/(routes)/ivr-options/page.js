"use client";

import { useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useIvrs from "@/app/hooks/useIvrs";
import IvrTable from "@/app/components/IvrOptions/IvrTable";

const IvrOptions = () => {
  const {
    ivrOptions,
    fetchIvrOptions,
    handleEditButtonClick,
  } = useIvrs();

  useEffect(() => {
    fetchIvrOptions();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h5">IVR OPTIONS</Typography>
        <IconButton color="primary" onClick={() => setOpenDrawer(true)}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>

      <IvrTable ivrOptions={ivrOptions} onEdit={handleEditButtonClick} />
    </Container>
  );
};

export default IvrOptions;
