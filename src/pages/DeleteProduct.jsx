import React from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

function DeleteProduct() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button style={{ background: "none", padding: "0", color: "black" }}>
          <Icon name='trash' size='large' />
        </Button>
      }>
      <Modal.Header>Are you sure you want to delete this product?</Modal.Header>
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

export default DeleteProduct;
