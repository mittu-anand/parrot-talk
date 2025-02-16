"use client";

import { List, ListItem, ListItemText, ListItemIcon, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import useMenuItems from "../../hooks/useMenuItems";
import { useSessionContext } from "../../context/SessionContext";

const Sidebar = () => {
  const router = useRouter();
  const { menuItems } = useMenuItems();
  const { session } = useSessionContext();
  if (!session?.user?.id) {
    return;
  }

  return (
    <Box
      sx={{
        width: 250,
        position: "fixed",
        height: "100vh",
        top: 55,
        left: 0,
        bottom: 70,
        bgcolor: "#2e3e4e",
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        overflowY: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "3px",
        },
      }}
    >
      <List sx={{ color: "#ffffff" }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.name}
            onClick={() => router.push(item.route)}
            sx={{
              cursor: "pointer",
              "&:hover": { bgcolor: "#eec71c" },
              borderBottom: "1px solid #dcdcdc",
              borderLeft: "3px solid #eec71c",
            }}
          >
            <ListItemIcon sx={{ color: "primary.main" }}>
              {item?.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
