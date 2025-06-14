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
      <Box sx={{ p: 10, mx: "auto" }} component={"div"}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: "bold",
          }}
        >
          Our Advantages
        </Typography>

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

        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
          }}
        >
          {advantages.map((advantage, index) => (
            <Grid item sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  height: "100%",
                  width: "275px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#fff",
                    p: 6,
                    borderRadius: 100,
                    color: "primary.main",
                    mb: 2,
                  }}
                >
                  {advantage.icon &&
                    React.createElement(advantage.icon, { size: 64 })}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  {advantage.title}
                </Typography>
                <Typography variant="body1">{advantage.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdvantagesSection;
