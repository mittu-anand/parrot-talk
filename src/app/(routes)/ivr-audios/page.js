"use client";

import { useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useIvrs from "../../hooks/useIvrs";
import IvrAudioDrawer from "@/app/components/IvrAudios/IvrAudioDrawer";
import IvrAudioTable from "@/app/components/IvrAudios/IvrAudioTable";

const IvrAudioPage = () => {
  const {
    openDrawer,
    audios,
    currentAudio,
    fetchAudios,
    handleAddAudio,
    handleEditAudio,
    handleEditButtonClick,
    setOpenDrawer
  } = useIvrs();

  useEffect(() => {
    fetchAudios();
  }, []);

  const handleAddNewAudio = () => {
    setOpenDrawer(true);
  };

  const handleEditAudioDetails = (audio) => {
    handleEditButtonClick(audio);
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h5">IVR AUDIOS</Typography>
        <IconButton color="primary" onClick={handleAddNewAudio}>
          <AddIcon fontSize="large" />
        </IconButton>
      </Box>

      {audios && <IvrAudioTable audios={audios} onEdit={handleEditAudioDetails} />}
      
      <IvrAudioDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onSave={currentAudio ? handleEditAudio : handleAddAudio}
        audio={currentAudio}
      />
    </Container>
  );
};

export default IvrAudioPage;
