import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

interface CardProps {
  title: string;
  content: string[];
}
const CardCustom: React.FC<CardProps> = (props: CardProps) => {
  const { title, content } = props;
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Stack>
          {content.map((item, index) => (
            <Typography variant="body2">{item}</Typography>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export { CardCustom };
