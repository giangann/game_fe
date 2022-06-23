import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

interface CardProps {
  title: string;
  content: string[];
  color: string;
}
const CardCustom: React.FC<CardProps> = (props: CardProps) => {
  const { title, content, color } = props;
  return (
    <Grid item xs={3.5}>
      {/* can handle new props is ListCardLength to decide number of xs more flexible */}
      <Card sx={{ backgroundColor: color }}>
        <CardContent>
          <Box>
            <TypographyTitle sx={{ textAlign: "center" }} variant="h6">
              {title}
            </TypographyTitle>
          </Box>
          <Stack>
            {content.map((item, index) => (
              <Typography variant="body2">{item}</Typography>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
export const TypographyTitle = styled(Typography)({
  fontSize: "35px",
  textTransform: "uppercase",
  fontWeight: 500,
  color:'white'
});
export { CardCustom };
