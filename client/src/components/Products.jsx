import axios from "axios";
import Product from "./Product";
import { Container } from "../styledComponents/Categories.style"; // Here used Container of Category component
import { useEffect, useState } from "react";
import { BASE_URL } from "../requestMethods";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `${BASE_URL}products/?category=${cat}` : `${BASE_URL}products/`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    filters &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(filteredProducts);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {filters
        ? filteredProducts.map((item) => (
            <Product item={item} key={item._id}></Product>
          ))
        : products.map((item) => (
            <Product item={item} key={item._id}></Product>
          ))}
    </Container>
  );
};

export default Products;
