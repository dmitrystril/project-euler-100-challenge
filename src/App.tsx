import React from 'react';
import styled from 'styled-components';

import Task1 from './main/component/tasks/task1/Task1';

const Root = styled.div`
  width: 100%;
`;

const App = () => (
  <Root>
    <Task1 />
  </Root>
);

export default App;
