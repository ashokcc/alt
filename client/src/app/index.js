import React from "react";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../store/reducers";
import rootSaga from "../store/sagas";
import Routes from "../routes";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f3f9fe",
    },
    secondary: {
      main: "#00aeef",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "20px",
      },
    },
  },
  MuiTextField: {
    root: {
      marginBottom: 10,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};
