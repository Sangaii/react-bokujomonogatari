import React from 'react';
import { withRouter } from "react-router";

const Home = (props) => {
  console.log(props);
 return <div key={props.location.key}>123456789</div>;
};

export default withRouter(Home);
