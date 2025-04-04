import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import "./index.css";
import { Box, Grid2, Typography } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box
      maxWidth="100vw"
      display="flex"
      flexDirection="column"
      component="main"
      overflow="hidden"
      position="relative"
    >
      <Box
        mx={1}
        position="sticky"
        overflow="hidden"
        top={0}
        width="100vw"
        height={80}
        component="nav"
        display="inline-flex"
        alignItems="center"
        justifyContent="space-around"
        flexDirection="row"
      >
        <Typography variant="h6">ՎԻԳ - ԱՇ ՍՊԸ</Typography>
        <Box display="flex" flexDirection="row" gap={4}>
          <Typography component="a" href="#services" variant="body1">
            Ծառայություններ
          </Typography>
          <Typography component="a" href="#projects" variant="body1">
            Նախագծեր
          </Typography>
          <Typography component="a" href="#contacts" variant="body1">
            Հետադարձ կապ
          </Typography>
        </Box>
      </Box>
      <Box
        color="white"
        id="services"
        className="section-1"
        minHeight={500}
        component="section"
        alignContent="center"
      >
        <Grid2
          height={500}
          style={{ background: "#1F1F1FD9" }}
          container
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid2>
            <Typography borderLeft="8px solid #FFB400" pl={3} variant="h4">
              ՄԵՐ ՇԻՆԱՐԱՐԱԿԱՆ <br />
              ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԸ
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="h5">Ծառայություններ</Typography>
            <Box
              marginTop={2}
              className="icon icon-building"
              display="flex"
              alignItems="center"
            >
              <Typography variant="body1">Շենքերի կառուցում</Typography>
            </Box>
            <Box
              marginTop={2}
              className="icon icon-tools"
              display="flex"
              alignItems="center"
            >
              <Typography variant="body1">Վերանորոգում</Typography>
            </Box>
            <Box
              marginTop={2}
              className="icon icon-brush"
              display="flex"
              alignItems="center"
            >
              <Typography variant="body1">Կոսմետիկ դիզայն</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Box
        m={2}
        id="projects"
        component="section"
        minHeight={650}
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        gap={10}
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={3}
        >
          <Typography pl={3} variant="h3">
            ՆԱԽԱԳԾԵՐ
          </Typography>
          <Box
            borderBottom="8px solid #FFB400"
            maxWidth={136}
            width={136}
          ></Box>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={3}
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
        >
          <Box className="project-item">
            <Box className="project-image project-image-1" />
          </Box>
          <Box className="project-item">
            <Box className="project-image project-image-2" />
          </Box>
          <Box className="project-item">
            <Box className="project-image project-image-3" />
          </Box>
        </Box>
      </Box>
      <Box
        minHeight={550}
        id="contacts"
        className="section-3"
        component="section"
      >
        <Grid2
          height={550}
          display="flex"
          justifyContent="center"
          style={{ background: "#1F1F1FD9" }}
        >
          <Grid2
            container
            direction="column"
            px={{ lg: 28, md: 20, xs: 4 }}
            alignSelf="center"
            justifyContent="center"
            alignItems="center"
            style={{ background: "#FFB400" }}
            minHeight={252}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography fontWeight="700" variant="h6">
                ՀԵՏԱԴԱՐՁ ԿԱՊ
              </Typography>
              <Box width={100} mt={1} borderBottom="2px solid black" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Box
                marginTop={2}
                className="icon icon-location"
                display="flex"
                alignItems="center"
              >
                <Typography variant="body1">
                  ք. Աշտարակ Արա֊1 թաղամաս 5 փ. 44֊47
                </Typography>
              </Box>
              <Box
                marginTop={2}
                className="icon icon-phone"
                display="flex"
                alignItems="center"
              >
                <Typography variant="body1">+37494242827</Typography>
              </Box>
              <Box
                marginTop={2}
                className="icon icon-mail"
                display="flex"
                alignItems="center"
              >
                <Typography variant="body1">
                  zaven.qasinyan85@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>ՎԻԳ - ԱՇ ՍՊԸ</title>;
