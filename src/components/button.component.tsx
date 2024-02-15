import { Button } from '@chakra-ui/react'
import React from 'react'

interface IProps {
  children?: React.ReactNode
  onClick?: () => void
}

const ButtonComponent = (props:IProps) => {
  return (
    <Button w="284px" bg="var(--bgColor4)" color="var(--bgColor3)" fontSize="26px" textTransform="uppercase" fontWeight="600" borderRadius="25px" mb="20px" _hover={{bg: "var(--bgColor4)"}} _active={{transform: "scale(0.95)"}} onClick={props.onClick}>{props.children}</Button> 
  )
}

export default ButtonComponent