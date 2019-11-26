import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Calculation from './calculation/Calculation';
import Login from './login/Login';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import SecuredRoute from './SecuredRoute';
import { EReduxActionTypes } from './reducer';
import { useDispatch } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#2F80ED',
        },
      },
    },
  },
});

const App: React.FC = () => {
  const dispatch = useDispatch();

  window.addEventListener('storage', function({ key, newValue }) {
    if ((key === 'isAuthenticated' || !key) && !newValue) {
      dispatch({ type: EReduxActionTypes.LOGGED_OUT });
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Route exact path="/login" component={Login} />
      </ThemeProvider>
      <SecuredRoute exact path="/" component={Calculation} />
    </div>
  );
};

export default withRouter(App);
