import React from 'react';
import styled from 'styled-components';

import StringConst from '../../../constant/StringConst';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px;
  background-color: #F2F3F4;
  box-shadow: 0 3px 2px -2px gray;
`;

const TaskCaption = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Item = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const ItemCaption = styled.div`
  display: flex;
  min-width: 130px;
  justify-content: flex-end;
  margin-right: 10px;
  font-weight: 600;
`;

const ItemValue = styled.div`

`;

interface TaskHeaderProps {
  id: number;
  title: string;
  description: string;
  solvedBy: number;
  rating: number;
  date: Date;
};

const TaskHeader: React.FC<TaskHeaderProps> = (props: TaskHeaderProps) => {
  const {
    id,
    title,
    description,
    solvedBy,
    rating,
    date,
  } = props;

  const link = StringConst.TASK_LINK + id;

  return (
    <Root>
      <TaskCaption>Task #{id}</TaskCaption>
      <Item>
        <ItemCaption>Title:</ItemCaption>
        <ItemValue>{title}</ItemValue>
      </Item>
      <Item>
        <ItemCaption>Description:</ItemCaption>
        <ItemValue>{description}</ItemValue>
      </Item>
      <Item>
        <ItemCaption>Solved by:</ItemCaption>
        <ItemValue>{solvedBy}</ItemValue>
      </Item>
      <Item>
        <ItemCaption>Rating:</ItemCaption>
        <ItemValue>{rating}</ItemValue>
      </Item>
      <Item>
        <ItemCaption>Date:</ItemCaption>
        <ItemValue>{date.toLocaleDateString('ru-RU')}</ItemValue>
      </Item>
      <Item>
        <ItemCaption>Link:</ItemCaption>
        <ItemValue>
          <a
            href={link}
            target="_blank"
          >
            {link}
          </a>
        </ItemValue>
      </Item>
    </Root>
  );
};

export default TaskHeader;
