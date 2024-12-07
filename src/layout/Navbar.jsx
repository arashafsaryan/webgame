import { useState } from "react";
import styled from "styled-components";
import { Container, Drawer, Grid, IconButton } from "@mui/material";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../image/logo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListMenu = styled.div`
  display: flex;
  img {
    width: 40px;
    margin-left: 25px;
  }
`;
const Item = styled.div`
  margin-left: 25px;
  color: #c6c6c6;
`;
const SignUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .shopping {
    color: #ffffff;
  }
  a svg {
    font-size: 25px;
  }
  a span {
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 10px;
    background-color: #6c5dd3;
    padding: 1px 4px;
    border-radius: 50%;
  }
  .signUp {
    background-color: #6c5dd3;
    color: #ffffff;
    padding: 3px 20px;
    border-radius: 5px;
  }
`;

// drawer
const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #f0f0f0;
    width: 40%;
  }
  img {
    width: 50px;
    margin: 10px auto;
  }
`;

const StyledIconButton = styled(IconButton)`
  color: #ffffff !important;
`;

const StyledListItem = styled.div`
  margin: 10px;
  padding: 5px 0;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #bfb4ff;
    padding-right: 5px;
    border-radius: 5px;
  }
  a {
    color: #000;
  }
`;
const SignUpDrawer = styled.div`
  margin-top: 20px;
  a {
    display: block;
    color: #ffffff;
    background-color: #6c5dd3;
    text-align: center;
    margin: 0 5px;
    padding: 10px 0;
    border-radius: 10px;
    &:hover {
      background-color: #4f3ad5;
    }
  }
`;
// drawer

const NavBar = () => {
  const menuItems = ["خانه", "فروشگاه", "درباره ما", "تماس با ما", "وبلاگ"];

  // drawer
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  const drawerItems = ["خانه", "فروشگاه", "درباره ما", "تماس با ما", "وبلاگ"];

  // drawer
  //quantity shopping cart
  const quantity = useSelector((store) => store.cart.itemsCounter);

  return (
    <Container maxWidth="lg">
      <Grid container mt={2} className={styles.mainNav}>
        <Grid item xs={10}>
          <ListMenu>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            {menuItems.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </ListMenu>
        </Grid>
        <Grid item xs={2}>
          <SignUp>
            <Link to="/shoppingCart" className="shopping">
              <PiShoppingCartLight />
              <span>{quantity}</span>
            </Link>
            <Link to="/" className="signUp">
              ثبت‌نام
            </Link>
          </SignUp>
        </Grid>
      </Grid>
      <Grid container mt={2} className={styles.resNav}>
        <Grid item xs={12}>
          <div className={styles.wrapperResNav}>
            <StyledIconButton onClick={toggleDrawer(true)} edge="start">
              <MenuIcon />
            </StyledIconButton>
            <StyledDrawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
            >
              <img src={logo} alt="Logo" />
              {drawerItems.map((text, index) => (
                <StyledListItem key={index}>
                  <a href="#">{text}</a>
                </StyledListItem>
              ))}
              <SignUpDrawer>
                <a href="#">ثبت‌نام</a>
              </SignUpDrawer>
            </StyledDrawer>
            <Link to="/shoppingCart" className={styles.shoppingCart}>
              <PiShoppingCartLight />
              <span>{quantity}</span>
            </Link>
          </div>{" "}
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
