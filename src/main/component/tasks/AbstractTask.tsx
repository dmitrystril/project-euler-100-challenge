import React from 'react';
import styled from 'styled-components';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Caption = styled.div`
  margin: 20px 0 10px 0;
  font-weight: 500;
`;

const Result = styled.div`
  margin: 20px 0 0 40px;
`;

const ResultValue = styled.span`
  margin-left: 5px;
  color: #FFFFFF;
  background-color: green;
`;

const Solution = styled.div`
  width: 100%;
  margin: 0 40px;
`;

abstract class AbstractTask extends React.Component {
  abstract evaluateResult(): any;
  abstract renderHeader(): React.ReactNode;

  private renderSolution() {
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
        value={this.evaluateResult.toString()}
      />
    );
  }

  render(){
    return (
      <Root>
        {this.renderHeader()}

        <Solution>
          <Caption>Solution:</Caption>
          {this.renderSolution()}
        </Solution>

        <Result>Result:
          <ResultValue>{this.evaluateResult()}</ResultValue>
        </Result>
      </Root>
    );
  }
}

export default AbstractTask;
