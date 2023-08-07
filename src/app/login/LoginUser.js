import Link from "next/link";
import React, { useState } from "react";
import axios from "axios"; // Asegúrate de importar axios

export const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      // Aquí deberías manejar el token de autenticación
      // Por ejemplo, si tienes una función setToken en un contexto global:
      // setToken(response.data.token);
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="max-w-[280px] mx-auto">
        <div className="flex flex-col items-center mt-[10vh]">
          <h2 className="mb-5 text-gray-900  font-bold text-xl">
            Iniciar Sesión
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
            >
              Iniciar Sesión
            </button>
          </form>
          <p className="text-center mt-3 text-[14px]">
            ¿No tienes cuenta? <br />
            <Link href="/register" className="text-gray-600">
              Crea una
            </Link>
          </p>
          <p className="text-center mt-3 text-[14px]">
            Al continuar confirmas que aceptas los términos y las politicas de
            privacidad
            <br />
            <Link href="/" className="text-gray-600">
              Termis of Service
            </Link>{" "}
            and{" "}
            <Link href="/" className="text-gray-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};