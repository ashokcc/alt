import React from "react";
import { useSelector } from "react-redux";
import { Modal, Fade, Backdrop, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    minWidth: 400,
    minHeight: 400,
    padding: 15,
    position: "relative",
    backgroundColor: "#ffffff",
    outline: "none !important",
  },
}));

const ModalComponent = ({ id, handleClose, body }) => {
  const classes = useStyles();
  const { modal } = useSelector((store) => store);
  const open = modal.modals[id] || false;
  return (
    <>
      <Modal
        open={open}
        disableEnforceFocus
        disableAutoFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onClose={handleClose}
        className={classes.modal}
      >
        <Fade in={open}>
          <Box className={classes.container}>
            <div
              style={{
                position: "absolute",
                right: 12,
                top: 5,
                cursor: "pointer",
              }}
              onClick={handleClose}
            >
              X
            </div>
            {body}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalComponent;
