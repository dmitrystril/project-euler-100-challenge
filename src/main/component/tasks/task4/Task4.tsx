import React from 'react';

import TaskHeader from '../TaskHeader';
import AbstractTask from '../AbstractTask';

class Task4 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={4}
        title="Largest palindrome product"
        solvedBy={518655}
        rating={5}
        date={new Date('2020-01-14')}
      />
    );
  };

  evaluateResult() {
    const isPalindrome = (number: number) => {
      const stringValue = number.toString();
      if (stringValue.length % 2 != 0) {
        return false;
      }

      let middle = stringValue.length / 2;
      let part1 = stringValue.slice(0, middle);
      let part2 = stringValue.slice(middle);
      part2 = [...part2.split('')].reverse().join('');

      return part1 == part2;
    }

    const limit = 1000;
    let largestPalindrome = 0;
    for (let i = 1; i < limit; i++) {
      for (let k = 1; k < limit; k++) {
        const product = i * k;
        if (isPalindrome(product) && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }

    return largestPalindrome;
  }
};

export default Task4;
