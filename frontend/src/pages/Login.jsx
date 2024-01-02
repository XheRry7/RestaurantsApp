import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [type, setType] = useState("admin");
  const handleOptionChange = (event) => setType(event.target.value);

  const login = () => {
    let jsn = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:2000/api/user/login", jsn)
      .then((res) => {
        console.log("a:::",res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("uid", res.data["id"]);
        switch (res.data["userType"]) {
          case "CUSTOMER": {
            navigate("/");
            break;
          }

          case "SHOPKEEPER": {
            navigate("/userRestaurants");
            break;
          }
          case "ADMIN": {
            navigate("/dashboard");
            break;
          }
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://img.freepik.com/free-vector/empty-vape-shop-interior-flat_1284-49641.jpg?w=740&t=st=1700812173~exp=1700812773~hmac=eded2c898dcfd6f806ea59ee084c7ddce6b33a35d15b6814aae6d76641aa5084"
                class="w-full"
                alt="hhh"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <center>
              
                <img
                  className="h-16 w-auto my-5"
                  src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-restaurant-logo-png-image_7932128.png"
                  alt="Cuisine Cloud"
                 
                />
              </center>
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="button"
                    onClick={login}
                    class="inline-block px-7 py-3 bg-[#ff6400] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-[#ff6700] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    class="inline-block px-7 ml-3 py-3 bg-[#ff6400] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-[#ff6700] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link to="/signup">
                      <a
                        href="#!"
                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        Register
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
