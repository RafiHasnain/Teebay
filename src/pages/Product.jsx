import { Button, Header, Grid, Form, Item, Icon } from "semantic-ui-react";
import DeleteProduct from "./DeleteProduct";
import CreateProduct from "./CreateProduct";

const Product = ({
  name,
  catagories,
  price,
  rent,
  rentType,
  description,
  date,
  views,
}) => {
  return (
    <Button
      href='/create-product'
      style={{ background: "none", padding: "0", color: "black" }}>
      <Grid textAlign='left'>
        <Grid.Row>
          <Grid.Column style={{ marginTop: "0vh" }}>
            <div
              style={{
                marginTop: "20px",
                border: "1px solid grey",
                padding: "30px",
              }}>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: "100vh",
                        margin: "0 auto",
                        paddingBottom: "16px",
                      }}>
                      <Item.Header
                        style={{
                          color: "black",
                          fontSize: "20px",
                        }}
                        as='a'>
                        {name}
                      </Item.Header>
                      <DeleteProduct />
                    </div>
                    <Item.Meta style={{ padding: "5px 0px 5px 0px" }}>
                      Catagories: {catagories}
                    </Item.Meta>
                    <Item.Meta style={{ padding: "5px 0px 5px 0px" }}>
                      Price: {price} | Rent: {rent}&nbsp;
                      {rentType}
                    </Item.Meta>
                    <Item.Description style={{ padding: "5px 0px 5px 0px" }}>
                      {description}
                    </Item.Description>
                    <div
                      style={{
                        paddingTop: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: "100vh",
                        margin: "0 auto",
                      }}>
                      <Item.Extra>Date posted: {date}</Item.Extra>
                      <span style={{ color: "grey", paddingTop: "7px" }}>
                        {views}&nbsp;views
                      </span>
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Button>
  );
};

export default Product;
