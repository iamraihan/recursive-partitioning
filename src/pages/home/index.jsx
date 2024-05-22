import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-screen justify-center flex-col gap-5">
      <h2 className="capitalize text-2xl mb-5 font-semibold">
        Please Click those button to redirect individual tasks
      </h2>
      <button
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-14"
        onClick={() => navigate("/recursive-partitioning")}
      >
        Recursive Partitioning
      </button>
      <button
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-14"
        onClick={() => navigate("/alphabetical-interaction")}
      >
        Alphabet Tile Infraction
      </button>
    </div>
  );
};

export default Home;
