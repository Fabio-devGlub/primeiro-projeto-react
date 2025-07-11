import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


import { Container, ToDolist, Input, Button, ListItem, Trash, Check, Titolo } from './styles'


function App() {
  const [list, setList] = useState([]);



  const [inputTask, setInputTask] = useState('');

  function inputMudou(event) {
    setInputTask(event.target.value)

  }

  function cliqueiNobotao() {
    if (inputTask) {
    setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }

  }

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarItem(id) {
    const newlist = list.filter((item) => item.id != id)

    setList(newlist)
  }

  return (
    <Container>
      <ToDolist>
        <Input onChange={inputMudou} placeholder="o que tenho para fazer..." />
        <Button onClick={cliqueiNobotao}>Adicionar</Button>
        
        <ul>
          {list.length > 0 ? (
           list.map(item => (
                <ListItem isfinished={item.finished} key={item.id} >
                  <Trash onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Check onClick={() => deletarItem(item.id)} />
                </ListItem>
              ))
             ) : (
             <Titolo>Não há itens na lista</Titolo>
          )} 
        </ul>
      </ToDolist>
    </Container>
  )
}

export default App
