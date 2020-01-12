import React from 'react';
import { useParams } from 'react-router-dom';

import TASK_LIST from './taskList';

const TaskContainer: React.FC = (props: any) => {
  const { taskId } = useParams();

  const key = 'TASK_' + taskId;
  const SpecificTask = (TASK_LIST as any)[key];

  return (
    <SpecificTask story={props.story} />
  );
};

export default TaskContainer;
