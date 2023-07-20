import { NavLink, useNavigate, useParams } from "react-router-dom";
import Navbar from "../03.Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Ship = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [onEdit, setOnEdit] = useState(false);

  const navigate = useNavigate();

  // State du update
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [skin, setSkin] = useState("");
  const [description, setDescription] = useState("");
  const [lightspeed, setLightspeed] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5026/api/spaceship/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[0]);
        setName(res[0].name);
        setState(res[0].state);
        setSkin(res[0].skin);
        setDescription(res[0].description);
        setLightspeed(res[0].lightspeed);
      })
      .catch((err) => console.error("Erreur au get by id : ", err));
  }, [onEdit]);

  const handleUpdate = () => {
    setOnEdit(true);
  };

  const handleValidateUpdate = () => {
    parseInt(lightspeed, 10);

    if (name || state || skin || description || lightspeed) {
      axios
        .put(`http://localhost:5026/api/spaceship/update/${id}`, {
          name,
          description,
          lightspeed,
          state,
          skin,
        })
        .then((res) => console.log("success", res))
        .catch((err) => console.error("Error updating the ship", err));
    }
    setOnEdit(false);
  };

  const handleDelete = () => {
    axios
        .delete(`http://localhost:5026/api/spaceship/delete/${id}`)
        .then((res) => {
            console.log("Success deleting the ship", res)
            navigate("/garage")
        })
        .catch((err) => console.error("Error deleting the ship", err))
  };

  return (
    <div>
      <Navbar />
      <div className="bg-mainBg bg-cover bg-no-repeat text-white flex flex-wrap justify-center items-center gap-10 pt-10 pb-10">
        <div>
          {onEdit ? (
            <div className="h-full w-full m-10 flex justify-center">
              {data && (
                <div className="w-4/5 h-4/5 bg-gradient-to-r from-sky-800/75 to-indigo-950/75 rounded-3xl p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
                  <input
                    className="w-full p-2 text-center text-3xl font-bold rounded-full text-black"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder={data.name}
                  />
                  <br />
                  <br />
                  <p className="text-xl">
                    <span className="font-bold">Etat</span> :{" "}
                    <input
                      className=" p-1 text-center text-xl rounded-full text-black"
                      onChange={(e) => setState(e.target.value)}
                      type="text"
                      placeholder={data.state}
                    />
                  </p>
                  <br />
                  <div className="flex justify-center">
                    <img
                      className="rounded-lg border border-amber-500"
                      src={data.skin}
                      alt=""
                    />
                  </div>
                  <br />
                  <p className="text-xl">
                    <span className="font-bold">Description</span> :
                    <input
                      className="w-full p-1 text-center text-xl rounded-full text-black"
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      placeholder={data.description}
                    />
                  </p>
                  <br />
                  <p className="text-xl">
                    <span className="font-bold">Vitesse Lumière</span> :
                    <select
                      onChange={(e) => setLightspeed(e.target.value)}
                      className="ml-3 text-black"
                      name="lightspeed"
                      id=""
                    >
                      <option value="0">Non</option>
                      <option value="1">Oui</option>
                    </select>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full w-full m-10 flex justify-center">
              {data && (
                <div className="w-4/5 h-4/5 bg-gradient-to-r from-sky-800/75 to-indigo-950/75 rounded-3xl p-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
                  <h1 className="font-bold text-3xl text-center">
                    {data.name}
                  </h1>
                  <br />
                  <p className="text-xl">
                    <span className="font-bold">Etat</span> : {data.state}
                  </p>
                  <br />
                  <div className="flex justify-center">
                    <img
                      className="rounded-lg border border-amber-500"
                      src={data.skin}
                      alt=""
                    />
                  </div>
                  <br />
                  <p className="text-xl">
                    <span className="font-bold">Description</span> :{" "}
                    {data.description}
                  </p>
                  <br />
                  <p className="text-xl">
                    <span className="font-bold">Vitesse Lumière</span> :{" "}
                    {data.lightspeed ? "Oui" : "Non"}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-center gap-10 mb-5">
          {onEdit ? (
            <button
              onClick={() => {handleValidateUpdate()}}
              className="rounded-full text-white bg-slate-700 pt-2 pb-2 pl-5 pr-5 hover:scale-110"
            >
              Sauvegarder
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="rounded-full text-white bg-slate-700 pt-2 pb-2 pl-5 pr-5 hover:scale-110"
            >
              Modifier
            </button>
          )}
          <button onClick={() => handleDelete()} className="rounded-full text-white bg-slate-700 pt-2 pb-2 pl-5 pr-5 hover:scale-110">
            Supprimer
          </button>
          <NavLink to="/garage" >
            <button className="rounded-full text-white bg-slate-700 pt-2 pb-2 pl-5 pr-5 hover:scale-110" type="button">Retour</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Ship;
