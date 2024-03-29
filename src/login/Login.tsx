import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme as AugmentedTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { IReduxState, EReduxActionTypes } from '../reducer';
import { useSelector, useDispatch } from 'react-redux';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.stroy.sale/">
        Ваш сайт
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

const Login: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
  const state = useSelector((state: IReduxState) => state);
  const dispatch = useDispatch();

  if (state.isAuthenticated) {
    history.push('/');
  }

  const classes = useStyles();
  const [email, setEmail] = useState<string>('');
  const [isEmailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [isPasswordError, setPasswordError] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    let error = false;

    if (!email.trim()) {
      setEmailError(true);
      error = true;
    }

    if (!password.trim()) {
      setPasswordError(true);
      error = true;
    }

    if (error) {
      return;
    }

    dispatch({ type: EReduxActionTypes.LOGIN, email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход в аккаунт
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            name="email"
            autoComplete="email"
            autoFocus
            error={isEmailError}
            {...(isEmailError && { helperText: 'Обязательное поле!' })}
            onChange={e => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            error={isPasswordError}
            {...(isPasswordError && { helperText: 'Обязательное поле!' })}
            onChange={e => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
          />
          <FormControlLabel
            control={
              <Checkbox value="remember" color="primary" onChange={() => setChecked(!checked)} />
            }
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти в аккаунт
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {'Ещё нет аккаунта? Регистрация'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(Login);
