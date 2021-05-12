import React, { useState } from "react";

import styled from "styled-components";

import ReactPlayer from "react-player";

import Text from "../Text";
import Button from "../Button";
import { Row } from "../Layout";

import playButton from "../../assets/icons/play.svg";
import pauseButton from "../../assets/icons/pause.svg";
import muteButton from "../../assets/icons/music-sound.svg";

const VideoWrapp = styled.div`
  position: relative;
`;

const VideoBottomControls = styled(Row)`
  position: absolute;
  bottom: 15px;
  z-index: 2;
  padding: 0 15px;
  width: 100%;
`;

const VideoUpControls = styled(VideoBottomControls)`
  bottom: auto;
  top: 15px;
`;

const MuteButton = styled(Button)`
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 20px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -4%;
    transform: rotate(45deg);

    opacity: ${(props) => (props.mute ? "1" : "0")};
  }
`;

const Video = ({ url }) => {
  const [duration, setDuration] = useState("");
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(true);
  const [currentTime, setCurrentTime] = useState("00:00");

  const videoRef = React.createRef();
  const videoWrapp = React.useRef(null);

  const secondsToMinutes = (seconds, func) => {
    if (!seconds) return "";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      func(`${parseInt(hours, 10)}:${min}:${sec}`);
    } else if (min == 0) {
      func(`00:${sec}`);
    } else {
      func(`${min}:${sec}`);
    }
  };

  const handleChangeDuration = (seconds) => {
    secondsToMinutes(seconds, setDuration);
  };

  const handleChangePlay = () => {
    play ? setPlay(false) : setPlay(true);
  };

  const handleMute = (event) => {
    event.stopPropagation();

    mute ? setMute(false) : setMute(true);
  };

  const handleChangeCurrentTime = (seconds) => {
    secondsToMinutes(seconds, setCurrentTime);
  };

  return (
    <VideoWrapp ref={videoWrapp} onClick={() => handleChangePlay(!play)}>
      <ReactPlayer
        ref={videoRef}
        height="180px"
        width="100%"
        url={url}
        muted={mute ? true : false}
        playing={play ? true : false}
        style={{ borderRadius: "15px", overflow: "hidden" }}
        onDuration={(state) => handleChangeDuration(state)}
        onProgress={(state) => handleChangeCurrentTime(state.playedSeconds)}
      />
      <VideoUpControls style={{ justifyContent: "flex-end" }}>
        <MuteButton
          icon={muteButton}
          onClick={(event) => handleMute(event)}
          style={{ height: 16 }}
          fill="#fff"
          mute={mute}
        />
      </VideoUpControls>
      <VideoBottomControls btw center>
        <Button
          icon={play ? pauseButton : playButton}
          onClick={() => handleChangePlay()}
          style={{ height: 16 }}
        />

        <Text
          text={play ? currentTime : currentTime > 0 ? currentTime : duration}
          color="#fff"
        />
      </VideoBottomControls>
    </VideoWrapp>
  );
};

export default Video;
