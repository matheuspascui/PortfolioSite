import { Container, Grid, styled, Typography } from "@mui/material";
import theme from "../../theme";

const UnderConstructionElement = () => {
  const StyledDiv = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: '100px'
    },
    [theme.breakpoints.up('md')]: { //>= mobile
      paddingTop: "0",
    }
  }));

  return (
    <>
      <StyledDiv>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid
              size={{ xs: 12, md: 12 }}
              sx={{ marginTop: "30px", backgroundColor: theme.palette.primary.contrastText, borderRadius: '30px',}}
            >
              <Typography variant="h1" alignItems={'center'} textAlign={'center'}>Under Construction</Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledDiv>
    </>
  );
};

export default UnderConstructionElement;
