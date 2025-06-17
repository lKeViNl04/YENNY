import { Routes, Route } from "react-router-dom";

import AdminWelcome from "../components/Admin/AdminWelcome";
import AdminUsers from "../components/Admin/AdminUsers";
import AdminProducts from "../components/Admin/AdminProducts";
import AdminSidebar from "../components/Admin/AdminSidebar";
import E404 from "./Error";

export default function Admin() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ps-12">
        <Routes>
          <Route index element={<AdminWelcome />} />
          <Route path="/user" element={<AdminUsers />} />
          <Route path="/product" element={<AdminProducts />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </main>
    </div>
  );
}
