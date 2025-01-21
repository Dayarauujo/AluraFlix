import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Categoria from "../../component/Categoria";
import { getVideos } from "../../service/api";
import { HomeContainer, MainContainer } from "./styled";

const Home = () => {
  const [categories, setCategories] = useState({});

  const fetchVideos = async () => {
    const responseVideos = await getVideos();

    const categoriesVideos = responseVideos.reduce((acc, curr) => {
      if (acc[curr.category]) {
        acc[curr.category].push(curr);
      } else {
        acc[curr.category] = [curr];
      }

      return acc;
    }, {});
    setCategories(categoriesVideos);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const videoBanner = Object.entries(categories)[0]?.[1]?.[0];

  return (
    <HomeContainer>
      <Header />
      <MainContainer>
        {videoBanner && <Banner video={videoBanner} />}
        {Object.entries(categories).map(([category, videos], index) => {
          return (
            <Categoria
              key={category}
              categoria={category}
              videos={videos}
              refetch={fetchVideos}
            />
          );
        })}
      </MainContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
