/* eslint-disable react/no-unknown-property */

import { useRef, useState } from "react";
import Products from "./Products/Products";
import ImageSlider from "./Header/ImageSlider";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const userSearch = useRef("");
  const searchResultsDivRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(userSearch.current.value);if
    if (userSearch.current.value !== "") {
      fetch(
        `https://dummyjson.com/products/search?q=${userSearch.current.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.products); // Set the data in the state
          // console.log(data.products.length);
          searchResultsDivRef.current.focus();
        });
    }
  };
  return (
    <>
      <section className="p-6 bg-gray-800 text-gray-100">
	<div className="container grid gap-6 mx-auto text-center grid-cols-1 md:grid-cols-2 ">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16  bg-gray-900">
            <span className="block mb-2 text-violet-400">
              Get Amazing Deals
            </span>
            <h1 className="text-5xl font-extrabold text-gray-50">
              Your Faourite one are also on list
            </h1>
            <p className="my-8">
              <span className="font-medium text-gray-50">
                Search for the product
              </span>
            </p>
            <form
              onSubmit={(e) => handleSearch(e)}
              className="self-stretch space-y-3"
            >
              <div>
                <label htmlFor="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  ref={userSearch}
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full text-black rounded-md  p-3 border-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full  py-2 font-semibold rounded bg-violet-400 text-gray-900"
              >
                Search
              </button>
            </form>
          </div>
        <ImageSlider />
          
        </div>

        {/* <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
          /> */}

        {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
        {/* {searchResults.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white">Search Results:</h2>
            <ul className="list-disc list-inside text-gray-300">
              {searchResults.map((result) => (
                <li key={result.id}>{result.title}</li>
              ))}
            </ul>
          </div>
        )} */}
      </section>
      <div
        ref={searchResultsDivRef}
        tabIndex={0} // Make the div focusable
        className="grid grid-cols-1 z-20 md:grid-cols-3 lg:grid-cols-3 bg-purple-100 "
      >
        {searchResults.length === 0 ? (
          ""
        ) : (
          <Products products={searchResults} />
        )}
      </div>
    </>
  );
};

export default Home;
