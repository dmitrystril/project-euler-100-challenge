import React from 'react';

import TaskHeader from '../TaskHeader';
import AbstractTask from '../AbstractTask';

class Task3 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={3}
        title="Largest prime factor"
        solvedBy={518563}
        rating={5}
        date={new Date('2020-01-14')}
      />
    );
  };

  evaluateResult() {
    const dividend = 600851475143;
    const dividendSqrt = Math.floor(Math.sqrt(dividend));

    let maxPrimeFactor = 1;

    const isNumberPrime = (value: number) => {
      const valueSqrt = Math.floor(Math.sqrt(value));
      for (let i = 2; i < valueSqrt; i++) {
        if (value % i == 0) {
          return false;
        }
      }

      return true;
    }

    for (let i = dividendSqrt; i > 0; i--) {
      if ((dividend % i == 0) && isNumberPrime(i)) {
        maxPrimeFactor = i;
        break;
      }
    }

    return maxPrimeFactor;
  }
};

export default Task3;
