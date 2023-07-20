import { NavLink } from "react-router-dom";

const IsRegisteredPopUp = () => {
  return (
    <div className="w-screen h-screen z-50 bg-slate-500/50">
        <div className="flex justify-center items-center h-screen">
        <div className="bg-gradient-to-r from-sky-800/75 to-indigo-950/75 rounded-xl p-10 text-white">
        <p className="text-xl">
          Vos données ont été sauvegardées dans la base de données avec succès.
          
        </p>
        <p className="text-xl">Veuillez entrer dans la garage pour la suite.</p>
        <br />
        <div className="flex justify-center">
          <NavLink to="/garage">
            <button className="rounded-full bg-slate-700 py-2 px-5 hover:scale-110">
              Retourner au garage
            </button>
          </NavLink>
        </div>
      </div>
        </div>
      
    </div>
  );
};

export default IsRegisteredPopUp;
