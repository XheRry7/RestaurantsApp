import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Features from "../../sections/user/Features";
import Floors from "../../sections/user/Floors";
import Hero from "../../sections/user/Hero";
import Footer from "../../sections/user/Footer";
import MainHeader from "../../components/header/MainHeader";
import axios from "axios";
import AdminHeader from "../../components/header/AdminHeader";
import TitleCard from "../../components/Cards/TitleCard";
import AdminFloorCards from "./adminFloorCard";

export default function AdminFloors() {
  const [usersDict, setUsersDict] = useState({});
  const [len, setLen] = useState(0);
  const [count, setCount] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/shop/getShops`)
      .then((res) => {
        setLen(res.data.data.length);
        const dict = res.data.data.reduce((acc, data) => {
          if (!acc[data["floorNumber"]]) {
            acc[data["floorNumber"]] = [data];
          } else {
            acc[data["floorNumber"]].push(data);
          }
          return acc;
        }, {});

        setUsersDict(dict);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  let floors = Object.keys(usersDict).slice(0, count);
  const viewMoreHandler = () => {
    setCount(count + count);
  };

  return (
    <>
      <AdminHeader />
      <TitleCard name={"Floors"} />
      <div class="flex items-center flex-wrap justify-center py-3">
        <a
          class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
          href=" "
          onClick={() => {
            navigate("/addfloor");
          }}
        >
          Add floor
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
      {floors.map((k) => (
        <>
          <AdminFloorCards number={k} list={usersDict[k]} len={len} />
        </>
      ))}

      <center>
        <button class="my-4 bg-indigo-500 text-white hover:bg-gray-400  font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span className="ml-2" onClick={viewMoreHandler}>
            View More
          </span>
        </button>
      </center>
      <Footer />
    </>
  );
}
