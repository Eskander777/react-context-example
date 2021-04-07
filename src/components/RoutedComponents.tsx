import React from "react";
import { Link, Route } from "react-router-dom";
import NestedComponent2 from "../NestedComponents/NestedComponent2";

const RoutedComponents: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      RoutedComponents2
      <div>
        <Link to="/nest2">Nest</Link>
      </div>
      <Route
        path="/nest2"
        component={(props: any) => <NestedComponent2 {...props} />}
      />
    </React.Fragment>
  );
};

export default RoutedComponents;
