import React from 'react';

import AbstractTask from '../AbstractTask';
import TaskHeader from '../TaskHeader';

class Task1 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
          id={1}
          title="Multiples of 3 and 5"
          solvedBy={909597}
          rating={5}
          date={new Date('2020-01-10')}
        />
    );
  };

  evaluateResult(): any {
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
};

export default Task1;
