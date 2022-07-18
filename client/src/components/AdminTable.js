import React, { useState, useEffect } from "react";
import { Table } from "../styles/dashboard/dashboard.styled";

function AdminTable() {
  const [allData, setAllData] = useState([]);

  //  UseEffect and fetching data
  useEffect(() => {
    fetch("/members")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("an error occurred");
        }
      })
      .then((data) => {
        console.log("Data:", data);
        setAllData(data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }, []);
  return (
    <>
      <Table>
        <thead>
          <td>Customer ID</td>
          <td>Customer Name</td>
          <td>Customer Phone</td>
          <td>Customer Address</td>
        </thead>

        {allData.map((member) => {
          return (
            <tbody>
              <td></td>
              <td>some name</td>
              <td>some phone</td>
              <td>some address</td>
            </tbody>
          );
        })}
      </Table>
    </>
  );
}

export default AdminTable;
