import { useState, useRef } from "react";
import Navbar from "../03.Components/Navbar";
import axios from "axios";
import ParkedShipPopUp from "../03.Components/Pop-Up/ParkedShipPopUp";

const Parking = () => {
    const [name, setName] = useState("");
    const [state, setState] = useState("Bon état");
    const [description, setDescription] = useState("Un vaisseau sur");
    const [lightspeed, setLightspeed] = useState(0);
    const [skin, setSkin] = useState("https://i-mom.unimedias.fr/2020/09/16/navette-spatiale-en-papier.jpg?auto=format,compress&cs=tinysrgb");

    // upload skin ship
    const form = useRef();
    const inputRef = useRef();

    const handleSkinShip = (event) => {
        const formData = new FormData();
        formData.append("skin", inputRef.current.files[0]);

        const file = event.target.files[0]

        axios.post("http://localhost:5026/api/uploadskin", formData);
        setSkin(`http://localhost:5173/src/01.assets/img/${file.name}`)
    }

    // init popup
    const [parked, setParked] = useState(false);

    const handlePark = (e) => {
        e.preventDefault();
        parseInt(lightspeed, 10);

        axios
            .post("http://localhost:5026/api/spaceship/create", { name, state, description, skin, lightspeed })
            .then(() => setParked(true))
            .catch((err) => console.error(err))

    }
    return <div className="bg-parkingBg h-screen w-full text-white">
        {parked && <ParkedShipPopUp />}
        <Navbar />
        <br />
        <h1 className="text-4xl font-bold text-center">Venez garer votre vaisseau spatial dans notre superbe garage !</h1>
        <br />
        <br />
        <div className="flex justify-around">
            <div className="bg-slate-500/50 rounded-lg p-5">
                <label className="text-2xl cursor-pointer rounded-full bg-slate-700 py-2 px-5 hover:scale-110 w-full" htmlFor="skinShip">Ajouter une image</label>
                <input id="skinShip" className="hidden" onChange={handleSkinShip} ref={inputRef} type="file" />
                <br />
                <br />
                <img  className="w-96 h-96 object-cover border rounded-3xl border-amber-500" src={skin && skin} alt="" />
            </div>
        <div className="bg-slate-500/50 rounded-lg p-5">
        <form className="text-2xl" action="" onSubmit={handlePark}>
            <label className="block" htmlFor="name">Quel est le modèle de votre vaisseau ?</label>
            <input id="name" className="text-black rounded-full text-xl px-2 py-1" placeholder="TARDIS" type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label className="block" htmlFor="state">Dans quel état est-il ?</label>
            <input id="state" className="text-black rounded-full text-xl px-2 py-1" placeholder="Parfait état" type="text" onChange={(e) => setState(e.target.value)} />
            <br />
            <br />
            <label className="block" htmlFor="description">Pouvez-vos nous donner un rapide descriptif de votre engin ?</label>
            <input id="description" className="text-black rounded-full text-xl px-2 py-1" placeholder="C'est plus grand à l'intérieur" type="text"  onChange={(e) => setDescription(e.target.value)}/>
            <br />
            <br />
            <label className="block" htmlFor="lightspeed">Peut-il voyager à la vitesse de la lumière ?</label>
            <select className="text-black text-lg px-2 py-1 rounded-full" name="" id="lightspeed" onChange={(e) => setLightspeed(e.target.value)}>
                <option value="0">Non</option>
                <option value="1">Oui</option>
            </select>
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
