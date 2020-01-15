import React from 'react';

import TaskHeader from '../TaskHeader';
import AbstractTask from '../AbstractTask';

class Task6 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={6}
        title="Sum square difference"
        solvedBy={466654}
        rating={5}
        date={new Date('2020-01-15')}
      />
    );
  };

  evaluateResult() {
    const limit = 100;

    let sumOfSquares = 0;
    let squareOfSum = 0;
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
      squareOfSum += i ** 2;
      sum += i;
    }

    sumOfSquares = sum ** 2;

    return sumOfSquares - squareOfSum;
  }
};

export default Task6;
