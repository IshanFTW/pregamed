
import { Box, Typography, Button, Container } from "@mui/material"
import { Link } from "react-router-dom"
import { styled } from "@mui/material/styles"

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f7ff", // Light blue background to complement the image
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 0),
  },
}))

const ContentWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    textAlign: "center",
  },
}))

const TextContent = styled(Box)(() => ({
  flex: 1,
}))

const ImageContent = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))

const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.up("md")]: {
    maxWidth: "90%", // Slightly smaller on larger screens for better proportion
  },
}))

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(2),
  padding: theme.spacing(1, 4),
  borderRadius: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginRight: 0,
  },
}))

export default function HeroSection() {
  return (
    <HeroContainer>
      <ContentWrapper maxWidth="lg">
        <TextContent>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: "#1a5f7a", fontWeight: 700, mb: 2 }}>
          Your Companion for a Healthy Pregnancy Journey
          </Typography>
          <Typography variant="h5" sx={{ color: "#2c3e50", mb: 4 }}>
          A one-stop platform for managing your pregnancy journey effortlessly.
          </Typography>
          <StyledButton
            variant="contained"
            color="primary"
            component={Link}
            to="/book"
            sx={{
              backgroundColor: "#1a5f7a",
              "&:hover": { backgroundColor: "#134b61" },
              mb: { xs: 2, sm: 0 },
            }}
          >
            Schedule Vaccination
          </StyledButton>
        </TextContent>
        <ImageContent>
          <StyledImage
            src="https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?w=740&t=st=1710017657~exp=1710018257~hmac=64972c5a8ce32c09ed6ec76489172e39b84dff5b8b77584d3b7c0c644cb7488f"
            alt="Vaccination campaign illustration"
          />
        </ImageContent>
      </ContentWrapper>
    </HeroContainer>
  )
}

