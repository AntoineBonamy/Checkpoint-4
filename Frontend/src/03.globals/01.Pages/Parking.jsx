import { useState } from "react";
import Navbar from "../03.Components/Navbar";
import axios from "axios";

const Parking = () => {
    const [name, setName] = useState("");
    const [state, setState] = useState("Bon état");
    const [description, setDescription] = useState("Un vaisseau sur");
    const skin = "https://i-mom.unimedias.fr/2020/09/16/navette-spatiale-en-papier.jpg?auto=format,compress&cs=tinysrgb";


    const handlePark = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:5026/api/spaceship/create", { name, state, description, skin })
            .then((res) => console.log(res))
            .catch((err) => console.error(err))

    }
    return <div className="bg-parkingBg h-screen w-full text-white">
        <Navbar />
        <h1 className="text-4xl font-bold text-center">Venez garer votre vaisseau spatial dans notre superbe garage !</h1>
        <br />
        <br />
        <div className="flex justify-center">
        <div className="">
        <form className="text-2xl" action="" onSubmit={handlePark}>
            <label className="block" htmlFor="name">Quel est le modèle de votre vaisseau ?</label>
            <input id="name" className="text-black" type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label className="block" htmlFor="state">Dans quel état est-il ?</label>
            <input id="state" className="text-black" type="text" onChange={(e) => setState(e.target.value)} />
            <br />
            <br />
            <label className="block" htmlFor="description">Pouvez-vos nous donner un rapide descrptif de votre engin ?</label>
            <input id="description" className="text-black" type="text"  onChange={(e) => setDescription(e.target.value)}/>
            <br />
            <br />
            <label className="block" htmlFor="lightspeed">Peut-il voyager à la vitesse de la lumière ?</label>
            <br />
            <div className="flex justify-center">
            <button className="rounded-full bg-slate-700 pt-2 pb-2 pl-5 pr-5 hover:scale-110" type="submit">Se Garer</button>
            </div>
        </form>
        </div>
        </div>
        

    </div>
}

export default Parking;
