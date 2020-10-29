import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { LOGIN_MODAL, REGISTER_MODAL } from "../constants/modals";
import ModalComponent from "../modal";
import Login from "../forms/login";
import Register from "../forms/register";
import XYAxisSpace from "../components/xyAxisSpace";
import { openModal, closeModal } from "../store/actions/modal";
import { getLoginfailure } from "../store/actions/login";
import { registerUserfailure } from "../store/actions/register";
import tokenSvc from "../services/storage";

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const { login, register } = useSelector((state) => state);
  const isUserLogged = login?.isLoggedIn || register?.email !== "";
  useEffect(() => {
    callNavigate();
  }, [isUserLogged]);

  const callNavigate = () => {
    if (isUserLogged) {
      history?.push("/dashboard");
    }
  };

  const logout = () => {
    dispatch(getLoginfailure());
    dispatch(registerUserfailure());
    tokenSvc.deleteToken("token");
    history?.push("/");
  };

  return (
    <AppBar position="sticky" style={{ height: 50, zIndex: 999 }}>
      <Toolbar style={{ minHeight: 48 }}>
        <Typography variant="h5" style={{ flex: 1 }}>
          Altimetrik
        </Typography>
        <>
          {!isUserLogged ? (
            <Button
              variant="outlined"
              onClick={() => dispatch(openModal({ id: LOGIN_MODAL }))}
            >
              SIGN IN
            </Button>
          ) : (
            ""
          )}

          <ModalComponent
            body={<Login />}
            id={LOGIN_MODAL}
            handleClose={() => dispatch(closeModal({ id: LOGIN_MODAL }))}
          />

          <ModalComponent
            body={<Register />}
            id={REGISTER_MODAL}
            handleClose={() => dispatch(closeModal({ id: REGISTER_MODAL }))}
          />
          <XYAxisSpace />

          {!isUserLogged ? (
            <Button
              variant="contained"
              onClick={() => dispatch(openModal({ id: REGISTER_MODAL }))}
            >
              SIGN UP
            </Button>
          ) : (
            ""
          )}

          {isUserLogged ? (
            <Button onClick={() => logout()}>LOG OUT</Button>
          ) : (
            ""
          )}
        </>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
