import React from 'react';

import TaskHeader from '../TaskHeader';
import AbstractTask from '../AbstractTask';

class Task5 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={5}
        title="Smallest multiple"
        solvedBy={463599}
        rating={5}
        date={new Date('2020-01-15')}
      />
    );
  };

  evaluateResult() {
    const maxDivisor = 20;
    let smallestMultiple = undefined;

    let currentMultiple = 0;
    while(!smallestMultiple) {
      currentMultiple++;
      for (let i = 1; i <= maxDivisor; i++) {
        if (currentMultiple % i != 0) {
          break;
        } else if (i == maxDivisor) {
          smallestMultiple = currentMultiple;
        }
      }
    }

    return smallestMultiple;
  }
};

export default Task5;
