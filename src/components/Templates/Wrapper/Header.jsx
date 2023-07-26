import React from 'react';
import { useNavigate } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import LogoImage from '../../../static/imgaes/headerLogo3.png'
const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '89%', }} className='float-right' >
      <div  >
        <div onClick={() => navigate("/")}>
          <img src={LogoImage} className='h-32 w-full' alt="Logo" />
        </div>
        <CssBaseline />
      </div>
    </Box>
  )
}

export default Header;