import { useState } from "react";
import { Container, Divider, Grid } from "@mui/material";
import styled from "styled-components";
import gameTrailers from "../image/gameTrailers/gameTrailers.png";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import SettingsIcon from "@mui/icons-material/Settings";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { FaPlay } from "react-icons/fa6";
import { TbCirclePlus } from "react-icons/tb";
import { IoArrowRedoOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import Trailers from "./Trailers";

const Title = styled.h1`
  text-align: center;
  width: fit-content;
  margin: 80px auto 40px auto;
  font-size: 25px;
  border-bottom: 1px solid #ffffff;
  padding: 15px 0;
`;
const Trailer = styled.div`
  background-color: #242731;
  border-radius: 33px;
  @media (max-width: 650px) {
    .details {
      svg {
        font-size: 13px !important;
      }
      input {
        width: 100px;
        height: 3px;
      }
    }
    .play {
      top: 40%;
      right: 45%;
      padding: 7px 12px;
      border-radius: 10px;
      svg {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 400px) {
    .details {
      svg {
        font-size: 10px !important;
      }
      input {
        width: 70px;
        height: 2px;
      }
      .sound {
        margin-left: 10px;
      }
      .settings {
        margin-right: 10px;
      }
    }
    .play {
      padding: 2px 5px;
      border-radius: 5px;
      svg {
        font-size: 14px;
        vertical-align: -0px;
      }
    }
  }
`;
const Image = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;
const Details = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5%;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  .sound {
    display: flex;
    align-items: center;
    margin-left: 30px;
    svg {
      margin-right: 10px;
      font-size: 18px;
      cursor: pointer;
      background-color: #252525;
      padding: 1.5px;
      border-radius: 3px;
    }
  }
  .settings {
    display: flex;
    align-items: center;
    margin-right: 30px;
    svg {
      margin-left: 10px;
      font-size: 18px;
      cursor: pointer;
      background-color: #252525;
      padding: 1.5px;
      border-radius: 3px;
    }
  }
`;
const VolumeSlider = styled.input`
  direction: ltr;
  width: 150px;
  margin-right: 10px;
  height: 5px;
`;
const Play = styled.div`
  position: absolute;
  top: 40%;
  right: 45%;
  background: rgba(54, 54, 54, 0.71);
  padding: 10px 15px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  cursor: pointer;
  svg {
    color: #ff754c;
    font-size: 30px;
    vertical-align: -3px;
  }
`;

const Info = styled.div`
  padding: 20px 0px;
  h2,
  p {
    padding: 0px 30px;
  }
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    line-height: 30px;
  }
  p {
    color: #cdcdcd;
    line-height: 25px;
    margin-bottom: 20px;
  }
  hr {
    background-color: #f0f3f61a !important;
    margin-bottom: 20px;
  }
  .foot-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
  }
  span {
    margin-left: 25px;
    cursor: pointer;
  }
  .dots-three {
    margin-left: 0px;
  }
  svg {
    vertical-align: -4px;
  }
  .dots-three {
    background-color: #e4e4e440;
    padding: 7px 10px;
    border-radius: 10px;
    svg {
      vertical-align: -1px;
    }
  }
  @media (max-width: 650px) {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
    .foot-card span {
      font-size: 10px;
      margin-left: 15px;
    }
    .dots-three {
      margin-left: 0px !important;
    }
    .foot-card span svg {
      vertical-align: -2px;
    }
  }
  @media (max-width: 420px) {
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
    .foot-card span {
      font-size: 7px;
      margin-left: 10px;
    }
    .dots-three {
      display: none;
    }
    .foot-card span svg {
      vertical-align: -1px;
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

const GameTrailers = () => {
  const [volume, setVolume] = useState(50);
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };
  return (
    <Container maxWidth="lg">
      <Title>تریلر بازی ها</Title>
      <Grid container>
        <Grid item xs={12}>
          <Trailer>
            <Image>
              <img src={gameTrailers} alt="gameTrailers" />
              <Details className="details">
                <div className="sound">
                  <VolumeSlider
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                  />{" "}
                  <VolumeDownIcon />
                  <PauseIcon />
                </div>
                <div className="settings">
                  <CropFreeIcon />
                  <OndemandVideoIcon />
                  <SettingsIcon />
                </div>
              </Details>
              <Play className="play">
                <FaPlay />
              </Play>
            </Image>
            <Info>
              <h2>تریلر رسمی بازی Metal Gear Solid Delta: Snake Eater</h2>
              <p>
                شایعه ساخت Metal Gear Solid Delta: Snake Eater قوت گرفت. طبق
                گفته ها و نشریات وابسته به استودیو های سازنده این عنوان خاطره
                انگیز، خبر های خوبی از ساخت نسخه ریمیک و یا همان بهبود یافته در
                راه است.
              </p>
              <Divider />
              <div className="foot-card">
                <div>
                  <span>
                    <TbCirclePlus /> افزودن به لیست علاقه مندی‌ها
                  </span>
                  <span>
                    <IoArrowRedoOutline /> اشتراک گذاری
                  </span>
                  <span>
                    <AiOutlineLike /> پسندیدم
                  </span>
                </div>
                <div>
                  <span className="dots-three">
                    <PiDotsThreeOutlineThin />
                  </span>
                </div>
              </div>
            </Info>
          </Trailer>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Trailers />
        </Grid>
      </Grid>
      <ViewAll>
        <a href="#">مشاهده همه</a>
      </ViewAll>
    </Container>
  );
};

export default GameTrailers;
