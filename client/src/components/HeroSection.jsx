import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)", // Update with actual path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
      component={"section"}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          zIndex: 2,
          textAlign: { xs: "center", md: "left" },
          margin: {
            sm: "auto",
            md: 20,
          },
        }}
      >
        <Box maxWidth="sm">
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
              },
            }}
          >
            Discover Your Next Adventure
          </Typography>

          <Typography
            variant="subtitle1"
            mb={3}
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
              },
              maxWidth: "500px",
              mx: { xs: "auto", md: "0" },
            }}
          >
            Choose from our curated experiences, customized for every kind of
            traveler.
          </Typography>

          <Button
            variant="contained"
            sx={{
              borderRadius: 50,
              px: 6,
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: "#f9bf01",
              color: "#000",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            BOOK NOW
          </Button>
        </Box>
      </Box>

      {/* Bottom Tags */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: {
            xs: "100%",
            md: "max-content",
          },
          bgcolor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          p: 2,
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "left",
          },
          gap: 1,
          fontSize: {
            xs: "0.5rem",
            sm: "0.9rem",
          },
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            p: 2,
          }}
        >
          Easy Booking
        </Box>
        <Box
          sx={{
            borderLeft: "1px solid #fff",
            borderRight: "1px solid #fff",
            p: 2,
          }}
        >
          Curated Destinations
        </Box>
        <Box
          sx={{
            p: 2,
          }}
        >
          Trusted Support
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
