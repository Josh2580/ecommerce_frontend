import React from "react";
import { orderProduct } from "../../source/ProductSource";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FaSpinner, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { SellersMainHeader } from "./SellersHeader";
import { AccHeader, UserDiv } from "./SellersDashboard";
import { SellersProductsApi } from "./sellersProductSource";
import { ButtonStyle } from "../../components/myModules/Button";

const SellersProducts = () => {
  const navigate = useNavigate();

  return (
    <UserDiv>
      <AccHeader>
        <SellersMainHeader />
      </AccHeader>

      <Table>
        <thead>
          <Tr colspan="5">
            <th>
              <ButtonStyle onClick={() => navigate("/seller/add-products")}>
                Add Product
              </ButtonStyle>
            </th>
          </Tr>
          <Tr>
            <th className="serialNumber">S/N</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </Tr>
        </thead>
        <tbody>
          {SellersProductsApi.map((data, i) => (
            <Tr key={i}>
              <td className="serialNumber">{i + 1}</td>
              <td>{data.orderId}</td>
              <td>{data.price}</td>
              <Td
                color={
                  data.status === "published"
                    ? "green"
                    : "not_published"
                    ? "goldenrod"
                    : "out_of_stock"
                    ? "red"
                    : "none"
                }
                // color={data.status === "published" ? "green" : "none"}
                // color={data.status === "not_published" ? "goldenrod" : "none"}

                // color="green"
              >
                {" "}
                {data.status === "published" && <FaCheckCircle />}
                {data.status === "out_of_stock" && <FaTimesCircle />}{" "}
                {data.status === "not_published" && <FaSpinner />} {data.status}
              </Td>
              {/* <td>{data.action}</td> */}
              <td className="action">
                <NavLink>
                  <span>View</span>
                </NavLink>
                <NavLink>
                  <span>Edit</span>
                </NavLink>
                <NavLink>
                  <span>Delete</span>
                </NavLink>
              </td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </UserDiv>
  );
};

const Tr = styled.tr`
  text-align: left;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #afacac;
  gap: 10px;

  td,
  th {
    width: 100px;
    padding: 5px 0px;
  }

  .action {
    display: flex;
    gap: 7px;
  }

  .serialNumber {
    width: 25px;
  }
`;

const Td = styled.td`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${(props) => props.color};
`;

const Table = styled.table`
  width: 100%;
`;

const OrderStyle = styled.div`
  box-shadow: 0px 0px 5px 0px #c4bfbf;
  padding: 1rem 0rem;
  /* max-width: max-content; */
  width: 100%;
`;

export default SellersProducts;
