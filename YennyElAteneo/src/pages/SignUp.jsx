import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const input = ["name", "email", "password"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/users/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Usuario registrado:", response.data);
      const success = await login(formData.email, formData.password);
      if (success) {
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <div className="rounded-xl bg-gray-800/50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Create your account</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {input.map((item, index) => (
              <div key={index} className="mb-4 text-lg">
                <input
                  className="w-full rounded-3xl border-none bg-accent-green/50 hover:bg-accent-green bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type={
                    item === "password"
                      ? "password"
                      : item === "email"
                      ? "email"
                      : "text"
                  }
                  name={item}
                  aria-label={item}
                  onChange={handleChange}
                  placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                  required
                />
              </div>
            ))}

            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-amber-50/70 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-accent-blue"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
