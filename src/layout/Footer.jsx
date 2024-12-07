import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import imgHot1 from "../image/gameTrailers/gameTrailers.png";
import imgHot2 from "../image/gameTrailers/gameTrailers2.png";
import imgHot3 from "../image/latestArticles/latestArticle.png";
import message from "../image/footer/message.png";
import { FaArrowLeft } from "react-icons/fa";
import namad1 from "../image/footer/namad1.png";
import namad2 from "../image/footer/namad2.png";
import namad3 from "../image/footer/namad3.png";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Foot = styled.footer`
  background-color: #323339;
  padding: 60px 0 0px 0;
`;
const Title = styled.h4`
  margin-bottom: 40px;
  font-size: 21px;
  font-weight: 700;
`;
const HotContants = styled.div`
  display: flex;
  margin-top: 15px;
  img {
    width: 100px;
    height: 67px;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
  }
  span {
    width: 50%;
    margin-right: 10px;
    line-height: 25px;
    font-size: 14px;
  }
`;
const MostVisited = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: 20px;
    color: #ababab;
    font-size: 14px;
    padding: 5px;
    border-radius: 5px;
    width: 90%;
    &:hover {
      background-color: #232426;
    }
  }
`;
const Newsletter = styled.div`
  position: relative;
  min-width: 300px; /* عرض مورد نظر */
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 45px;
  border-radius: 13px;
  border: none;
  background-color: #2e2e2e;
  color: white;
  font-size: 16px;
  text-align: right;
  outline: none;
  margin-left: 10px;
  &::placeholder {
    color: #9e9e9e;
  }
`;
const RightIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
`;
const ArrowLeft = styled.a`
  background-color: #6c5dd3;
  padding: 10px 15px;
  border-radius: 13px;
`;

const Namad = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 11px;
  overflow: hidden;
  position: relative;
  img {
    width: 35%;
  }
`;
const Copyright = styled.div`
  background-color: #ff754c;
  padding: 15px 0;
  p {
    font-size: 10px;
    @media (max-width: 600px) {
      text-align: center;
    }
    @media (min-width: 400px) {
      font-size: 10px;
    }
    @media (min-width: 500px) {
      font-size: 11px;
    }
    @media (min-width: 650px) {
      font-size: 12px;
    }
    @media (min-width: 750px) {
      font-size: 14px;
    }
  }
`;
const SocialNetworks = styled.div`
  svg {
    font-size: 20px;
    cursor: pointer;
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
`;

const Footer = () => {
  const dataHotContents = [
    {
      id: 1,
      img: imgHot1,
      title: "این هفته چه بازی های معرفی می شوند.",
    },
    {
      id: 2,
      img: imgHot2,
      title: "جدیدترین تریلر بازی های جدید",
    },
    {
      id: 3,
      img: imgHot3,
      title: "این هفته چه مقالاتی معرفی می شوند.",
    },
  ];
  const visited = [
    "جدیدترین بازی ها",
    "مقالات",
    "فروشگاه",
    "درباره ما",
    "تماس با ما",
  ];
  return (
    <Foot>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={6} md={4} mb={5}>
            <Title>داغترین مطالب هفته</Title>
            {dataHotContents.map((item) => (
              <HotContants key={item.id}>
                <img src={item.img} alt="img content" />
                <span>{item.title}</span>
              </HotContants>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={5}>
            <Title>داغترین مطالب هفته</Title>
            <MostVisited>
              {visited.map((item) => (
                <a href="#" key={item}>
                  {item}
                </a>
              ))}
            </MostVisited>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={5}>
            <Title>عضویت در خبرنامه</Title>
            <Newsletter>
              <RightIcon src={message} alt="Mail Icon" />
              <StyledInput type="text" placeholder="ایمیل خود را وارد کنید." />
              <ArrowLeft href="#">
                <FaArrowLeft />
              </ArrowLeft>
            </Newsletter>
            <Namad>
              <img src={namad1} alt="namad1" />
              <img src={namad2} alt="namad2" />
              <img src={namad3} alt="namad3" />
            </Namad>
          </Grid>
        </Grid>
      </Container>
      <Copyright>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={8}>
              <p>
                {" "}
                © کپی بخش یا کل هر کدام از مطالب تنها با کسب مجوز مکتوب امکان
                پذیر است.
              </p>
            </Grid>
            <Grid item xs={12} sm={4} display="flex" justifyContent="end">
              <SocialNetworks>
                <CiTwitter />
                <RiLinkedinFill />
                <FaWhatsapp />
                <FaInstagram />
              </SocialNetworks>
            </Grid>
          </Grid>
        </Container>
      </Copyright>
    </Foot>
  );
};

export default Footer;
