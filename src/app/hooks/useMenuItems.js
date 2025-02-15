import { AudioFile, DashboardOutlined, Extension, Numbers, Settings, SupervisedUserCircleSharp, Support, VerifiedUserSharp } from '@mui/icons-material';
import { useState } from 'react';

const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState([
     // { name: 'Dashboard', route: '/dashboard', icon: <DashboardOutlined /> },
      { name: 'SIP Users', route: '/sip-users', icon: <SupervisedUserCircleSharp /> },
      { name: 'SIP Peers', route: '/sip-peers', icon: <Numbers /> },
      { name: 'Extensions', route: '/extensions', icon: <Extension /> },
      { name: 'IVR Audios', route: '/ivr-audios', icon: <AudioFile /> },
      { name: 'IVR Menu', route: '/ivr-menu', icon: <AudioFile /> },
      { name: 'IVR Options', route: '/ivr-options', icon: <Support /> },
      //{ name: 'Configurations', route: '/configurations', icon: <Settings /> },
      { name: 'App Users', route: '/app-users', icon: <VerifiedUserSharp /> },
    ]);
  
    return { menuItems };
  };
  

export default useMenuItems;
