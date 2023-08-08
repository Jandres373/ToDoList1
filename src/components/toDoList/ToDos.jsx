import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Center,
  Heading,
  Button,
  Textarea,
  Input
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function ToDos({ todos, edit, editted, setToDosItem, changeValue,setChangeValue, deleteToDo, editToDo, completeToDo }) {
  

  return (
      <HStack  display='flex' flexWrap='wrap'>
      {todos.map((e, i) => {
        e.id = i;
        return (
          (e = (
            <Card key={i}>
              <CardHeader>
                <Heading>
                  {todos[i].edit ? (
                    <Textarea
                      as='textarea'
                      name='newText'
                      resize='none'
                      overflow='scroll'
                      value={changeValue.newName} // Bind the value of the Textarea to the changeValue state
                      onChange={(e) =>
                        setChangeValue( p=>({...p, newName:e.target.value}) ) // Update changeValue when Textarea value changes
                      }
                    />
                  ) : (
                    e.name
                  )}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                {todos[i].edit && (
                    <Input
                      type='date'
                      name='newDate'
                      placeholder={todos.nama}
                      value={changeValue.newDate} // Bind the value of the Textarea to the changeValue state
                      onChange={(e) =>
                        setChangeValue( p=>({...p, newDate:e.target.value}) ) // Update changeValue when Textarea value changes
                      }
                    />
                  ) }
                  debes realizar esta tarea el {e.date} a las {e.time}
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  type='button'
                  colorScheme='red'
                  onClick={() => deleteToDo(i)}
                >
                  Eliminar
                </Button>
                <Button
                  colorScheme={todos[i].edit ? 'green' : 'gray'}
                  onClick={() => editToDo(i)}
                >
                  {todos[i].edit ? 'Confirmar' : 'Editar'}
                </Button>
                <Button colorScheme='green' onClick={() => completeToDo(i)}>Marcar como completada</Button>
                
              </CardFooter>
            </Card>
          ))
        );
      })}
      </HStack>
  );
}

export default ToDos;
