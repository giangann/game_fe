import { styled } from "@mui/material";
import {
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { color } from "styles";

interface PageInputProps {
  title?: string;
  component?: React.ReactElement | React.ReactElement[];
  listComponentLength?: number;
  helperText?: string;
  center?: boolean;
}

const Page: React.FC<PageInputProps> = (props: PageInputProps) => {
  const { title, component, helperText, center } = props;

  return (
    <Container
      sx={{
        paddingTop: "32px",
      }}
    >
      <Paper sx={{ backgroundColor: color.page }}>
        {/* title */}
        <Typography
          sx={{
            color: color.lightWhite,
            padding: "12px 22px",
            backgroundColor: color.title,
          }}
          variant="h5"
        >
          {title}
        </Typography>
        <Divider sx={{ marginBottom: "22px" }} />

        {/* helper text */}
        <TypographyPadding variant="body1">{helperText} </TypographyPadding>

        {/* form: put form below */}

        {/* additional Component: */}
        <Stack
          mt={3}
          mb={3}
          spacing={2}
          alignItems={center ? "center" : ""}
          justifyContent="space-between"
          sx={{ padding: "0 22px 22px 22px", position: "relative" }}
        >
          {component}
        </Stack>
      </Paper>
    </Container>
  );
};

export const TypographyPadding = styled(Typography)({
  paddingLeft: "22px",
});
export { Page };
