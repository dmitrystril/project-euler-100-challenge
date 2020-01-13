import React from 'react';
import styled from 'styled-components';
import { PageHeader } from 'antd';

import StringConst from '../../../constant/StringConst';
import { withRouter } from 'react-router-dom';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px;
  background-color: #F2F3F4;
  box-shadow: 0 3px 2px -2px gray;
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
  solvedBy: number;
  rating: number;
  date: Date;
  history?: any;
};

const TaskHeader: React.FC<TaskHeaderProps> = (props: TaskHeaderProps) => {
  const {
    id,
    title,
    solvedBy,
    rating,
    date,
    history,
  } = props;

  const link = StringConst.TASK_LINK + id;

  return (
    <Root>
      <PageHeader
        style={{
          marginLeft: "6px",
        }}
        onBack={history.goBack}
        title={'Task #' + id}
        subTitle={title}
      />
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

export default withRouter(TaskHeader as any);
