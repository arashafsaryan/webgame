import { Grid, Typography, Container } from "@mui/material";
import styled from "styled-components";
import latestArticle from "../image/latestArticles/latestArticle.png";
import latestArticles from "../constants/latestArticles";
import { GoDotFill } from "react-icons/go";

// Styled Components
const TitleMain = styled.h1`
  text-align: center;
  width: fit-content;
  margin: 80px auto 40px auto;
  font-size: 25px;
  border-bottom: 1px solid #ffffff;
  padding: 15px 0;
`;
const StyledBox = styled.div`
  color: #ffffff;
  height: 100%;
  position: relative;
  .info {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding: 0 5% 7% 14%;
    h5 {
      font-size: 25px;
      font-weight: 600;
      margin: 10px 0;
    }
    p {
      color: #e4e4e4;
      line-height: 25px;
    }
    button {
      margin: 20px 0 0 0;
      width: fit-content;
      background-color: #6c5dd3;
      border: 0;
      outline: 0;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      font-weight: 500;
    }
    .category {
      display: flex;
      span {
        margin-left: 10px;
        background: rgba(178, 130, 255, 0.351);
        backdrop-filter: blur(1px);
        -webkit-backdrop-filter: blur(1px);
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
  @media (max-width: 399px) {
    .info .category span {
      padding: 3px 6px;
      border-radius: 10px;
      font-size: 10px;
      font-weight: 400;
    }
    .info h5{
      font-size: 18px;
    }
    .info p{
      font-size: 12px;
      line-height: 20px;
    }
    .info button {
      font-size: 10px;
      padding: 5px 10px;
      border-radius: 6px;
      font-weight: 400;
    }

  }
`;

const LargeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

// styles articlesCard

const ArticleCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #242731;
  padding: 10px;
  border-radius: 20px;
  transition: 0.2s ease-in;
  img {
    width: 50%;
    border-radius: 20px;
    margin-left: 20px;
  }
  &:hover {
    background-color: #6c5dd34a;
    .category-card span {
      background-color: #595765;
      color: #ffffff;
    }
    .read-card,
    .read-card svg {
      color: #a99dff;
    }
    a {
      background-color: #6c5dd3;
    }
  }
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .category-card {
    display: flex;
    span {
      margin-left: 10px;
      background-color: #4d477074;
      color: #6c5dd3;
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 500;
    }
  }
  .title-card {
    line-height: 30px;
  }
  .read-card {
    color: #808191;
    font-size: 13px;
  }
  a {
    background-color: #e4e4e41a;
    width: fit-content;
    padding: 7px 15px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 10px;
  }
  @media (max-width: 449px) {
    .category-card span {
      border-radius: 5px;
      margin-left: 5px;
      padding: 3px 6px;
      font-size: 10px;
    }
    .title-card {
      line-height: 22px;
      font-size: 13px;
    }
    .read-card {
      font-size: 9px;
    }
    a {
      padding: 4px 8px;
      font-size: 10px;
      border-radius: 8px;
    }
  }
  @media (max-width: 355px) {
    .category-card span {
      font-size: 8px;
    }
    .title-card {
      line-height: 16px;
      font-size: 10px;
    }
    .read-card,
    .read-card svg {
      font-size: 7px;
      vertical-align: -1px;
    }
    a {
      font-size: 7px;
      border-radius: 5px;
    }
  }
`;

const Dot = styled(GoDotFill)`
  color: #ff754c;
  vertical-align: -5px;
  font-size: 18px;
`;

const LatestArticles = () => {
  return (
    <Container maxWidth="lg">
      <TitleMain>جدیدترین مقالات</TitleMain>
      <Grid container spacing={3} justifyContent="space-between">
        {/* ستون تصویر بزرگ سمت راست */}
        <Grid item xs={12} md={6}>
          <StyledBox>
            <LargeImage src={latestArticle} alt="" />
            <div className="info">
              <div className="category">
                <span>سبک پازل</span>
                <span>بازی های فکری</span>
              </div>
              <h5>بازی Hello Neighbor منتشر شد</h5>
              <Typography component="p" variant="p">
                سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای ماجراجویی
                – ترسناک با ساخت فوق العاده از tinyBuild برای اندروید است که
                دقایقی پیش ...
              </Typography>
              <button>مشاهده مقاله</button>
            </div>
          </StyledBox>
        </Grid>
        {/* ستون کارت های مقالات سمت چپ */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {latestArticles.map((article) => (
              <Grid item xs={12} key={article.id}>
                <ArticleCard>
                  <img src={article.img} alt="imgArticle" />
                  <CardInfo>
                    <div className="category-card">
                      {article.category.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <p className="title-card">{article.title}</p>
                    <p className="read-card">
                      <Dot /> {article.read}
                    </p>
                    <a href="#">مشاهده مقاله</a>
                  </CardInfo>
                </ArticleCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LatestArticles;
