import React from "react";
import AdminButtons from "../components/AdminButtons";
import AdminTable from "../components/AdminTable";
// import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function DashboardCustomersList() {
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
    <div>
      <AdminButtons />
      <AdminTable />
    </div>
  );
}

export default DashboardCustomersList;
