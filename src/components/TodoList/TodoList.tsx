import React from 'react';
import { Todo } from '../../types/types';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos: Todo[]
}

export const TodoList: React.FC<Props> = ({preparedTodos}) => {
  console.log("Todos in TodoList:", preparedTodos);

  return (
      <section className="TodoList">
        {
          preparedTodos.map((todo: Todo, index: number) => {
            return (
              <TodoInfo key={`${todo.id}-${index}`} todo={todo} />
            )
          })
        }
      </section>
  )
};
