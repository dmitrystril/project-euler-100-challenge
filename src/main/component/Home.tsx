import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import TASK_LIST from './tasks/taskList';
import SVG from '../resource/image/svg';

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
  display: flex;
  width: 100%;
  margin: 15px 0;
  justify-content: center;
`;

const OkImage = styled(ReactSVG)`
  svg {
    width: 20px;
    height: 20px;
  }
  margin-right: 10px;
`;

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
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
            <OkImage src={SVG.ok} />
            <CustomLink to={`/task/${item}`}>Task #{item}</CustomLink>
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
