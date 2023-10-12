import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import CardProduct from "../CardProduct/CardProduct";
import { Grid } from '@mui/material';
import { useSelector } from "react-redux";
import { getProductsByCategory } from "../../store/products/productsSelectors";
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const { categoryId } = useParams();
  const products = useSelector(getProductsByCategory(categoryId));
  const navigate = useNavigate();

  if(!products.length) {
    navigate('/NoPage');
  } 

  return (
    <>
      <Typography variant="h2" component="h3">
        {categoryId}
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid key={product.id} item xs={2} xl={3}>
            <CardProduct product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Categories;
