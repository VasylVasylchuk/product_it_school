import { MOCK_DATA } from "../../../mock-data";
import { Link } from "react-router-dom";

const Menu = () => {
  const categories = MOCK_DATA.map(_ => _.category).filter((age, index, arr) => arr.indexOf(age) === index).sort();
  return <ul>
    {categories.map(_ => <li key={_}><Link to={`categories/${_}`}>{_}</Link></li>)}
  </ul>
}

export default Menu;