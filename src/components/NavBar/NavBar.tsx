import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";
import theme from "../../theme";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly'
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Business Card</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
