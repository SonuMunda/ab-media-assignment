import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import testimonials from "../assets/data/testimonials";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { grey, yellow } from "@mui/material/colors";

// Styled components for clean UI
const TestimonialCard = styled(Card)(() => ({
  borderRadius: "16px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-in-out",
  height: "100%",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const AuthorName = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginTop: theme.spacing(1),
}));

const AuthorTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
}));

const CarouselContainer = styled(Box)(() => ({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
}));

const TestimonialSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const cardGap = 16;
  const cardWidth = `calc(${100 / cardsToShow}% - ${
    (cardGap * (cardsToShow - 1)) / cardsToShow
  }px)`;

  // Function to go to the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? testimonials.length - cardsToShow : prevIndex - 1
    );
  };

  return (
    <Box sx={{ padding: 10, position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          minHeight: 400,
        }}
      >
        {/* Card Title */}
        <Typography variant="h4" fontWeight={600} mb={4}>
          Testimonials
        </Typography>
        <CarouselContainer
          sx={{
            gap: `${cardGap}px`,
            transform: `translateX(calc(-${
              currentIndex * (100 / cardsToShow)
            }% - ${currentIndex * cardGap}px))`,
          }}
        >
          {/* Dynamic testimonial cards */}
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.id}
              sx={{
                width: cardWidth,
                flexShrink: 0,
              }}
            >
              <TestimonialCard>
                <CardContent>
                  {/* Avatar */}
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56, mb: 2, mx: "auto" }}
                  />

                  {/* Card Text */}
                  <TestimonialText variant="body1" align="center">
                    "{testimonial.text}"
                  </TestimonialText>

                  {/* Name and Position */}
                  <Box sx={{ borderTop: "1px solid #eee", paddingTop: 2 }}>
                    <Stack direction="column" alignItems="center" spacing={0.5}>
                      <AuthorName variant="subtitle1" align="center">
                        {testimonial.name}
                      </AuthorName>
                      <AuthorTitle variant="body2" align="center">
                        {testimonial.title}
                      </AuthorTitle>
                    </Stack>
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Box>
          ))}
        </CarouselContainer>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Button
          variant="filled"
          sx={{
            backgroundColor: grey[500],
            color: "white",
            p: 2,
            borderRadius: 4,
            "&:hover": {
              backgroundColor: yellow[600],
            },
          }}
          onClick={handlePrev}
          disabled={testimonials.length <= cardsToShow}
        >
          <FaArrowLeft size={24} />
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: yellow[600],
            color: "white",
            p: 2,
            borderRadius: 4,
            "&:hover": {
              backgroundColor: grey[500],
            },
          }}
          onClick={handleNext}
          disabled={testimonials.length <= cardsToShow}
        >
          <FaArrowRight size={24} />
        </Button>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
