import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
`;

const ItemCaption = styled.div`
  display: flex;
  width: 30px;
  align-items: flex-end;
`;

interface TaskHeaderProps {
  title: string;
  description: string;
  solvedBy: number;
  rating: number;
  date: Date;
};

const TaskHeader: React.FC<TaskHeaderProps> = (props: TaskHeaderProps) => {
  const {
    title,
    description,
    solvedBy,
    rating,
    date,
  } = props;

  return (
    <Root>
      <Item><ItemCaption>Title: </ItemCaption>{title}</Item>
      <Item><ItemCaption>Description: </ItemCaption>{description}</Item>
      <Item><ItemCaption>Solved by: </ItemCaption>{solvedBy}</Item>
      <Item><ItemCaption>Rating: </ItemCaption>{rating}</Item>
      <Item><ItemCaption>Date: </ItemCaption>{date.toDateString()}</Item>
    </Root>
  );
};

export default TaskHeader;
