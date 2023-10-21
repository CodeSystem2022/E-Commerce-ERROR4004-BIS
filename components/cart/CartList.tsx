import { Typography } from "@mui/material";
import { initialData } from "../../database/products";

const { initialData } = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
return <div>CartList</div>;

export const CartList = () => {
  return (
    <>
      {productsInCart.map((product) => (
        <Typography key={product.slug}>{product.title}</Typography>
      ))}
    </>
  );
};
