import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import advantages from "../assets/data/advantagesData";

const AdvantagesSection = () => {
  return (
    <Box
      component={"section"}
      sx={{
        backgroundColor: "#77c8c8",
        color: "white",
      }}
    >
      {/* Heading */}
      <Box sx={{ p: 10, mx: "auto" }} component={"div"}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: "bold",
            fontSize: {
              xs: "1.75rem",
              sm: "2rem",
              md: "2.25rem",
              lg: "2.5rem",
            },
            lineHeight: {
              xs: 1.2,
              sm: 1.3,
              md: 1.4,
            },
            px: {
              xs: 2,
              sm: 0,
            },
          }}
        >
          Our Advantages
        </Typography>

        {/* Subcontent */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 5,
            fontSize: "1.1rem",
          }}
        >
          You can rely on our experience and the quality of services we provide.
          <br />
          Here are other reasons to book tours at Trust Holdings.
        </Typography>

        {/* Grid of cards */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            justifyContent: "center",
          }}
        >
          {/* Cards Mapping */}
          {advantages.map((advantage, index) => (
            <Grid key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: { xs: 2, sm: 3 },
                  height: "100%",
                  width: { xs: "100%", sm: "275px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Card Icon */}
                <Box
                  sx={{
                    bgcolor: "#fff",
                    p: { xs: 4, sm: 6 },
                    borderRadius: 100,
                    color: "primary.main",
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  {advantage.icon &&
                    React.createElement(advantage.icon, {
                      size: 64,
                    })}
                </Box>

                {/* Card Title */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                  }}
                >
                  {advantage.title}
                </Typography>

                {/* Card Content */}
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                >
                  {advantage.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdvantagesSection;
