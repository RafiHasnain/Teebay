import { Button, Header, Grid, Form } from "semantic-ui-react";

const SignIn = () => {
  return (
    <Grid textAlign='center'>
      <Grid.Row>
        <Grid.Column
          style={{ marginTop: "20vh" }}
          mobile={16}
          tablet={8}
          computer={4}>
          <Header as='h1'>SIGN IN</Header>
          <div
            style={{
              marginTop: "20px",
              border: "1px solid grey",
              padding: "100px",
            }}>
            <div style={{ marginTop: "16px" }}>
              <div style={{ marginTop: "16px" }}>
                <Form>
                  <Form.Field>
                    <input placeholder='Email' />
                  </Form.Field>
                </Form>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Form>
                  <Form.Field>
                    <input placeholder='Password' />
                  </Form.Field>
                </Form>
              </div>
              <div style={{ marginTop: "50px" }}>
                <Button href='/product-list' color={"violet"}>
                  LOGIN
                </Button>
              </div>
              <div style={{ marginTop: "16px" }}>
                Don't have an account? <a href='/sign-up'>Signup</a>
              </div>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SignIn;
