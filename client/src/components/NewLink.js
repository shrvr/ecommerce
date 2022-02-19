import { Link } from "react-router-dom";
const NewLink = (props) => {
  return (
    <Link
      to={`${props.to}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {props.children}
    </Link>
  );
};
export default NewLink;
