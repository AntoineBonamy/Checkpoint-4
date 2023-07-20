import axios from "axios";
import IsRegisteredPopUp from "../03.Components/Pop-Up/IsRegisteredPopUp";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    axios
        .post("http://localhost:5026/api/register", {name, email, password})
        .then(() => {
            console.log("Success");
            setIsRegistered(true);
        })
        .catch((err) => console.error(err))
  }

  return (
    <div className="bg-landingBg h-screen">
        {isRegistered ? <IsRegisteredPopUp /> : null}
      <div className="flex justify-center items-center p-10 text-white">
        <div className="bg-slate-500/50 rounded-3xl p-10">
          <h1 className="text-4xl font-bold text-center">
            Veuillez vous enregistrer dans la base de données
          </h1>
          <br />
          <form className="text-2xl" onSubmit={handleRegister}>
            <label className="block" htmlFor="name">
              Nom
            </label>
            <input
              className="text-xl text-black w-full p-2 rounded-full"
              required
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="text-xl text-black w-full p-2 rounded-full"
              required
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label className="block" htmlFor="password">
              {" "}
              Mot de passe
            </label>
            <input
              className="text-xl text-black w-full p-2 rounded-full"
              id="password"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <div className="flex justify-center">
              <button
                className="rounded-full bg-slate-700 py-2 px-5 hover:scale-110"
                type="submit"
              >
                S'enregistrer
              </button>
              <br />
            </div>
            <br />
          </form>
          <div className="flex justify-center">
                <NavLink to="/">
                <button className="cursor-pointer">Retour</button>
                </NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
