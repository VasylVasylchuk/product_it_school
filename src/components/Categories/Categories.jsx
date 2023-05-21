import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { MOCK_DATA } from "../../mock-data";
import CardProduct from "../CardProduct/CardProduct";
import { Grid } from '@mui/material';

const Categories = () => {
  const { id } = useParams();
  const products = MOCK_DATA.filter((_) => _.category === id);
  return (
    <>
      <Typography variant="h2" component="h3">
        {id}
      </Typography>
      <Grid container spacing={3}>
        {products.map((_) => (
          <Grid key={_.id} item xs={2} xl={3}>
            <CardProduct product={_} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Categories;
