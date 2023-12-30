import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./Sidebar/SideBar";
import Data from "./db/Data";
import Card from "./Components/Card";
// import Catogary from "./Sidebar/Catogary/Catogary";

function App() {
  const [selectedCatogary, setSelectedCatogary] = useState(null);

  //------input filter------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = Data.filter(
    (product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1
  );

  //------radio filter------
  const handleChange = (e) => {
    setSelectedCatogary(e.target.value);
  };

  //------button filter------
  const handleClick = (e) => {
    setSelectedCatogary(e.target.value);
  };

  function filterData(products, selected, query) {
    let filteredProduct = products;

    //filtering input item
    if (query) {
      filteredProduct = filteredItems;
    }

    //selected filter
    if (selected) {
      filteredProduct = filteredProduct.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProduct.map(
      ({ img, title, star, reviews, prePrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prePrice={prePrice}
        newPrice={newPrice}
      />
    ));
  }
 const result = filterData(Data, selectedCatogary, query)
  return (
    <>
      <SideBar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  );
}

export default App;
