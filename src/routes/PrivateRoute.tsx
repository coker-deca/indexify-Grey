import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const { token } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign_up",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
