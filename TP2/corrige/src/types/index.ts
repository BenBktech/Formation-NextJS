export interface ITask {
    id: number;
    text: string;
}

export interface ITasks extends Array<ITask> {}

export interface IAddTaskProps {
    taskInput: string;
    setTaskInput: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: () => void;
}

export interface ITaskListProps {
    tasks: ITask[];
    handleDeleteTask: (id: number) => void;
}