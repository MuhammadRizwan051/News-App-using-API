import React, { useState, useEffect } from "react";
import ResponsiveAppBar from '../components/AppBar';
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider, Grid, Tooltip, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

function Home() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const navigate = useNavigate()

  let getData = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=in&apiKey=5657631294aa449b9ef2820b8931b495&q=india")
      .then((res) => {
        setMyData(res.data.articles);
      })
      .catch((err) => {
        setIsError(err.message);
      });
  };

  // console.log(myData)

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <ResponsiveAppBar />
      {isError !== "" ? (
        <h2 style={{marginTop:'100px'}}>{isError}</h2>
      ) : (
        myData.map((post, i) => {
          const { author, title, description, url, urlToImage, publishedAt, content, source } =
            post;
          return (
            <>
              <Card mt={5} sx={{marginTop:'100px'}}>
                <Grid container px= {{xl:25, lg:15, md: 10, sm:5, xs:2}} mt={5} mb={4} >
                  <Grid item xl={9} lg={8} md={7} sm={12} xs={12} >
                    <CardContent>
                      <Typography
                        mb={{xl:5, xs:3}}
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold", textAlign:'justify' }}
                      >
                        {title ? title : "--"}
                      </Typography>
                      <Typography variant="body2" sx={{fontSize:'17px', textAlign:'justify'}}>
                        {`${description} `}
                      </Typography>
                      <Typography
                        variant="body2"
                        mt={4}
                        sx={{color:'grey'}}
                      >
                        <b>Name:</b> {source.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{color:'grey'}}
                      >
                        <b>Date:</b> {publishedAt.slice(0, 10)}
                      </Typography>
                      <Typography
                        variant="body2"
                        mb={3}
                        sx={{color:'grey'}}
                      >
                        <b>Author:</b> {author ? author : "--"}
                      </Typography>
                      <Link
                        sx={{cursor:'pointer'}}
                        underline='always'
                        onClick={() => {
                          navigate('/product', {
                            state: {
                              author: author,
                              title: title,
                              description: description,
                              url: url,
                              urlToImage: urlToImage,
                              publishedAt: publishedAt,
                              content: content,
                              source: source
                            }
                          })
                        }}
                      >
                        See More
                      </Link>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Grid>
                  <Grid item xl={3} lg={4} md={5} sm={12} xs={12} >
                    <CardMedia
                      sx={{ height: {xl:'80%', lg:'70%', md:'70%'}, objectFit: "contain" }}
                      component="img"
                      image={urlToImage}
                      alt="--"
                    />
                  </Grid>
                </Grid>
                <Divider />
              </Card>
            </>
          )
        })
      )
      }
    </>
  );
}

export default Home;
