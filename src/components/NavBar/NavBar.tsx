import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";
import { replace, useNavigate } from "react-router-dom";


const NavBar = () => {

  const navigate = useNavigate();
  
  const redirectToCard = () => {
    navigate('/businesscard');
  };

  const redirectToHome = () => {
    navigate('/');
  };

  const redirectToUnderConstruction = () => {
    navigate('/underconstruction', {replace: true});
  };

  const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-evenly'
  }));


  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem onClick={redirectToHome}>Home</MenuItem>
          <MenuItem onClick={redirectToUnderConstruction}>Skills</MenuItem>
          <MenuItem onClick={redirectToUnderConstruction}>Projects</MenuItem>
          <MenuItem onClick={redirectToCard}>Business Card</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
