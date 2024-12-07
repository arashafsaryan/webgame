import { Avatar, Grid } from "@mui/material";
import gameTrailers from "../constants/gameTrailers";
import styled from "styled-components";
import { GoDotFill } from "react-icons/go";

const TrailersCard = styled.div`
  position: relative;
  background-color: #242731;
  border-radius: 20px;
  @media (max-width: 490px) {
    border-radius: 10px;
    .time {
      font-size: 10px;
      top: 8px;
      right: 10px;
    }
    img {
      border-radius: 10px 10px 0 0;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
`;
const Time = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 1;
  background: rgba(54, 54, 54, 0.71);
  border-radius: 5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 2px 5px;
`;
const InfoCard = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 170px; /* حداقل ارتفاع برای همه کارت‌ها */
  box-sizing: border-box;
  @media (max-width: 490px) {
    max-height: 150px; /* حداقل ارتفاع برای همه کارت‌ها */
    padding: 7px 10px;
    .title a {
      font-size: 12px;
      line-height: 10px;
    }
    .view span {
      margin-left: 6px;
      font-size: 9px;
    }
  }
  @media (max-width: 345px) {
    .title a {
      font-size: 11px;
    }
    .view span {
      margin-left: 5px;
      font-size: 8px;
    }
  }
`;
const Title = styled.div`
  line-height: 25px;
  a {
    color: #ffffff;
  }
`;
const View = styled.div`
  span {
    font-size: 13px;
    margin-left: 15px;
  }
  svg {
    vertical-align: -2px;
  }
`;
const Publisher = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  img {
    width: 30px !important;
    height: 30px !important;
    border-radius: 100%;
    float: right !important;
  }
  span {
    font-size: 12px;
    font-weight: 500;
  }
`;

const Trailers = () => {
  return (
    <Grid container spacing={2}>
      {gameTrailers.map((trailer) => (
        <Grid key={trailer.id} item xs={6} md={4} lg={3}>
          <TrailersCard>
            <Image src={trailer.img} alt="imageTrailer" />
            <Time className="time">{trailer.time}</Time>
            <InfoCard>
              <Title className="title">
                <a href="#">{trailer.title}</a>{" "}
              </Title>
              <View className="view">
                <span>
                  <GoDotFill color="#0049C6" /> {trailer.view} بازدید
                </span>
                <span>
                  <GoDotFill color="#7FBA7A" /> {trailer.lastVisit}
                </span>
                <Publisher>
                  <Avatar src={trailer.img} />
                  <span> منتشر کننده : {trailer.publisher} </span>
                </Publisher>
              </View>
            </InfoCard>
          </TrailersCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Trailers;
