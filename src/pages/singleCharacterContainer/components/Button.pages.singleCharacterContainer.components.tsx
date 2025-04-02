import { Link } from "react-router-dom";

export const ButtonGoBack = () => {
  return (
    <div className="mt-10 p-4 md:p-0">
      <Link to="/" className="w-2/12  p-2 tracking-widest bg-[#e71d36]/70 text-white rounded">
        Go Back
      </Link>
    </div>
  );
};
