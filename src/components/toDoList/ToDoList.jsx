import React, { useState } from 'react'
import { Stack, VStack, Center, Box } from '@chakra-ui/react'
import Form from './Form'
import ToDos from './ToDos'
import Alerta from './Alerta';

function ToDoList() {
  const [task, setTask] = useState({
    id: '',
    name: '',
    date: '',
    time: '',
    status: 'uncomplete',
    edit: false,
    edited: false,
  })
  const {id,name,date,time,status,edit,edited} = task
  const [changeValue, setChangeValue] = useState( {
    newName: '',
    newDate: '',
    newTime: '',
  } );
  const [toDosItem, setToDosItem] = useState({
    todos: [...JSON.parse(localStorage.getItem('toDos'))]
  });
  const {todos} = toDosItem

  function handleToDos() {
    (name&&date&&time) && todos.push(task)
    setToDosItem((prev)=>({...prev}))
    localStorage.setItem('toDos', JSON.stringify(todos))
  }
  function deleteToDo(i) {
    setToDosItem((p) => ({
      ...p,
      todos: todos.filter((e) => e.id !== todos[i].id),
    }));
  }
  function editToDo(i) {
    if (todos[i].edit === false) {
      setToDosItem((p) => ({
        ...p,
        todos: todos.map((e) =>
          e.id === todos[i].id ? { ...e, edit: true } : e
        ),
      }));
    } else if (todos[i].edit === true) {
      setToDosItem((p) => ({
        ...p,
        todos: todos.map((e) => ({
          ...e,
          name: e.id === todos[i].id ? changeValue.newName : e.name, 
          date: e.id === todos[i].id ? changeValue.newDate : e.date, 
          edit: false,
        })),
      }));
    } else {
      console.error('Something unexpected happened');
    }
  }
  function completeToDo(i) {
    setToDosItem((prev) => {
      const updatedTodos = [...prev.todos];
      if (updatedTodos[i]) {
        updatedTodos[i] = { ...updatedTodos[i], status: 'completed' };
      }
      return { ...prev, todos: updatedTodos };
    });
  }
return (
<VStack w='100%' p='50px'  >
  <Form 
  handleToDos={handleToDos}
  task={task}
  setTask={setTask}
  />
  <ToDos 
  task={task}
  todos={todos}
  setToDosItem={setToDosItem}
  edit={edit}
  edited={edited}
  changeValue={changeValue}
  setChangeValue={setChangeValue}
  editToDo={(i)=>editToDo(i)}
  deleteToDo={(i)=>deleteToDo(i)}
  completeToDo={(i)=>completeToDo(i)}
  
  />
  <Box>
    {todos.map((e)=> e.status === 'completed' && <Alerta />)}
  </Box>
  
</VStack>
)
}

export default ToDoList