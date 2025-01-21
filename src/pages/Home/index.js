import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Categoria from '../../component/Categoria';
import { getVideos } from "../../service/api";
import { HomeContainer, MainContainer } from "./styled";

const Home = () => {
  const [categories, setCategories] = useState({});
  
  useEffect(() => {
    (async () => {
      const responseVideos = await getVideos()
      
      setCategories(responseVideos.reduce((acc, curr) => {
        if (acc[curr.category]) {
          acc[curr.category].push(curr)
        } else {
          acc[curr.category] = [curr]
        }

        return acc
      }, {}))
    })()
  }, [])

  const videoBanner = Object.entries(categories)[0]?.[1]?.[0];
  
  return (
    <HomeContainer>
      <Header />
      <MainContainer>
        {videoBanner && <Banner video={videoBanner} />}
        {Object.entries(categories).map(([category, videos]) => {
          return <Categoria 
          categoria={category} 
          videos={videos}
          />
        })}
      </MainContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Home;