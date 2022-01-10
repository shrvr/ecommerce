import SendIcon from "@mui/icons-material/Send";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "../styledComponents/Newsletter.style";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
