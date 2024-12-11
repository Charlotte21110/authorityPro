import { JSX } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const Blank = (props: RouteConfigComponentProps<any>): JSX.Element | null => {
  const { route } = props;
  if (route) {
    return renderRoutes(route.routes);
  }
  return null;
};

export default Blank;
