import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const TopSellerCard = ({ image, name, id }) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 4,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          height: 300,
          width: 400,
          objectFit: "cover",
          borderRadius: 4,
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between",
          px: 2,
          py: 5,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "#1796a7",
            textTransform: "uppercase",
          }}
        >
          {name}
        </Typography>
        <Button
          sx={{
            backgroundColor: "#1796a7",
            color: "#fff",
            width: "100%",
            borderRadius: 5,
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopSellerCard;
