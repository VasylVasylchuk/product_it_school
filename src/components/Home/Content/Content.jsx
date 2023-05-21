import { useSelector } from "react-redux";
import CardProduct from "../../CardProduct/CardProduct";
import { Grid } from '@mui/material';
import { getAllProducts } from "../../../store/products/productsSelectors";

const Content = () => {
  const products = useSelector(getAllProducts)
  return (
    <Grid container spacing={3}>
      {products.map((_) => (
        <Grid key={_.id} item xs={2} xl={3}>
          <CardProduct  product={_} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
