import React from "react";
import IndexLayout from "../../layout/IndexLayout";
import LeftMenuBar from "../../components/gameBar/LeftMenuBar"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { homeRouter } from '@/router/homeRouter';

const Index = (props) => {
  return (
   <IndexLayout>
    123
    <div key={props.location.key}>
     <BrowserRouter>
      <Switch>
       {homeRouter.map((item) => {
        return (
         <Route
          component={item.component}
          key={item.key}
          exact={item.exact}
          path={item.path}
         />
        );
       })}
      </Switch>
     </BrowserRouter>
    </div>
   </IndexLayout>
  );
};

export default Index;
