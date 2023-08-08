import React, { useRef } from 'react'
import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    HStack,
    Button,
    Center,
} from '@chakra-ui/react'
import StepperComp from './StepperComp'

function Form( { handleToDos, task, setTask, prevent }) {
    const form = useRef(null)
    const [stepsModificator, setSetpsModificator ] = useState(0)

    function handleChange(e) {
        setTask((prev) => ({
            ...prev, [e.target.name] : e.target.value
        }))
    }



return (
    <>
    <StepperComp stepsModificator={stepsModificator} task={task} setSetpsModificator={setSetpsModificator} />
    <FormControl as='form' ref={form} fontFamily='fantasy' isRequired>
        <FormLabel >Task</FormLabel>
        <Input type='text' name='name' placeholder='Task' onChange={(e)=>handleChange(e)}/>
        <FormHelperText color='green'> what would you like to add?</FormHelperText>
        <HStack >
            <FormLabel fontSize='15px' color='green' mt='10px'>Date</FormLabel>
            <Input type='date' name='date' onChange={(e)=>handleChange(e)} />
            
            <FormLabel fontSize='15px' color='green' mt='10px'>Time</FormLabel>
            <Input type='time' name='time' onChange={(e)=>handleChange(e)}/>
        </HStack>
        <Center mt='15px'><Button type='button' colorScheme='green' onClick={handleToDos}> Create Task </Button></Center>
    </FormControl>
    </>
)}

export default Form