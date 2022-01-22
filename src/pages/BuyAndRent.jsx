import { useState } from "react";
import { Button, Header, Grid, Form, Item, Icon } from "semantic-ui-react";
import BuyProduct from "./BuyProduct";
import RentProduct from "./RentProduct";

const BuyAndRent = () => {
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
    <Grid textAlign='center'>
      <Grid.Row>
        <Grid.Column
          style={{ marginTop: "15vh" }}
          mobile={16}
          tablet={12}
          computer={6}>
          <div
            style={{
              marginTop: "20px",
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
                    <Header as='h1'>iPhone 13 pro max</Header>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <Item.Meta style={{ padding: "5px 0px 5px 0px" }}>
                      Catagories: Electronics
                    </Item.Meta>
                    <Item.Meta style={{ padding: "5px 0px 5px 0px" }}>
                      Price: $1500
                    </Item.Meta>
                    <Item.Description style={{ padding: "5px 0px 5px 0px" }}>
                      Latest iPhone 13 pro max. Never use bought from the shop.
                      Professional kit. Pick up item please. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Sed eget ipsum ut
                      sem finibus cursus eu in arcu. Fusce a dui bibendum,
                      porttitor leo eget, ultrices sapien. Donec quis neque a
                      sapien dignissim ullamcorper. Donec non tristique massa,
                      id commodo dui. Ut velit augue, pulvinar nec nibh maximus,
                      ullamcorper convallis risus. Cras facilisis fermentum
                      odio. Donec sed porta est, eget aliquam tellus. Duis vitae
                      consectetur ligula. Aenean sapien dui, lobortis et euismod
                      in, congue vitae massa. Praesent pellentesque nec est et
                      posuere. Fusce et metus congue, accumsan orci id, bibendum
                      sapien. Cras nulla urna, aliquam quis libero ut, porta
                      sollicitudin nisi. Quisque eget pretium magna. Vestibulum
                      diam mi, dapibus quis tristique eget, suscipit id massa.
                      Vestibulum consequat accumsan dolor, at vulputate ante
                      egestas ut. Vestibulum molestie lorem sed enim vulputate,
                      eget bibendum ante convallis.
                    </Item.Description>
                    <div
                      style={{
                        paddingTop: "10vh",
                        display: "flex",
                        justifyContent: "flex-end",
                        maxWidth: "100vh",
                        margin: "0 auto",
                      }}>
                      <RentProduct />
                      <BuyProduct />
                    </div>
                  </div>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default BuyAndRent;
