import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IReduxState } from './reducer';

interface ISecuredRoute {
  component: React.ComponentType<RouteProps>;
  path?: string | string[];
  exact?: boolean;
}

const SecuredRoute = ({ component: Component, ...rest }: RouteProps) => {
  const state = useSelector((state: IReduxState) => state);
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={props =>
        state.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default SecuredRoute;
