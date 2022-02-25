import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Left,
  SearchContainer,
  Input,
  Center,
  Right,
  MenuItem,
} from "../styledComponents/Navbar.style";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import MenuIcon from "@mui/icons-material/Menu";
import MainLogo from "./MainLogo";
import { useDispatch, useSelector } from "react-redux";
import NewLink from "./NewLink";
import { logout } from "../redux/userRedux";
import { getCart } from "../redux/apiCalls";
import { useEffect } from "react";
import { logoutCart } from "../redux/cartRedux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const userId = useSelector((state) => state.user.currentUser._id);
  const TOKEN = useSelector((state) => state.user.currentUser.accessToken);
  const firstName = useSelector((state) => state.user.currentUser.first_name);

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    dispatch(logoutCart());
    dispatch(logout());
  };

  useEffect(() => {
    getCart(dispatch, TOKEN, userId);
  }, []);

  const [searchedItem, setSearchedItem] = useState("");

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input
              value={searchedItem}
              onChange={(e) => setSearchedItem(e.target.value)}
              placeholder="Search"
            />
            <NewLink to={`/products/${searchedItem}`}>
              <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </NewLink>
          </SearchContainer>
        </Left>

        <Center>
          <NewLink to="/">
            <MainLogo />
          </NewLink>
        </Center>

        <Right>
          <NewLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </NewLink>
          {/* <MenuItem>WELCOME, {firstName.toUpperCase()}</MenuItem> */}
          <MenuItem onClick={handleLogout}>
            <PowerSettingsNewIcon />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
