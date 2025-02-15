import { useSnackbar } from "notistack";
import { useState } from "react";
import { APPLICATION_JSON_TYPE } from "../common/constants";
import { SIP_USER_URLS } from "../common/Url";
import useServices from "./useServices";

const useSipUsers = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { fetchUsersList } = useServices();

  const messages = {
    userAddSuccess: "User has been added successfully",
    userAddFailed: "Oops...Failed to add user!",
    userUpdateSuccess: "User has been updated successfully",
  };

  const fetchUsers = async () => {
    const users = await fetchUsersList();
    setUsers(users);
  };

  const handleAddUser = async (userData) => {
    try {
      const res = await fetch(SIP_USER_URLS.base, {
        method: "POST",
        headers: { "Content-Type": APPLICATION_JSON_TYPE },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        enqueueSnackbar(messages.userAddSuccess);
        fetchUsers();
        setOpenDrawer(false);
      } else {
        enqueueSnackbar(messages.userAddFailed, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  };

  const handleEditUser = async (userData) => {
    try {
      const res = await fetch(`${SIP_USER_URLS.base}/${userData.id}`, {
        method: "PUT",
        headers: { "Content-Type": APPLICATION_JSON_TYPE },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        enqueueSnackbar(messages.userUpdateSuccess);
        fetchUsers();
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

  const handleEditButtonClick = (user) => {
    setCurrentUser(user);
    setOpenDrawer(true);
  };

  return {
    fetchUsers,
    handleAddUser,
    handleEditUser,
    handleEditButtonClick,
    setOpenDrawer,
    openDrawer,
    users,
    currentUser,
  };
};

export default useSipUsers;
