import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <img src="/Logo.png" alt="" />
      <h1 className="text-4xl font-bold text-center text-[#0B0B0BB3]">
        Error 404! Page not found!
      </h1>
      <Link to="/">
        <button className="text-2xl font-semibold text-white normal-case bg-red-600 rounded-lg btn hover:bg-red-500 px-[24px] h-[60px]">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
