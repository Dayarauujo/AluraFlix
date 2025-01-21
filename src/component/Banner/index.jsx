import {
  BannerBackground,
  BannerContainer,
  BannerImage,
  BannerInfo,
} from "./styled";

const COLORS = {
  frontend: "#6bd1ff",
  backend: "#00C86F",
  mobile: "#FFBA05",
};

const Banner = ({ video }) => {
  return (
    <BannerContainer $color={COLORS[video.category.toLowerCase()]}>
      <BannerBackground src={video.image} />
      <BannerInfo $color={COLORS[video.category.toLowerCase()]}>
        <span>
          <h1>{video.title}</h1>
        </span>
        <h2>{video.category}</h2>
        <p>{video.description}</p>
      </BannerInfo>

      <BannerImage
        src={video.image}
        alt="Vídeo em destaque"
        $color={COLORS[video.category.toLowerCase()]}
      />
    </BannerContainer>
  );
};

export default Banner;
