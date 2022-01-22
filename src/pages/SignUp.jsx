import { Button, Header, Grid, Form } from "semantic-ui-react";

const SignUp = () => {
  return (
    <Grid textAlign='center'>
      <Grid.Row>
        <Grid.Column
          style={{ marginTop: "20vh" }}
          mobile={16}
          tablet={12}
          computer={6}>
          <Header as='h1'>SIGN UP</Header>
          <div
            style={{
              marginTop: "20px",
              border: "1px solid grey",
              padding: "100px",
            }}>
            <div style={{ marginTop: "16px" }}>
              <div style={{ marginTop: "16px" }}>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                      <input placeholder='Last Name' />
                    </Form.Field>
                  </Form.Group>
                </Form>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Form>
                  <Form.Field>
                    <input placeholder='Address' />
                  </Form.Field>
                </Form>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Field>
                      <input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                      <input placeholder='Phone' />
                    </Form.Field>
                  </Form.Group>
                </Form>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Form>
                  <Form.Field>
                    <input placeholder='Password' />
                  </Form.Field>
                </Form>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Form>
                  <Form.Field>
                    <input placeholder='Confirm Password' />
                  </Form.Field>
                </Form>
              </div>
              <div style={{ marginTop: "50px" }}>
                <Button href='/product-list' color={"violet"}>
                  REGISTER
                </Button>
              </div>
              <div style={{ marginTop: "16px" }}>
                Don't have an account? <a href='/sign-in'>Sign In</a>
              </div>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SignUp;
