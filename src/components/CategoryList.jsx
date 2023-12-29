import React from "react";
import { useGetAllCategoryQuery } from "../source/api/CategoryApi";
import styled from "styled-components";
import CategorySnippet from "./snippets/CategorySnippet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryList = () => {
  const { data, isSuccess } = useGetAllCategoryQuery();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 8,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
      >
        {isSuccess &&
          data.map((category) => (
            <CategorySnippet key={category.id} props={category} />
          ))}
      </Carousel>
    </div>
  );
};

const CategoryListStyle = styled.div`
  display: flex;
  gap: 16px;
  /* overflow-x: scroll; */
`;

export default CategoryList;
