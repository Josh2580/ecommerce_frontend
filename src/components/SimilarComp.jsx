import React from "react";
import {
  useGetAllCategoryQuery,
  useGetCategoryByIdQuery,
} from "../source/api/CategoryApi";
import Snippet from "./snippets/Snippet";
import { styled } from "styled-components";
import CarouselComp from "./CarouselComp";
import { useParams } from "react-router-dom";

const SimilarComp = ({ catId, itemId }) => {
  const { catyId } = useParams();
  // const { data, isSuccess } = useGetAllCategoryQuery();
  // console.log(catyId);
  const { data, isSuccess } = useGetCategoryByIdQuery({ id: catyId });

  let SimilarProducts = [];

  if (isSuccess) {
    // filtering the remaining products to display
    SimilarProducts = data.category_products.filter(
      (prod) => prod.id != itemId
    );
  }
  console.log(SimilarProducts);
  return (
    <div>
      {isSuccess && (
        <>
          <p>Similar Good Products </p>
          <CarouselComp items={SimilarProducts} />
        </>
      )}
    </div>
  );
};

export default SimilarComp;
