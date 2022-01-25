import React from 'react';
import { Switch } from 'react-router-dom';

import * as Pages from '../pages';


export default (
    <Switch>
        { Object.values(Pages) }
    </Switch>
);
