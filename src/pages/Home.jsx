import React from "react";
import { Container, HeroSection, Explore } from "../Components/index";

function Home() {
  return (
    <>
      <div className="">
        <Container>
          <div className="min-w-full flex flex-col gap-5">
            <HeroSection />

            <Explore />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
