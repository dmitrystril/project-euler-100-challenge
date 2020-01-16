import React from 'react';

import TaskHeader from '../TaskHeader';
import AbstractTask from '../AbstractTask';

class Task7 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={7}
        title="10001st prime"
        solvedBy={398518}
        rating={5}
        date={new Date('2020-01-15')}
      />
    );
  };

  evaluateResult() {
    const indexOfRequiredPrimeNumber = 10001;
    let primeNumbers = [2];

    for (let i = 3; i < Number.MAX_VALUE; i += 2) {
      const iSqrt = Math.ceil(Math.sqrt(i));
      for (let k = 0; k < primeNumbers.length; k++) {
        if (i % primeNumbers[k] == 0) {
          break;
        }
        if (k == primeNumbers.length - 1 || primeNumbers[k] > iSqrt) {
          primeNumbers.push(i);
          if (primeNumbers.length == indexOfRequiredPrimeNumber) {
            return [...primeNumbers].pop();
          }
          break;
        }
      }
    }

    return NaN;
  }
};

export default Task7;
