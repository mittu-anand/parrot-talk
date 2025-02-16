"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";
import { useSessionContext } from "@/app/context/SessionContext";

export default function Header() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const {session} = useSessionContext()

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <Typography
            variant="h6"
            component="span"
            sx={{
              color: theme.text.primary,
              marginLeft: 4,
              marginRight: 1,
              fontWeight: "100",
              fontSize: "17px",
            }}
          >
            Parrot
          </Typography>
          <Typography
            variant="h6"
            component="span"
            sx={{
              color: theme.text.secondary,
              marginLeft: 1,
              fontSize: "17px",
            }}
          >
            Talk
          </Typography>
        </div>
        {session?.user?.id &&
        <div>
          <IconButton
            onClick={handleMenuOpen}
            sx={{ p: 0, background: "#eac822", border: "1px solid #a3a3a3" }}
          >
            <Avatar
              alt="User"
              src="/avatar.png"
              sx={{ height: 26, width: 26 }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ marginRight: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </div>
}
      </Toolbar>
    </AppBar>
  );
}
