import React from "react";
import Snippet from "./snippets/Snippet";
//Importating Carousel modules
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//importing Sylted modules
import { styled } from "styled-components";

const CarouselComp = ({ items }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  const product = items.map((pro) => <Snippet key={pro.id} props={pro} />);
  // console.log(product);

  return (
    <CarouselStyle>
      <Carousel
        swipeable={true}
        draggable={true}
        partialVisible={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        containerClass="carousel-container"
        deviceType=""
        dotListClass="custom-dot-list-style"
        itemClass="eachItem"
      >
        {product}
        {/* {product} */}
      </Carousel>
    </CarouselStyle>
  );
};

const CarouselStyle = styled.div`
  .eachItem {
    /* background: blue; */
    padding: 1rem;
    /* margin: 1rem; */
  }
`;

export default CarouselComp;
