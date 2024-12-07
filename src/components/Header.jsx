import { Container, Grid, Typography } from "@mui/material";
import imgHeader from "../image/header.png";
import styled from "styled-components";
import { BiMessageDetail } from "react-icons/bi";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const MyHeader = styled.header`
  position: relative;
  img {
    width: 100%;
  }
`;
const NewArticle = styled.div`
  max-width: 350px;
  position: absolute;
  bottom: -15%;
  left: 13%;
  background: #213a7f33;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 768px) {
    max-width: 300px;
    bottom: -60px;
    span {
      font-size: 9px !important;
    }
    h5 {
      font-size: 13px;
    }
    p {
      font-size: 10px !important;
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const SectionOne = styled.div`
  padding: 10px 25px 10px 25px;
  span {
    font-size: 13px;
    background-color: #ff4a132b;
    color: #ff6334;
    padding: 3px 10px 5px 10px;
    border-radius: 15px;
  }
  h5 {
    font-weight: 600;
  }
  p {
    line-height: 25px;
    font-size: 13px;
    text-align: justify;
    color: #e2e2e2;
  }
`;
const SectionTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px 4px 3px;
  .number {
    background-color: #6c5dd3;
    border-radius: 50px;
    font-size: 9px;
    padding: 1px 0 1px 5px;
    display: flex;
    align-items: center;
    svg {
      background-color: #ffffff;
      color: #6c5dd3;
      margin: 0px 0 0px 2px;
      padding: 3px;
      border-radius: 15px;
      font-size: 10px;
    }
  }
  .arrow-circle-left {
    background-color: #6c5dd3;
    padding: 10px;
    border-radius: 0 8px 8px 16px;
    svg {
      vertical-align: 0px;
    }
  }
`;

const Header = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={5}>
        <Grid item xs={12}>
          <MyHeader>
            <img src={imgHeader} alt="imgHeader" />
            <NewArticle>
              <SectionOne>
                <Typography component="span" variant="span">
                  {" "}
                  مقاله‌ جدید
                </Typography>
                <Typography component="h5" variant="h5" my={1}>
                  Call of Duty Warzone
                </Typography>
                <Typography component="p" variant="p">
                  مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی
                  نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد
                  بازیکنان آن است.
                </Typography>
              </SectionOne>
              <SectionTwo>
                <div className="number">
                  <BiMessageDetail /> <span>20 نفر</span>
                </div>
                <div className="arrow-circle-left">
                  <TfiArrowCircleLeft />
                </div>
              </SectionTwo>
            </NewArticle>
          </MyHeader>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
