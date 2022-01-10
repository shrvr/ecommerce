import { popularProducts } from "../data";
import Product from "./Product";
import { Container } from "../styledComponents/Categories.style"; // Here used Container of Category component

const Products = () => {
  return (
    <Container style={{ flexWrap: "wrap" }}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
