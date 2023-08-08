

import React, { useEffect, useState } from 'react'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Button,
    Center,
  } from '@chakra-ui/react'
import { Stack, Text,   } from '@chakra-ui/react'


const steps = [
{ title: 'First', description: 'Name your task' },
{ title: 'Second', description: 'Select date' },
{ title: 'Third', description: 'Select time' },
{ title: 'Third', description: 'Your task is ready to be created' },
]
function StepperComp( {task, stepsModificator, setSetpsModificator} ) {
  const { activeStep, setActiveStep, isCompleteStep } = useSteps({
    index: stepsModificator,
    count: steps.length,
  })


  useEffect(() => {
    setSetpsModificator( (task.date&&task.name&&task.time ? 3 :  0) ||  (task.date&&task.name ? 2 :  0) || (task.name ? 1 :  0) )
    
    
  }, [task]);

  
  const activeStepText = steps[stepsModificator].description
  return ( 
    <Stack>
      <Stepper size='sm' index={stepsModificator +1} gap='0'>
        {steps.map((step, index) => (
          <Step key={index} gap='0'>
            <StepIndicator>
              <StepStatus complete={<StepIcon />}  
              />
            </StepIndicator>
            <StepSeparator _horizontal={{ ml: '0' }}  />
          </Step>
        ))}
      </Stepper>
      <Text>
        {stepsModificator<3 ? 'step' : 'complete'} {stepsModificator +1}: <b>{activeStepText}</b>
      </Text>
      
    </Stack>
  )

} 

export default StepperComp