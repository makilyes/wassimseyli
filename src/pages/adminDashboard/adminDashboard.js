import React, { useEffect } from "react";
import UserLayoutComponent from "../../components/userLayout/userLayout.component";
import AdminLayoutComponent from "../../components/adminLayout/adminLayout.component";
import { useSelector } from "react-redux";

function AdminDashboard(props) {
  return (
    <div>
      <AdminLayoutComponent />
    </div>
  );
}

export default AdminDashboard;
