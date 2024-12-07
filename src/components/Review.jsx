import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import review from "../constants/review";
import { FaPlay } from "react-icons/fa6";

const Title = styled.h1`
  text-align: center;
  width: fit-content;
  margin: 80px auto 40px auto;
  font-size: 25px;
  border-bottom: 1px solid #ffffff;
  padding: 15px 0;
`;
const Card = styled(Grid)`
  position: relative;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    border-radius: 20px;
    transition: 0.3s ease-in;
  }
  &:hover {
    .card-info {
      bottom: 40%;
    }
    .play {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ff754c;
      border-radius: 10px;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    img {
      filter: blur(3px) brightness(0.7);
      opacity: 0.9;
    }
    @media (max-width: 500px) {
      .card-info {
        bottom: 20%;
      }
      .play {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
  }
`;
const CardInfo = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in;

  h4 {
    font-size: 23px;
  }
  p {
    margin: 15px 0;
  }
  @media (max-width: 500px) {
    h4 {
      font-size: 18px;
    }
    p {
      margin: 15px 0;
      font-size: 12px;
    }
  }
  @media (max-width: 410px) {
    h4 {
      font-size: 11px;
    }
    p {
      font-size: 8px;
    }
  }
`;
const Play = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  cursor: pointer;
  transition: 0.3s ease-in;
  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
    svg {
      font-size: 10px;
    }
  }
`;

const ViewAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  a {
    background-color: #e4e4e41a;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
  }
  @media (max-width: 500px) {
    margin: 30px 0;
    a {
      font-size: 12px;
      padding: 7px 10px;
      border-radius: 5px;
    }
  }
`;

const Review = () => {
  return (
    <Container maxWidth="lg">
      <Title>جدید ترین نقد و بررسی ها</Title>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {review.map((item, index) => (
          <Card
            item
            key={item.id}
            xs={index === review.length - 1 ? 12 : 5.7}
            md={3.7}
            mb={3}
          >
            <img src={item.img} alt="image card"  />
            <CardInfo className="card-info">
              <h4>ویدیو نقد و بررسی بازی</h4>
              <p>{item.name}</p>
              <Play className="play">
                <FaPlay />
              </Play>
            </CardInfo>
          </Card>
        ))}
      </Grid>
      <ViewAll>
        <a href="#">مشاهده همه</a>
      </ViewAll>
    </Container>
  );
};

export default Review;
