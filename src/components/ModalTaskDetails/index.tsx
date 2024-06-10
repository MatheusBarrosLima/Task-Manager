import { TaskDataTypes } from "../TaskCard";
import { Container } from "./styles";

type ModalTaskDetailsType = {
  toggleModal: () => void;
  task: TaskDataTypes;
};

export function ModalTaskDetails({ toggleModal, task }: ModalTaskDetailsType) {
  return (
    <Container onClick={toggleModal}>
      <div className="handleTaskContainer" onClick={toggleModal}>
        <div className="headerForm">
          <h2>Detalhes da tarefa</h2>
          <i className="material-icons closeIcon" onClick={toggleModal}>
            close
          </i>
        </div>
        {task.title}
      </div>
    </Container>
  );
}
