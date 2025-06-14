import React from "react";
import { PropTypes } from "prop-types";
import { Box, Grid, Typography, Skeleton, Alert } from "@mui/material";
import TopSellerCard from "./TopsellerCard";
import SkeletonCard from "./SkeletonCard";

const TopSellersPackages = ({ data, isLoading, error }) => {
  return (
    <Box component="section" className="popular-destinations">
      <Box
        sx={{
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        {/* Section Title */}
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

        {/* Section Sub title */}
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

        {/* Section Content  */}
        <Box sx={{ mt: 8, mx: "auto" }} component={"div"}>
          {isLoading ? (
            <SkeletonCard />
          ) : error ? (
            <Alert
              severity="error"
              sx={{ maxWidth: 500, mx: "auto", mt: 4, textAlign: "center" }}
            >
              {error}
            </Alert>
          ) : (
            // Gird
            <Grid
              container
              rowSpacing={6}
              columnSpacing={4}
              sx={{ justifyContent: "center" }}
            >
              {data.map((item, index) => (
                <Grid
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "center",
                  }}
                >
                  {/* Top Seller Card */}
                  <TopSellerCard
                    image={item?.image}
                    name={item?.name}
                    id={item?._id}
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

TopSellersPackages.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default TopSellersPackages;
