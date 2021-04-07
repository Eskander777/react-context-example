import React from "react";
import { Route, Link } from "react-router-dom";
import NestedComponent from "../NestedComponents/NestedComponent";

const RoutedComponents: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      RoutedComponents2
      <div>
        <Link to="/new/nest">Nest</Link>
      </div>
      <Route
        path="/new/nest"
        component={(props: any) => <NestedComponent {...props} />}
      />
    </React.Fragment>
  );
};

export default RoutedComponents;
