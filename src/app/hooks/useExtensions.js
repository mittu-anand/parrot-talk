import { useState } from "react";
import useServices from "./useServices";

const useExtensions = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [extensions, setExtensions] = useState([]);
  const { fetchExtensionsList } = useServices();


  const fetchExtensions = async () => {
    const extensions = await fetchExtensionsList();
    setExtensions(extensions);
  };

  const handleEditButtonClick = (user) => {
    setCurrentUser(user);
    setOpenDrawer(true);
  };
  
  return {
    fetchExtensions,
    handleEditButtonClick,
    setOpenDrawer,
    openDrawer,
    extensions
  };
};

export default useExtensions;
