import { Link } from "react-router-dom";
import { figcaptionProp } from "../../../models/figcaption.models";
import { Button } from "./Button.pages.charactersContainer.components";

export const Figcaption = (props: figcaptionProp) => {
  const {id, name, status, species } = props;

  return (
    <figcaption className="w-3/4 relative flex flex-col ">
      <div className="flex flex-col mt-4 bg-[#62a4ab]/25 p-4 rounded-lg card-shadow">
        <p className="font-nunito">
          <span className="font-nunito font-semibold">Name:</span> {name}
        </p>
        <p
          className={`font-nunito dot ${
            status === "Alive"
              ? "dot-alive"
              : status !== "Dead"
              ? ""
              : "dot-dead"
          }`}
        >
          <span className="font-nunito font-semibold">Status:</span> {status}
        </p>
        <p className="font-nunito">
          <span className="font-nunito font-semibold">Species:</span>{" "}
          {species}
        </p>
        <Link to ={`character/${id}`} className="self-end w-1/2"><Button/></Link>
      </div>
    </figcaption>
  );
};
