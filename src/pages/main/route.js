import React from 'react';
import { Route } from 'react-router-dom';

import Page from './component';


export default <Route
    exact
    key="main"
    path={['/', '/home', '/main', '/index.html']}
    component={Page}
/>;
