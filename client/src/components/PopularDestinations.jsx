import React from "react";
import { PropTypes } from "prop-types";
import { Box, Grid, Typography, Skeleton, Alert } from "@mui/material";
import DestinationCard from "./DestinationsCard";

const PopularDestinations = ({ data, isLoading, error }) => {
  return (
    <Box component="section" className="popular-destinations">
      <Box
        sx={{
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#058ea1",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.25rem" },
          }}
          className="title"
        >
          Explore Most Popular Destinations
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mx: "auto",
            textAlign: "center",
            maxWidth: "500px",
            color: "#666",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
          gutterBottom
          className="sub-title"
        >
          Plan your perfect trip with our most loved and best-selling tour
          packages.
        </Typography>

        <Box sx={{ mt: 8, mx: "auto" }} component={"div"}>
          {isLoading ? (
            <Grid
              container
              rowSpacing={6}
              columnSpacing={4}
              justifyContent="center"
            >
              {Array.from(new Array(8)).map((_, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "400px",
                      maxWidth: 300,
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      height={200}
                      sx={{ borderRadius: 2 }}
                    />
                    <Skeleton width="80%" height={30} sx={{ mt: 2 }} />
                    <Skeleton width="60%" height={20} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : error ? (
            <Alert
              severity="error"
              sx={{ maxWidth: 500, mx: "auto", mt: 4, textAlign: "center" }}
            >
              {error}
            </Alert>
          ) : (
            <Grid
              container
              rowSpacing={6}
              columnSpacing={4}
              sx={{ justifyContent: "center" }}
            >
              {data.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "center",
                  }}
                >
                  <DestinationCard
                    image={item?.image}
                    name={item?.name}
                    price={item?.startingPrice}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

PopularDestinations.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default PopularDestinations;
