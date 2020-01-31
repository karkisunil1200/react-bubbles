import React, {Component} from 'react';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
};

export default PrivateRoute;
