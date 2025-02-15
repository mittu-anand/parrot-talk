import { useSnackbar } from "notistack";
import { useState } from "react";
import { APPLICATION_JSON_TYPE } from "../common/constants";
import { SIP_PEER_URLS } from "../common/Url";
import useServices from "./useServices";

const useSipPeers = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [peers, setPeers] = useState([]);
  const [currentPeer, setCurrentPeer] = useState(null);
  const [sipUsers, setUsers] = useState([])
  const { enqueueSnackbar } = useSnackbar();
  const {fetchUsersList} = useServices()

  const messages = {
    peerAddSuccess: "Peer has been added successfully",
    peerAddFailed: "Oops...Failed to add peer!",
    peerUpdateSuccess: "Peer has been updated successfully",
  };

 /*  useEffect(() => {
    fetchUsers()
  }, []) */

  const fetchUsers = async () => {
    const users = await fetchUsersList();
    setUsers(users);
  };


  const fetchPeers = async () => {
    try {
      const res = await fetch(SIP_PEER_URLS.base);
      console.log(res)
      const data = await res.json();
      setPeers(data);
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };

  const handleAddSipPeer = async (userData) => {
    try {
      const res = await fetch(SIP_PEER_URLS.base, {
        method: "POST",
        headers: { "Content-Type": APPLICATION_JSON_TYPE},
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        enqueueSnackbar(messages.peerAddSuccess);
        fetchPeers();
        setOpenDrawer(false);
      } else {
        enqueueSnackbar(messages.peerAddFailed, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };

  const handleEditSipPeer = async (userData) => {
    try {
      const res = await fetch(`${SIP_PEER_URLS.base}/${userData.id}`, {
        method: "PUT",
        headers: { "Content-Type": APPLICATION_JSON_TYPE},
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        enqueueSnackbar(messages.peerUpdateSuccess);
        fetchPeers();
        setOpenDrawer(false);
        setCurrentUser(null);
      } else {
        const errorData = await res.json();
        enqueueSnackbar(errorData.message, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };

  const handleEditButtonClick = (peer) => {
    setCurrentPeer(peer);
    setOpenDrawer(true);
  };

  return {
    fetchPeers,
    handleAddSipPeer,
    handleEditSipPeer,
    handleEditButtonClick,
    openDrawer,
    peers,
    sipUsers,
    currentPeer,
  };
};

export default useSipPeers;
