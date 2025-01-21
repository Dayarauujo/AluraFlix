import YouTube from "react-youtube";

import {
  BannerBackground,
  BannerContainer,
  BannerVideo,
  BannerInfo,
} from "./styled";
import { TECH_COLORS } from "../../utils/colors";

const Banner = ({ video }) => {
  console.log(video);
  return (
    <BannerContainer $color={TECH_COLORS[video.category.toLowerCase()]}>
      <BannerBackground src={video.image} />
      <BannerInfo $color={TECH_COLORS[video.category.toLowerCase()]}>
        <span>
          <h1>{video.title}</h1>
        </span>
        <h2>{video.category}</h2>
        <p>{video.description}</p>
      </BannerInfo>

      <BannerVideo $color={TECH_COLORS[video.category.toLowerCase()]}>
        <YouTube videoId={video.video.match(/v=([^&]+)/)[1]} />
      </BannerVideo>
    </BannerContainer>
  );
};

export default Banner;
