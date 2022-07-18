import React from "react";
import { DashboardButtons } from "../styles/dashboard/dashboard.styled";
import { useNavigate } from "react-router-dom";

function AdminButtons() {
  const navigate = useNavigate();
  return (
    <DashboardButtons>
      <button>Orders</button>
      <button>Products</button>

      <button
        onClick={() => navigate("/dashboard-customers-list", { replace: true })}
      >
        Customers
      </button>
    </DashboardButtons>
  );
}

export default AdminButtons;
