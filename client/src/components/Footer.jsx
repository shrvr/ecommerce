import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import Room from "@mui/icons-material/Room";
import Phone from "@mui/icons-material/Phone";
import MailOutline from "@mui/icons-material/EmailOutlined";

import {
  Container,
  Left,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment,
} from "../styledComponents/Footer.style";
import MainLogo from "./MainLogo";

const Footer = () => {
  return (
    <Container>
      <Left>
        <MainLogo />
        <Desc>
          You've come to the right site if you're looking for online shopping
          for men and women. FashionPoint is the ideal fashion and lifestyle
          destination, offering a wide range of products such as apparel,
          footwear, accessories, jewellery, personal care products, and more.
          With our vast collection of current things, it's time to alter your
          style statement. FashionPoint allows you to buy from the comfort of
          your own home and have your favourite items delivered to your door.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Windsor, Ontario, Canada
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 519-996-1234
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          shrvr@yahoo.com
        </ContactItem>
        <Payment src="https://drive.google.com/uc?id=1I3tI9PECuXGJW5APa_IupItMZ1GMBX8x" />
      </Right>
    </Container>
  );
};
export default Footer;
