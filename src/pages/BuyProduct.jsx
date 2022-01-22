import React from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

function BuyProduct() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color={"violet"}>Buy</Button>}>
      <Modal.Header>Are you sure you want to buy this product?</Modal.Header>
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

export default BuyProduct;
