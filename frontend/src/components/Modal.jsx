import React from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

  render() {
    const {
      modal,
      toggle,
      heading,
      formElement,
      formSubmit,
      size,
      style,
      buttons
    } = this.props;

    return (
      <>
        {modal && (
          <Row className="text-center">
            <Col md="12">
              <span className="d-inline-block mb-2 mr-2">
                <Modal isOpen={modal} toggle={toggle} size={size} style={style}>
                  <ModalHeader toggle={toggle}>{heading}</ModalHeader>
                  <ModalBody>{formElement}</ModalBody>
                  {!buttons ? (
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>
                        Cancel
                      </Button>
                      <Button color="success" onClick={formSubmit}>
                        Save
                      </Button>
                    </ModalFooter>
                  ) : buttons ? (
                    <ModalFooter>
                      <Button outline onClick={toggle}>
                        Close
                      </Button>
                    </ModalFooter>
                  ) : null}
                </Modal>
              </span>
            </Col>
          </Row>
        )}
      </>
    );
  }
}

export default ModalExample;
