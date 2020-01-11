import React from 'react';
import styled from 'styled-components';
import TaskHeader from '../TaskHeader';
import Descriptions from '../DescriptionConst';

const Root = styled.div`
  width: 100%;
`;

const Task1 = () => {
  return (
    <Root>
      <TaskHeader
        title="Multiples of 3 and 5"
        solvedBy={909597}
        rating={5}
        description={Descriptions.TASK_1}
        date={new Date('2020-01-10')}
      />

    </Root>
  );
};

export default Task1;
