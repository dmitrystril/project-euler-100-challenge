import React from 'react';

import TaskHeader from '../TaskHeader';
import StringConst from '../../../../constant/StringConst';
import AbstractTask from '../AbstractTask';

class Task2 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={2}
        title="Even Fibonacci numbers"
        solvedBy={725141}
        rating={5}
        description={StringConst.TASK_DESCRIPTIONS.TASK_2}
        date={new Date('2020-01-10')}
      />
    );
  };

  evaluateResult() {
    const limit = 4000000;
    let firstNumber = 1;
    let secondNumber = 2;

    let sumOfEvenNumbers = 0;
    while (secondNumber < limit) {
      if (secondNumber % 2 == 0) {
        sumOfEvenNumbers += secondNumber;
      }

      const nextNumber = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = nextNumber;
    }

    return sumOfEvenNumbers;
  }
};

export default Task2;
