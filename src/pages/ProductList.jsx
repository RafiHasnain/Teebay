import { useState } from "react";
import { Button, Header, Grid } from "semantic-ui-react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      name: "Cricket Kit",
      catagories: "Sporting Goods, Outdoor",
      price: "$500",
      rent: "$100",
      rentType: "daily",
      description:
        "2016 cricket kit brand new in box. Never use bought from the shop. Professional kit. Pick up item please.",
      date: "21 August 2020",
      views: "156",
      id: 2001,
    },
    {
      name: "iPhone 13 pro max",
      catagories: "Electronics",
      price: "$1500",
      rent: "$50",
      rentType: "hourly",
      description:
        "Latest iPhone 13 pro max. Never use bought from the shop. Professional kit. Pick up item please.",
      date: "21 August 2020",
      views: "1028376421",
      id: 2002,
    },
  ]);
  return (
    <div>
      <div align='right' style={{ margin: "16px" }}>
        <Button href='/sign-in' color={"red"}>
          LOGOUT
        </Button>
      </div>
      <Grid textAlign='center'>
        <Grid.Row>
          <Grid.Column
            style={{ marginTop: "5vh" }}
            mobile={16}
            tablet={12}
            computer={6}>
            <Header as='h1'>MY PRODUCTS</Header>

            {products.map((product) => (
              <Product
                name={product.name}
                catagories={product.catagories}
                price={product.price}
                rent={product.rent}
                rentType={product.rentType}
                description={product.description}
                date={product.date}
                views={product.views}
              />
            ))}

            <div align='right' style={{ marginTop: "30px" }}>
              <Button href='/create-product' color={"violet"}>
                Add Product
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ProductList;
