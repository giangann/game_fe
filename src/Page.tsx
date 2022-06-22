import { Container, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { color } from "./Color";

interface PageInputProps {
  title: string;
  formItem: string[];
  component: React.ReactElement;
}

const Page: React.FC<PageInputProps> = (props: PageInputProps) => {
  const { title, formItem, component } = props;

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

        {/* form: put form below */}

        {/* additional Component: */}
        {component}
      </Paper>
    </Container>
  );
};

export { Page };
