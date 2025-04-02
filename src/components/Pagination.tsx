import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePaginationState } from "../redux/paginationSlice/paginationSlice.redux";

export const Pagination = () => {
  const [numbersOfPages, setNumbersOfPages] = useState<number[]>([1, 2, 3]);
  const dispatch = useDispatch();
  let activeList = {
    textDecoration: "underline",
  };

  const handleAddingNumbersOfPages = () => {
    const newArray = numbersOfPages.map((number) => number + 1);
    setNumbersOfPages(newArray);
  };
  const handleSubtractingNumbersOfPages = () => {
    if (numbersOfPages[0] === 1) return;
    const newArray = numbersOfPages.map((number) => number - 1);
    setNumbersOfPages(newArray);
  };
  const handleDipstachPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo(0, 0);
    const parseToIntPage = parseInt(e.currentTarget.textContent as string);
    dispatch(updatePaginationState(parseToIntPage));
  };

  return (
    <nav className="w-full p-10 flex justify-center bg-[#c7f9cc]">
      <ul className="w-3/12 grid grid-cols-5 justify-center">
        <IconContext.Provider value={{ size: "1rem" }}>
          <li className="flex justify-center items-center">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeList : {})}
              onClick={handleSubtractingNumbersOfPages}
            >
              {<BiChevronsLeft />}
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeList : {})}
              onClick={(e) => handleDipstachPage(e)}
            >
              {numbersOfPages[0]}
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeList : {})}
              onClick={(e) => handleDipstachPage(e)}
            >
              {numbersOfPages[1]}
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeList : {})}
              onClick={(e) => handleDipstachPage(e)}
            >
              {numbersOfPages[2]}
            </NavLink>
          </li>
          <li className="flex justify-center items-center">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeList : {})}
              onClick={handleAddingNumbersOfPages}
            >
              {<BiChevronsRight />}
            </NavLink>
          </li>
        </IconContext.Provider>
      </ul>
    </nav>
  );
};
