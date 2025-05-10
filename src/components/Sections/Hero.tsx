import { Box, Button, Container, Grid, styled, Typography } from "@mui/material";
import profilePhoto from "../../assets/images/profilePhoto.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import {AnimatedBackground} from '../AnimatedBackground/AnimatedBackground'
import CV from '../../assets/CV_Matheus_Pascui.pdf'

const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
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

  const StyledImg = styled("img")(({theme}) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  const handleDownload = () => {
    console.log('download');
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV Matheus Pascui.pdf'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const emailAddress = 'matheuspascui@gmail.com';
    const subject = 'Subject';
    const body = 'Hello! I saw your portfolio...';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  }

  return (
    <>
      <StyledHero>
        <Container maxWidth='lg'>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position={'relative'}>
                <Box position={'absolute'} width={'150%'} top={-100} right={0}>
                  <AnimatedBackground></AnimatedBackground>
                </Box>
                <Box position={'relative'} textAlign={'center'}>
                  <StyledImg src={profilePhoto} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h1" textAlign={"center"} color="primary.contrastText">
                Matheus Páscui
              </Typography>
              <Typography variant="h2" textAlign={"center"} color="primary.contrastText" pb={2}>
                I'm a Full Stack Developer
              </Typography>

              <Grid container display='flex' justifyContent={'center'} pt={3}>
                <Grid size={{ xs: 12, md: 4 }} display="flex" 
                      justifyContent={"center"} pb={3}>
                  <Button color="secondary" 
                          variant="contained"
                          startIcon={<DownloadIcon />}
                          onClick={handleDownload}
                  >
                    <Typography>
                      Download CV
                    </Typography>
                  </Button>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} display="flex" 
                      justifyContent={"center"} pb={3}>
                  <Button color="secondary" 
                          variant="contained"
                          startIcon={<EmailIcon/>}
                          onClick={handleEmail}
                  >
                    <Typography>Contact Me</Typography>
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
