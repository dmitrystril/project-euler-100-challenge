import React from 'react';
import styled from 'styled-components';
import { Redirect, Route } from 'react-router-dom';

import StringConst from './constant/StringConst';
import Home from './main/component/Home';
import TaskContainer from './main/component/tasks/TaskContainer';

const Root = styled.div`
  width: 100%;
`;

const App: React.FC = () => (
  <Root>
    <Route
      path={StringConst.PAGES.HOME}
      component={Home}
    />

    <Route
      exact
      path={StringConst.PAGES.TASK + '/:taskId'}
      component={TaskContainer}
    />

    <Redirect
      from="/**"
      to={StringConst.PAGES.HOME}
    />
  </Root>
);

export default App;
