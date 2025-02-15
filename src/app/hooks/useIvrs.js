import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import useServices from "./useServices";

const useIvrs = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [audios, setAudios] = useState([]);
  const [menu, setMenu] = useState([]);
  const [ivrOptions, setIvrOptions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    file: null,
    format: "wav"
  });
  const [error, setError] = useState(null);
  const { fetchAudioList, fetchMenuList, fetchIvrOptionsList, uploadIvrAudio } = useServices();

  const fetchAudios = async () => {
    const audios = await fetchAudioList();
    setAudios(audios);
  };

  const fetchMenu = async () => {
    const menuList = await fetchMenuList();
    setMenu(menuList);
  };

  const fetchIvrOptions = async () => {
    const ivrOptions = await fetchIvrOptionsList();
    setIvrOptions(ivrOptions);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "audio/wav") {
      setFormData((prevData) => ({
        ...prevData,
        file,
      }));
      setError(null);
    } else {
      setError("Only .wav files are allowed.");
      e.target.value = "";
    }
  };

  const handleSave = async () => {
    if (!formData.name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!formData.file) {
      setError("A .wav file is required.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("file", formData.file);
    uploadData.append("filename", formData.name);
    uploadData.append("format", formData.format || 'wav');
      
    const response = await uploadIvrAudio(uploadData)
      setOpenDrawer(false)
      setFormData({ name: "", file: null });
      setError();
      enqueueSnackbar("IVR audio created successfully", {variant: 'success'})
      fetchAudios()
      return { name: formData.name, filePath: response?.filePath };
  };


  const handleEditButtonClick = (user) => {
    setFormData({
      name: user.name || "",
      file: null,
    });
    setOpenDrawer(true);
  };

  return {
    fetchAudios,
    fetchMenu,
    fetchIvrOptions,
    handleEditButtonClick,
    setOpenDrawer,
    openDrawer,
    audios,
    menu,
    ivrOptions,
    formData,
    error,
    handleInputChange,
    handleFileChange,
    handleSave,
  };
};

export default useIvrs;
