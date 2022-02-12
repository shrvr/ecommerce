import { Link } from "react-router-dom";
import {
  Container,
  Image,
  Info,
  Title,
  Button,
} from "../styledComponents/CategoryItem.style";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
