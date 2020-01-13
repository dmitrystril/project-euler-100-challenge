import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
;
import TASK_LIST from './tasks/taskList';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 30px 0;
`;

const HashTag = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin-top: 10px;
`;

const Footer = styled.div`

`;

const TaskContainer = styled.div`
  height: calc(100% - 180px);
  overflow-y: scroll;
  min-width: 400px;
  margin-bottom: 30px;
  padding: 30px;
  border: 1px solid lightgray;
  width: 30%;
`;

const Task = styled.div`
  width: 100%;
  text-align: center;
  box-shadow: 0 1px 2px -2px blue;
  margin: 15px 0;
`;

const Home: React.FC = () => {
  const numberOfTasks = Object.keys(TASK_LIST).length;
  const taskIds = [...Array(numberOfTasks)].map((_, index) => index + 1);

  return (
    <Root>
      <Header>
        <a href="https://projecteuler.net/">Project Euler </a>Solutions
        <HashTag>
          <a href="https://twitter.com/hashtag/ProjectEuler100">#ProjectEuler100</a>
        </HashTag>
      </Header>

      <TaskContainer>
        {taskIds.map((item: number, index: number) => (
          <Task key={index}>
            <Link to={`/task/${item}`}>Task #{item}</Link>
          </Task>
        ))}
      </TaskContainer>

      <Footer>
        by <a href="https://twitter.com/dmitrystril">Dmitry Stril</a>, 2020
      </Footer>
    </Root>
  );
};

export default Home;
