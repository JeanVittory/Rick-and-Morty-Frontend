import { SpinnerRoundOutlined } from "spinners-react";

export const Spinner = () => {
  return (
    <>
      <div className="bg-[#fdfcdc] w-screen h-screen flex justify-center items-center">
        {
          <SpinnerRoundOutlined
            size={50}
            thickness={100}
            speed={100}
            color="#36ad47"
          />
        }
      </div>
    </>
  );
};
