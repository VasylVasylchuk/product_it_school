import CardProduct from "../../CardProduct/CardProduct";
import { MOCK_DATA } from "../../../mock-data";
import { Grid } from '@mui/material';

const Content = () => {
  return (
    <Grid container spacing={3}>
      {MOCK_DATA.map((_) => (
        <Grid key={_.id} item xs={2} xl={3}>
          <CardProduct  product={_} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
