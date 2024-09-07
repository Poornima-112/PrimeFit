import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"; 
import { Analytics } from "./components/Analytics";
import { AdminLayout } from "/layouts/admin_layout";
import { AdminUsers } from "./pages/admin_users";
import { AdminContacts } from "./pages/Admin_Contacts";
import { AdminUpdate } from "./pages/admin_Update";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="*" element={<Error />} />

          <Route path = "/admin" element = {<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>

        </Routes>
        <Footer /> {/* Add Footer component here */}
      </BrowserRouter>
    </>
  );
};

export default App;
