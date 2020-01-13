import React from 'react';
import styled from 'styled-components';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import TaskHeader from '../TaskHeader';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Caption = styled.div`
  margin: 20px 0 10px 0;
  font-weight: 500;
`;

const Result = styled.span`
  margin-left: 5px;
  color: #FFFFFF;
  background-color: green;
`;

const Solution = styled.div`
  width: 100%;
`;

const evaluateResult = () => {
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

const getCode = () => {
  return (
    <AceEditor
      mode="javascript"
      theme="tomorrow"
      fontSize={14}
      width="100%"
      height="400px"
      setOptions={{
        showLineNumbers: true,
        tabSize: 2,
        readOnly: true,
      }}
      value={evaluateResult.toString()}
    />
  );
};

const Task1 = () => {
  return (
    <Root>
      <TaskHeader
        id={1}
        title="Multiples of 3 and 5"
        solvedBy={909597}
        rating={5}
        date={new Date('2020-01-10')}
      />

      <Solution>
        <Caption>Solution:</Caption>
        {getCode()}
      </Solution>

      <Caption>Result:
        <Result>{evaluateResult()}</Result>
      </Caption>
    </Root>
  );
};

export default Task1;
