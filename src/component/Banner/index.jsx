import {
  BannerBackground,
  BannerContainer,
  BannerImage,
  BannerInfo,
} from "./styled";

const Banner = ({ video }) => {
  return (
    <BannerContainer>
      <BannerBackground src={video.image} />
      <BannerInfo>
        <span>
          <h1>{video.title}</h1>
        </span>
        <h2>{video.category}</h2>
        <p>{video.description}</p>
      </BannerInfo>

      <BannerImage src={video.image} alt="Vídeo em destaque" />
    </BannerContainer>
  );
};

export default Banner;
