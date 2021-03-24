import React, {useState} from 'react';
import {Button, Modal, Spinner} from 'react-bootstrap';
import '../../styles/components/LoadingModal.scss';

const LoadingModal = () => {
  const [smShow, setSmShow] = useState(false);
  return (
    <>
      <Button onClick={() => setSmShow(true)}>Small modal</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Spinner variant='danger' animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default LoadingModal;
