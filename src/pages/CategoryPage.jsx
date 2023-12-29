import React, { useEffect, useState } from "react";
import Snippet from "../components/snippets/Snippet";
import { styled } from "styled-components";
import {
  useGetAllCategoryQuery,
  useGetCategoryByIdQuery,
} from "../source/api/CategoryApi";
import CategorySnippet from "../components/snippets/CategorySnippet";
import CategoryList from "../components/CategoryList";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const params = useParams();
  const { data, isSuccess } = useGetCategoryByIdQuery({
    id: params.categoryId,
  });

  return (
    <CategoryPageStyle>
      <CategoryList />
      {isSuccess && data.category_products.length >= 1 && (
        <h2>{data.name} Products</h2>
      )}

      <AllSnippet>
        {isSuccess ? (
          <>
            {data.category_products.map((product) => (
              <Snippet key={product.id} props={product} />
            ))}
            {data.category_products.length < 1 && (
              <h2>Please select another category to view more products</h2>
            )}
          </>
        ) : (
          <h1>is loading</h1>
        )}
      </AllSnippet>
    </CategoryPageStyle>
  );
};

const AllSnippet = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  @media (max-width: 550px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
`;

const CategoryPageStyle = styled.div`
  h2 {
    /* background: red; */
    text-align: center;
  }
`;

export default CategoryPage;
