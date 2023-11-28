import React, { useState, useEffect } from "react";
import MainVideo from "@/assets/sales.mp4";
import img from "@/assets/hubze-mac.png"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Column1,
  Column2,
  InfoWrapper,
  InfoRow,
  ImgWrap,
  Img,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import { animateScroll as scroll } from "react-scroll";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  // const [videoSrc, setVideoSrc] = useState(Video1);
  const [videoSrc, setVideoSrc] = useState();

  useEffect(() => {
    const videos = [];

    const videoElement = document.getElementById("heroVideo");

    const handleVideoEnd = () => {
      const currentVideoIndex = videos.indexOf(videoSrc);
      const newIndex = (currentVideoIndex + 1) % videos.length;
      setVideoSrc(videos[newIndex]);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [videoSrc]);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop={true}
          muted
          id="heroVideo"
          src={MainVideo}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <HeroP>
                A <span style={{ color: "#3DF205" }}>Digital Sales Board</span>{" "}
                Designed for Realtors by Realtors
              </HeroP>
              <HeroBtnWrapper>
                <Button
                  to="signup"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  onClick={toggleBottom}
                >
                  Learn More {hover ? <ArrowRight /> : <ArrowForward />}
                </Button>
              </HeroBtnWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={"image"} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
