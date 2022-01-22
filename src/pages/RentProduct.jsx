import React from "react";
import { Button, Header, Image, Modal, Icon, Input } from "semantic-ui-react";

function RentProduct() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button style={{ marginRight: "20px" }} color={"violet"}>
          Rent
        </Button>
      }>
      <Modal.Header>Rental Period</Modal.Header>
      <div
        style={{
          padding: "5vh",
          display: "flex",
          justifyContent: "center",
          maxWidth: "100vh",
          margin: "0 auto",
        }}>
        <Input
          style={{ marginRight: "20px" }}
          label='From'
          placeholder='dd/mm/yy'
        />
        <Input label='To' placeholder='dd/mm/yy' />
      </div>
      {/* <Modal.Content image>
        <Modal.Description>
          <p>Are you sure you want to delete this product?</p>
        </Modal.Description>
      </Modal.Content> */}
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          No
        </Button>
        <Button color='violet' onClick={() => setOpen(false)}>
          Yes
        </Button>
        {/* <Button
          color='violet'
          content='Yes'
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        /> */}
      </Modal.Actions>
    </Modal>
  );
}

export default RentProduct;
