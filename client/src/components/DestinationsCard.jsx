// DestinationCard.jsx
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const DestinationCard = ({ image, name, price }) => {
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
          alignItems: "center",
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
        <Typography
          variant="subtitle2"
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          Starting From
          <Typography sx={{ color: "#1796a7", fontWeight: 600 }}>
            ₹{price}/-
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
