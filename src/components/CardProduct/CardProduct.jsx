import { Typography } from "@mui/material";
import "./CardProduct.css";

const CardProduct = ({ product: { image, title, price } }) => {
  return (
    <div className="card-product">
      <img src={image} alt="" srcSet={image} />
      <Typography variant="h5" component="h6">
        {title}
      </Typography>
      <Typography variant="h4" component="h5">
        {price}
      </Typography>
    </div>
  );
};

export default CardProduct;
