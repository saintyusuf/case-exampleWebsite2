import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'

const About1Component = () => {
  return (
    <Box w="100%" h="755px" bg="var(--bgColor2)" borderBottom="var(--border)" borderX="var(--border)" pt="100px" color="#000">

      <Box w="100%" maxW="1440px" h="100%" mx="auto">

        <Text fontSize="66px" fontWeight="600" textAlign="center" mb="32.5px">Access to Deal Flow</Text>

        <Text fontSize="28px" fontWeight="600" textAlign="center" w="76%" mx="auto" mb="60px" sx={{"& span": {fontSize: "45px"}}}>
          Because of our pulse on emerging trends, our team already sources deal flow for
          leading consumer VCs. We’ve facilitated over <span>$1M</span> in investments and get
          access to deals before they hit the mainstream.
        </Text>

        <Text fontSize="24px" fontWeight="500" textAlign="center" mb="55px">Some of our team’s investments to date:</Text>

        <Box display="flex" w="72.5%" mx="auto" justifyContent="space-between" alignItems="center">
          <Img src="/assets/images/about1/1.png" w="150px" />
          <Img src="/assets/images/about1/2.png" w="240px" />
          <Img src="/assets/images/about1/3.png" w="175px" />
          <Img src="/assets/images/about1/4.png" w="220px" />
        </Box>
        
      </Box>
      
    </Box>
  )
}

export default About1Component