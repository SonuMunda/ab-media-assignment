import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

// Displays a grid of skeleton loaders for content cards
const SkeletonCard = () => {
  return (
    <Grid container rowSpacing={6} columnSpacing={4} justifyContent="center">
      {Array.from(new Array(8)).map((_, index) => (
        <Grid
          key={index}
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "400px", maxWidth: 300 }}>
            {/* Skeleton for image */}
            <Skeleton
              variant="rectangular"
              height={200}
              sx={{ borderRadius: 2 }}
            />
            {/* Skeleton for title */}
            <Skeleton width="80%" height={30} sx={{ mt: 2 }} />
            {/* Skeleton for description */}
            <Skeleton width="60%" height={20} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonCard;
