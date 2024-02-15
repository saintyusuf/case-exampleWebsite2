import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'

const IntroducerComponent = () => {
  return (
    <Box w="100%" h="250px" borderBottom="var(--border)" borderX="var(--border)" bg="var(--bgColor2)" color="#000">
      <Box pos="relative" w="100%" maxW="1440px" h="100%" mx="auto" display="flex" alignItems="center">
        <Img src="/assets/images/introducer/1.png" w="395px" h="fit-content" ml="70px" transform="translateY(-5%)" zIndex="2" />
        <Box display="flex" flexDir="column" mt="30px" ml="-6px">
          <Text fontSize="66px" fontWeight="600" lineHeight="1" mb="7px">Expert Advisors & Partners</Text>
          <Text fontSize="28px" fontWeight="600" mb="20px">Members and Partners of our fund include iconic figures in CPG.</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default IntroducerComponent