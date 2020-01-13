import React from 'react';
import styled from 'styled-components';

import TaskHeader from '../TaskHeader';
import StringConst from '../../../../constant/StringConst';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Result = styled.div`
  margin: 20px 0;
  font-weight: 500;
`;

const evaluateResult = () => {
  const maxMultiple = 1000;

  const firstMultiplier = 3;
  const secondMultiplier = 5;

  let sumOfMultiples = 0;

  for (let i = 0; i < maxMultiple; i++) {
    if ((i % firstMultiplier == 0) || (i % secondMultiplier == 0)) {
      sumOfMultiples += i;
    }
  }

  return sumOfMultiples;
};

const Task1 = () => {
  return (
    <Root>
      <TaskHeader
        id={1}
        title="Multiples of 3 and 5"
        solvedBy={909597}
        rating={5}
        description={StringConst.TASK_DESCRIPTIONS.TASK_1}
        date={new Date('2020-01-10')}
      />

      <Result>Result: {evaluateResult()}</Result>
    </Root>
  );
};

export default Task1;
