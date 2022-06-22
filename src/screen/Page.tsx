import { Container, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { color } from "styles";

interface PageInputProps {
  title: string;
  formItem: string[];
}

const Page: React.FC<PageInputProps> = (props: PageInputProps) => {
  const { title, formItem } = props;

  const { control, register, handleSubmit } = useForm();

  return (
    <Container sx={{ backgroundColor: color.background, paddingTop: "32px" }}>
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

        {/* form: */}
      </Paper>
    </Container>
  );
};

export { Page };
