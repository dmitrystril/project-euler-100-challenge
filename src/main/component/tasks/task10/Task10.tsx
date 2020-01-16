import React from 'react';

import TaskHeader from '../TaskHeader';
import AbstractTask from '../AbstractTask';

class Task10 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={10}
        title="Summation of primes"
        solvedBy={309567}
        rating={5}
        date={new Date('2020-01-16')}
      />
    );
  };

  evaluateResult() {
    const limit = 2000000;
    let primeNumbers = [2];
    let sum = 2;

    for (let i = 3; i < limit; i += 2) {
      const iSqrt = Math.ceil(Math.sqrt(i));
      for (let k = 0; k < primeNumbers.length; k++) {
        if (i % primeNumbers[k] == 0) {
          break;
        }
        if (k == primeNumbers.length - 1 || primeNumbers[k] > iSqrt) {
          primeNumbers.push(i);
          sum += i;
          break;
        }
      }
    }

    return sum;
  }
};

export default Task10;
