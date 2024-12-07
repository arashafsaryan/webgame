import React, { useState } from "react";
import { Grid, Typography, Container, Divider } from "@mui/material";
import styled from "styled-components";
import newGame from "../constants/newGame";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeLastTwoWords } from "../helper/helper";

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  @media (min-width: 501px) {
    margin-top: 120px;
  }
  h5 {
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    @media (min-width: 450px) {
      font-size: 16px;
    }
    @media (min-width: 650px) {
      font-size: 25px;
    }
  }
`;

const StyledSelect = styled.select`
  background-color: #424242;
  border: 0;
  outline: 0;
  color: #afafaf;
  border-radius: 15px;
  padding: 10px 7px;
  width: 130px;
  @media (min-width: 450px) {
    padding: 15px 10px;
    width: 200px;
  }
  @media (min-width: 750px) {
    width: 270px;
  }
`;

const StyledMenuItem = styled.option`
  color: #ffffff;
`;

const StyledCard = styled.div`
  background: #3a425a33;
  border-radius: 26px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.05, 1.1) !important;
    img {
      box-shadow: rgba(113, 113, 186, 0.704) 0px -20px 70px -10px,
        rgba(113, 113, 186, 0.704) 0px 14px 100px -64px;
    }
    .buy {
      background-color: #ff754c;
      color: #ffffff !important;
    }
  }
  img {
    transition: 0.2s ease;
    border-radius: 26px 26px 0 0;
    width: 100%;
  }
  @media (max-width: 540px) {
    border-radius: 15px;
    img {
      border-radius: 15px 15px 0 0;
    }
  }
`;

const StyledCardContent = styled.div`
  padding: 10px 20px;
  h6 {
    font-family: inherit;
    font-weight: 400;
    font-size: clamp(18px, 1.5vw, 16px);
    line-height: 1.5;
  }
  p {
    color: #ff754c;
    text-align: center;
    font-size: clamp(14px, 1.5vw, 18px);
    font-weight: 600;
  }
  @media (max-width: 540px) {
    padding: 10px 5px;
    h6 {
      font-size: 15px !important;
    }
    p {
      font-size: 13px;
    }
  }
  @media (max-width: 406px) {
    h6 {
      font-size: 10px !important;
    }
    p {
      font-size: 8px;
    }
  }
`;
const Line = styled(Divider)`
  margin-top: 15px !important;
  border-color: #929292 !important;
  box-shadow: 0px -8px 25px 1px #e47350;
  @media (max-width: 540px) {
    margin-top: 2px !important;
  }
`;
const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px 0 0;

  .sell {
    color: #929292;
  }
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    button {
      width: 100%;
      padding: 5px 0px;
      border-radius: 5px;
      text-align: center;
      margin-top: 15px;
    }
    .sell {
      font-size: 12px;
    }
  }
  @media (max-width: 406px) {
    padding: 5px 10px;
    button {
      padding: 2px 0px;
      font-size: 10px;
      margin-top: 5px;
    }
    .sell {
      font-size: 8px;
    }
  }
`;
const CartButton = styled.button`
  background-color: ${({ $inCart }) => ($inCart ? "#4cd137" : "#ff754c2b")};
  color: ${({ $inCart }) => ($inCart ? "#ffffff" : "#e47350")};
  padding: 25px 15px;
  border: 0;
  border-radius: 0 15px 15px 26px;
  cursor: pointer;
  transition: 0.2s ease;
`;
const Dot = styled(GoDotFill)`
  color: #6c5dd3;
  vertical-align: -3px;
  font-size: 18px;
`;
const GameList = () => {
  const [category, setCategory] = useState("همه");

  // مدیریت تغییر فیلتر
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // فیلتر محصولات بر اساس دسته‌بندی
  const filteredGames =
    category === "همه"
      ? newGame
      : newGame.filter((game) => game.categoty === category);

  // اضافه کردن محصولات به سبد خرید
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(state);
  const handleAddToCart = (game) => {
    dispatch(addItem(game));
    toast.success(`به سبد خرید اضافه شد ${removeLastTwoWords(game.title)}`, {
      className: "custom-toast",
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Container maxWidth="lg">
      <Grid container mb={5}>
        <Grid item xs={12} mb={3}>
          <Category>
            <Typography component="h5" variant="h5">
              جدیدترین بازی های فروشگاه
            </Typography>
            {/* فیلتر دسته‌بندی */}
            <StyledSelect value={category} onChange={handleCategoryChange}>
              <StyledMenuItem value="همه">همه</StyledMenuItem>
              <StyledMenuItem value="پر فروش‌ ترین ها">
                پرفروش ترین
              </StyledMenuItem>
              <StyledMenuItem value="ارزان ترین ها">ارزان ترین</StyledMenuItem>
            </StyledSelect>
          </Category>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {filteredGames.map((game) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={game.id} mb={1}>
            <StyledCard>
              <img src={game.img} alt={game.title} />
              <StyledCardContent>
                <Typography component="h6" variant="h6">
                  {game.title}
                </Typography>
                <Typography component="p" variant="p" mt={1}>
                  قیمت : {game.price.toLocaleString()} هزار تومان
                </Typography>
              </StyledCardContent>
              <Line />
              <Buy>
                <Typography className="sell" component="span" variant="span">
                  <Dot />
                  {game.sell} نفر خرید کرده‌اند
                </Typography>
                <CartButton
                  className="buy"
                  onClick={() => handleAddToCart(game)}
                  $inCart={state.selectedItems.some((i) => i.id === game.id)}
                >
                  {state.selectedItems.some((i) => i.id === game.id)
                    ? "اضافه شد"
                    : "خرید"}
                </CartButton>
              </Buy>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default GameList;
