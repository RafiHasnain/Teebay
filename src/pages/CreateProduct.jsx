import {
  Button,
  Header,
  Grid,
  Form,
  Divider,
  Dropdown,
} from "semantic-ui-react";

const categories = [
  { key: "furniture", text: "Furniture", value: "furniture" },
  { key: "homeAppliances", text: "Home Appliances", value: "homeAppliances" },
  { key: "sportingGoods", text: "Sporting Goods", value: "othsportingGoodser" },
  { key: "outdoor", text: "Outdoor", value: "outdoor" },
  { key: "toys", text: "Toys", value: "toys" },
  { key: "electronics", text: "Electronics", value: "electronics" },
];

const rentingOption = [
  { key: "perDay", text: "per day", value: "perDay" },
  { key: "perHr", text: "per hr", value: "perHr" },
];

const CreateProduct = () => {
  return (
    <Grid textAlign='center'>
      <Grid.Row>
        <Grid.Column
          style={{ marginTop: "15vh" }}
          mobile={16}
          tablet={12}
          computer={6}>
          <div style={{ textAlign: "left" }}>
            <Form>
              <h4>Title</h4>
              <Form.Field>
                <input />
              </Form.Field>
              <h4>Categories</h4>
              <Dropdown
                style={{ maxWidth: "10vw" }}
                placeholder='Select a category'
                fluid
                multiple
                selection
                options={categories}
              />
              <h4>Description</h4>
              {/* <Form.TextArea /> */}
              <input
                fluid
                size='massive'
                style={{ height: "200px" }}
                type='text'
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  maxWidth: "100vh",
                  margin: "0 auto",
                  paddingTop: "16px",
                }}>
                <Form.Field style={{ marginRight: "2vw" }}>
                  <h4>Price</h4>
                  <input style={{ maxWidth: "15vw" }} />
                </Form.Field>
                <Form.Field style={{ marginRight: "1vw" }}>
                  <h4>Rent</h4>
                  <input style={{ maxWidth: "5vw" }} />
                </Form.Field>
                <Dropdown
                  style={{
                    maxWidth: "10vw",
                    height: "10px",
                    marginTop: "33px",
                  }}
                  placeholder='Select option'
                  fluid
                  selection
                  options={rentingOption}
                />
              </div>
            </Form>
          </div>
          <div align='right' style={{ marginTop: "30px" }}>
            <Button color={"violet"}>Add Product</Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CreateProduct;
