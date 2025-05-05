import { Button, Container, Grid, styled, Typography } from "@mui/material";
import profilePhoto from "../../assets/images/profilePhoto.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "red",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <h1>HERO component</h1>
      <StyledHero>
        <Container maxWidth='lg'>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImg src={profilePhoto} />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h1" textAlign={"center"} color="primary">
                Matheus Páscui
              </Typography>
              <Typography variant="h2" textAlign={"center"}>
                I'm a Software Engineer
              </Typography>

              <Grid container display='flex' justifyContent={'center'}>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent={"center"}>
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent={"center"}>
                  <Button>
                    <EmailIcon />
                    Contact Me
                  </Button>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
