import React, { useState, useEffect } from "react";
import Snippet from "../components/snippets/Snippet";
import { styled } from "styled-components";
import { useGetAllProductQuery } from "../source/api/ProductsApi";
import { useGetAllCategoryQuery } from "../source/api/CategoryApi";
import CategoryList from "../components/CategoryList";
import Spinner from "react-bootstrap/Spinner";

const HomePage = () => {
  const { data, isSuccess } = useGetAllProductQuery();
  const { isSuccess: categoryIsSuccess } = useGetAllCategoryQuery();

  const [allData, setAllData] = useState();

  useEffect(() => {
    setAllData(data);
  }, [data]);

  return (
    <div>
      <CategorySnippetStyle>
        {categoryIsSuccess && <CategoryList />}
      </CategorySnippetStyle>

      <AllSnippet>
        {isSuccess && allData ? (
          <>
            {allData.map((product) => (
              <Snippet key={product.id} props={product} />
            ))}
          </>
        ) : (
          <div
            className="d-flex w-100 align-items-center justify-content-center"
            style={{ height: "50vh" }}
          >
            <Spinner animation="grow" variant="secondary" />
          </div>
        )}
      </AllSnippet>
    </div>
  );
};

const CategorySnippetStyle = styled.div`
  /* display: flex; */
  /* grid-template-columns: repeat(auto-fit, minmax(50px, 80px)); */
  /* gap: 16px; */

  @media (max-width: 550px) {
    /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px; */
  }
`;

const AllSnippet = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 1rem 0rem;
  @media (max-width: 899px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
`;

export default HomePage;
