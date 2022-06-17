import { Button, Grid, Stack, Typography } from "@mui/material";
import useStoreAPI from "../Hooks/useStoreAPI";
import ProductItem from "./ProductItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <Grid item>
        <Skeleton width={350} height={150} />
        <Skeleton width={250} height={50} />
        <Skeleton width={350} height={50} />
        <Skeleton width={150} height={50} />
      </Grid>
      <Grid item>
        <Skeleton width={350} height={150} />
        <Skeleton width={250} height={50} />
        <Skeleton width={350} height={50} />
        <Skeleton width={150} height={50} />
      </Grid>
      <Grid item>
        <Skeleton width={350} height={150} />
        <Skeleton width={250} height={50} />
        <Skeleton width={350} height={50} />
        <Skeleton width={150} height={50} />
      </Grid>
    </>
  );
};

const Products = () => {

  const [Items, loading]  = useStoreAPI();

  const Data = () => {
      console.log(Items)
      return <h1>Loaded</h1>
  }
  return (
    <Grid
      container
      py={5}
      pl={5}
      sx={{
        minHeight: "100vh",
        alignSelf: "top",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <Typography variant="h2">Products</Typography>
        <Stack direction="row" spacing={2} mt={2} sx={{ height: "5vh" }}>
          <Button
            sx={{ borderColor: "black", color: "black" }}
            variant="outlined"
          >
            Men
          </Button>
          <Button
            sx={{ borderColor: "black", color: "black" }}
            variant="outlined"
            color="success"
          >
            Women
          </Button>
          <Button
            sx={{ borderColor: "black", color: "black" }}
            variant="outlined"
            color="warning"
          >
            Jewelry
          </Button>
          <Button
            sx={{ borderColor: "black", color: "black" }}
            variant="outlined"
            color="secondary"
          >
            Accessories
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={4} mt={3}>
       { (loading) ? (
          <Loading />
        ) : <Data/>}
      </Grid>
    </Grid>
  );
};

export default Products;
