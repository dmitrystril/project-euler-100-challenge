import React from 'react';

import TaskHeader from '../TaskHeader';
import AbstractTask from '../AbstractTask';

class Task12 extends AbstractTask {
  renderHeader(): React.ReactNode {
    return (
      <TaskHeader
        id={12}
        title="Highly divisible triangular number"
        solvedBy={208356}
        rating={5}
        date={new Date('2020-01-18')}
      />
    );
  };

  evaluateResult() {
    return "Not implemented yet."
  }
};

export default Task12;

