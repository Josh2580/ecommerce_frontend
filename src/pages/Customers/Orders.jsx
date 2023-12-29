import React from "react";
import { orderProduct } from "../../source/ProductSource";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { AccountMainHeader } from "./AccountHeader";
import { AccHeader, UserDiv } from "./UsersDashboard";
import { FaSpinner, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Orders = () => {
  return (
    <UserDiv>
      <AccHeader>
        <AccountMainHeader />
      </AccHeader>
      <Table>
        <thead>
          <Tr>
            <th className="serialNumber">S/N</th>
            <th>OrderId</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </Tr>
        </thead>
        <tbody>
          {orderProduct.map((data, i) => (
            <Tr key={i}>
              <td className="serialNumber">{i + 1}</td>
              <td>{data.orderId}</td>
              <td>{data.price}</td>
              <Td
                color={
                  data.status === "completed"
                    ? "green"
                    : "pending"
                    ? "goldenrod"
                    : "failed"
                    ? "red"
                    : "none"
                }
                // color={data.status === "completed" ? "green" : "none"}
                // color={data.status === "pending" ? "goldenrod" : "none"}

                // color="green"
              >
                {" "}
                {data.status === "completed" && <FaCheckCircle />}
                {data.status === "failed" && <FaTimesCircle />}{" "}
                {data.status === "pending" && <FaSpinner />} {data.status}
              </Td>
              {/* <td>{data.action}</td> */}
              <td className="action">
                <NavLink>
                  <span>Delete</span>
                </NavLink>

                <NavLink>
                  <span>Action</span>
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

export default Orders;
