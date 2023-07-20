import { useNavigate } from "react-router-dom";

const Card = ({ id, name, description, lightspeed, state, skin }) => {
  const handleSeeShip = () => {
    navigate(`/ship/${id}`);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-800/75 to-indigo-950/75 text-white rounded-3xl p-8 pb-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
        <div className="flex flex-wrap justify-center items-center">
          <h1 className="font-bold text-xl">{name}</h1>
        </div>
        <br />
        <div className="flex justify-center">
          <img
            className="rounded-lg border w-60 h-60 object-cover border-amber-500"
            src={skin}
            alt="spaceship"
          />
        </div>
        <div className="flex justify-center items-center pt-8">
        <button
          onClick={handleSeeShip}
          value={id}
          className="rounded-full text-white bg-slate-700 pt-2 pb-2 pl-5 pr-5 hover:scale-110"
          type="button"
        >
          Regarder
        </button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Card;
