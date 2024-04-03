const LogIn: React.FC = () => {
  const CLIENT_ID = "8f70713120c44e6b97c86a195f843af0";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div
      id="login"
      className="bg-black flex justify-center w-full h-full fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10"
    >
      <div className="w-full max-w-[500px] flex flex-col items-center bg-[#ffffff] py-[18px] px-6 rounded-lg fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-20">
        <div className="flex items-center justify-center gap-2 mb-4 pb-4 text-3xl text-black w-full border-b-2">
          <h2>Spotify</h2>
        </div>
        <p className="text-2xl text-[#444444]">Authorize</p>
        <p className="mt-4 mb-7 text-xl text-center text-[#444444]">
          Welcome to the Spotify authorization page. Please click the "Log in"
          button below to authorize access to your Spotify account. By doing so,
          you'll be able to enjoy all the features of our application. Thank you
          for choosing Spotify!
        </p>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          className="w-full"
        >
          <button className="bg-[#19b45c] py-4 w-full rounded-lg text-xl uppercase text-white font-bold">
            Log in
          </button>
        </a>
      </div>
    </div>
  );
};

export default LogIn;
