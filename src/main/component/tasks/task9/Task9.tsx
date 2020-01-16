import React from 'react';

import TaskHeader from '../TaskHeader';
import AbstractTask from '../AbstractTask';

class Task9 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={9}
        title="Special Pythagorean triplet"
        solvedBy={338384}
        rating={5}
        date={new Date('2020-01-16')}
      />
    );
  };

  evaluateResult() {
    const findSpecificPythagoreanTripletByEuclid = () => {
      for (let n = 1; n < 1000; n++) {
        for (let m = n + 1; m < 1000; m++) {
          const a = (m ** 2) - (n ** 2);
          const b = 2 * (m * n);
          const c = (m ** 2) + (n ** 2);

          const sum = a + b + c;
          if (sum == 1000) {
            return [a, b, c];
          }
        }
      }

      return [];
    }

    const triplet = findSpecificPythagoreanTripletByEuclid();
    if (triplet.length) {
      const [a, b, c] = triplet;
      return a * b * c;
    }
  }
};

export default Task9;
