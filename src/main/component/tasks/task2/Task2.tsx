import React from 'react';
import styled from 'styled-components';

import TaskHeader from '../TaskHeader';
import StringConst from '../../../../constant/StringConst';

const Root = styled.div`
  width: 100%;
`;

const Task2 = () => {
  return (
    <Root>
      <TaskHeader
        id={2}
        title="Even Fibonacci numbers"
        solvedBy={725141}
        rating={5}
        description={StringConst.TASK_DESCRIPTIONS.TASK_2}
        date={new Date('2020-01-10')}
      />

      Task # 2
    </Root>
  );
};

export default Task2;
