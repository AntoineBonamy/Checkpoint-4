import { useNavigate } from "react-router-dom";

const Card = ({ id, name, description, lightspeed, state, skin }) => {

    const handleSeeShip = () => {
        navigate(`/ship/${id}`)
    }

    const navigate = useNavigate();
    return <div>
        <div className="max-w-sm min-h-[540px] bg-gradient-to-r from-sky-800 to-indigo-950 rounded-3xl p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
            <div className="flex flex-wrap justify-between items-end h-full">
            <h1 className="font-bold text-xl">{name}</h1>
            <button onClick={handleSeeShip} value={id} className="rounded-full text-white bg-slate-700 pt-2 pb-2 pl-5 pr-5 hover:scale-110" type="button">Regarder</button>
            </div>
            <br />
            <p>Etat : {state}</p>
            <br />
            <img className="rounded-lg border border-amber-500" src={skin} alt="spaceship" />
            <br />
            <p><span className="font-bold">Description</span> : {description}</p>
            <br />
            <p><span className="font-bold">Vitesse Lumière</span> : {lightspeed ? "Oui" : "Non"}</p>
            <br />

        </div>
    </div>
}

export default Card;