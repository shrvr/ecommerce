import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Right,
  MenuItem,
} from "../styledComponents/Navbar.style";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MainLogo from "./MainLogo";
import { useDispatch, useSelector } from "react-redux";
import NewLink from "./NewLink";
import { logout } from "../redux/userRedux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <NewLink to="/">
            <MainLogo />
          </NewLink>
        </Center>

        <Right>
          <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
          <MenuItem>WISHLIST</MenuItem>
          <NewLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </NewLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
