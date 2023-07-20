import { NavLink } from "react-router-dom";

const ParkedShipPopUp = () => {
    return <div className="w-screen h-screen z-50 bg-slate-500/50">
        <div className="absolute top-1/3 left-1/3 bg-gradient-to-r from-sky-800/75 to-indigo-950/75 rounded-xl p-10">
            <p className="text-xl">Félicitations, vous avez réussi à vous garer avec succès !</p>
            <br />
            <div className="flex justify-center">
                <NavLink to="/garage">
                <button className="rounded-full bg-slate-700 py-2 px-5 hover:scale-110">retourner au garage</button>
                </NavLink>
            </div>

        </div>

    </div>
}

export default ParkedShipPopUp;
