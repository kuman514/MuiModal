import React from 'react';
import styled from '@emotion/styled';
import { observer, useLocalObservable } from 'mobx-react';
import { Modal as RawModal, Box as RawBox, Typography } from '@mui/material';

const Modal = styled(RawModal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(RawBox)`
  background: #ffffff;
  height: fit-content;
  padding: 20px;
  border-radius: 10px;
`;

const ButtonRow = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  all: unset;

  padding-left: 10px;
  padding-right: 10px;

  font-size: 20px;
  height: 50px;
  border: 1px solid #20cc20;
  border-radius: 4px;
  
  cursor: pointer;

  &:hover {
    background: #20cc20;
  }
`;

function MuiModal() {
  const { isOpen, setIsOpen } = useLocalObservable(() => ({
    isOpen: false,
    setIsOpen(newIsOpen: boolean) { this.isOpen = newIsOpen; },
  }));

  const openModal = () => { setIsOpen(true); };
  const closeModal = () => { setIsOpen(false); };

  return (
    <>
      <button onClick={openModal}>
        Call out a Modal
      </button>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <ButtonRow>
            <Button onClick={closeModal}>
              Close
            </Button>
          </ButtonRow>
        </Box>
      </Modal>
    </>
  );
}

export default observer(MuiModal);
