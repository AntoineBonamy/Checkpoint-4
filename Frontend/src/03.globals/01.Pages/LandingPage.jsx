import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-landingBg h-screen">
      <div className="absolute top-1/4 left-1/3 p-10 text-white">
        <div className="bg-slate-500/50 rounded-3xl p-10">
          <h1 className="text-4xl font-bold text-center">Atomic Parking</h1>
          <br />
          <br />
          <div className="flex justify-center">
            <NavLink to="/login">
            <button className="rounded-full bg-slate-700 py-2 px-5 hover:scale-110">Entrer</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
