import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const Btn = ({text}) => {
  

  return (
    <Button colorScheme='blue'className='ml-4'>{text}</Button>
  );
};

export default Btn;
