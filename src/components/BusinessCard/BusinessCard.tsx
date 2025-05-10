import theme from "../../theme";
import { Box, styled, Grid, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import profilePhoto from "../../assets/images/profilePhoto.jpeg";
import githubIcon from "../../assets/images/icoinGitHub.svg";
import mailIcon from "../../assets/images/iconMail.svg";
import linkedinIcon from "../../assets/images/iconLinkedin.svg";
import laptopIcon from "../../assets/images/Laptop.svg";

const BusinessCard = () => {
  const StyledImg = styled("img")(({ theme }) => ({
    width: "55%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.main}`,
  }));

  const StyledDiv = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      //>= mobile
      paddingTop: "0",
    },
  }));

  const StyledIconImg = styled("img")(() => ({
    height: "32px",
    marginRight: "50px",
  }));

  const StyledAnchor = styled("a")(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "20px",
    paddingLeft: "10px",
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.contrastText,
      //backgroundColor: theme.palette.primary.main,
      backgroundColor: '#4f8e3e', // #F59F0b, #8dc66b, #4f8e3e
    },
  }));

  const handleEmail = () => {
    const emailAddress = 'matheuspascui@gmail.com';
    const subject = 'Subject';
    const body = 'Hello! I saw your portfolio...';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <>
      <StyledDiv>
        <Container
          maxWidth="md"
          sx={{
            //backgroundColor: theme.palette.secondary.main, #37632b,   #0b61f5, gpt #13ADC7, #f5a623, #a39e93
            backgroundColor: '#7e796d',
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={2} marginBottom={"10px"} marginTop={"10px"} alignItems={'center'}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position={"relative"} textAlign={"center"}>
                <StyledImg src={profilePhoto}></StyledImg>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h2"
                textAlign={"center"}
                color="primary.main"
              >
                Matheus Páscui
              </Typography>
              <Typography
                variant="h3"
                textAlign={"center"}
                color="primary.main"
              >
                Full Stack Developer
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} display="flex" justifyContent={"center"} marginBottom={'30px'}>
            <Grid
              size={{ xs: 12, md: 12 }}
              textAlign={"center"}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <StyledAnchor href="/">
                <StyledIconImg src={laptopIcon} />
                <p>My Portfolio</p>
              </StyledAnchor>
            </Grid>
            <Grid
              size={{ xs: 12, md: 12 }}
              textAlign={"center"}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <StyledAnchor
                onClick={handleEmail}
                href='#'
                target="_blank"
              >
                <StyledIconImg src={mailIcon}/>
                <p>E-Mail</p>
              </StyledAnchor>
            </Grid>
            <Grid
              size={{ xs: 12, md: 12 }}
              textAlign={"center"}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <StyledAnchor
                href="https://www.linkedin.com/in/matheuspascui/"
                target="_blank"
              >
                <StyledIconImg src={linkedinIcon} />
                <p>LinkedIn</p>
              </StyledAnchor>
            </Grid>
            <Grid
              size={{ xs: 12, md: 12 }}
              textAlign={"center"}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <StyledAnchor
                href="https://github.com/matheuspascui"
                target="_blank"
              >
                <StyledIconImg src={githubIcon} />
                <p>GitHub</p>
              </StyledAnchor>
            </Grid>
          </Grid>
        </Container>
      </StyledDiv>
    </>
  );
};

export default BusinessCard;
