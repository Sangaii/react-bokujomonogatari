import React from 'react';
import { withRouter } from 'react-router';

const Outside = (props) => {
 return <div key={props.location.key}>888888</div>;
};

export default withRouter(Outside);
