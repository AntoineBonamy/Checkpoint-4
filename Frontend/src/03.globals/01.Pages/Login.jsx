import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5026/api/login", {email, password})
        .then(() => {
            navigate("/garage")
        })
        .catch((err) => console.error("Erreur de connexion", err))
    }



    return <div className="bg-mainBg h-screen">
        <div className="flex justify-center items-center p-10">
        <div className="bg-slate-500/50 rounded-3xl p-10">
            <h1 className="text-4xl font-bold text-center">Bienvenue dans la station Atomic !</h1>
            <br />
            <form className="text-2xl" onSubmit={handleLogin}>
                <label className="block" htmlFor="email">Email</label>
                <input className="text-xl w-full p-2 rounded-full" id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <label className="block" htmlFor="password"> Mot de passe</label>
                <input className="text-xl w-full p-2 rounded-full" type="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <div className="flex justify-center">
            <button className="rounded-full bg-slate-700 py-2 px-5 hover:scale-110" type="submit">Entrer dans la station</button>
            </div>
            </form>
        </div>
        </div>
    </div>
}

export default Login;
