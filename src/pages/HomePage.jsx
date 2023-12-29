import React, { useEffect, useState } from "react";
import Snippet from "../components/snippets/Snippet";
import { styled } from "styled-components";
import { useGetAllProductQuery } from "../source/api/ProductsApi";
import { useGetAllCategoryQuery } from "../source/api/CategoryApi";
import CategorySnippet from "../components/snippets/CategorySnippet";
import CategoryList from "../components/CategoryList";
import ReactPaginate from "react-paginate";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { data: allData, isSuccess } = useGetAllProductQuery();
  const { isSuccess: categoryIsSuccess } = useGetAllCategoryQuery();
  const pageSize = 3;
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  // const handleChange = (event, page) => {
  //   const from = (page - 1) * pageSize;
  //   const to = (page - 1) * pageSize + pageSize;

  //   setPagination({ ...pagination, from: from, to: to });

  //   console.log(pagination.from, pagination.to);
  // };

  // useEffect(() => {
  // {
  //   isSuccess &&
  //     setData(allData.slice(pagination.from, pagination.to));
  // }
  // {
  //   isSuccess && setData(allData);
  // }
  // {
  //   isSuccess && setTotal(allData.count);
  // }
  // {
  //   isSuccess &&
  //     setPagination({
  //       ...pagination,
  //       count: Math.ceil(allData.count / pageSize),
  //     });
  // }
  // }, [isSuccess, total]);

  // var links = [];

  // for (let i = 1, i <= total; i++){
  //   links.push[<NavLink>{i}</NavLink>]
  // }

  return (
    <div>
      {/* <br /> */}
      {/* {data} */}
      {/* {isSuccess && (
        <Pagination count={pagination.count} onChange={handleChange} />
      )} */}

      <CategorySnippetStyle>
        {categoryIsSuccess && <CategoryList />}
      </CategorySnippetStyle>

      <h2>All Products</h2>
      <AllSnippet>
        {isSuccess ? (
          <>
            {allData.map((product) => (
              <Snippet key={product.id} props={product} />
            ))}
          </>
        ) : (
          <h1>is loading</h1>
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
