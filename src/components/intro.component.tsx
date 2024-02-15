import { Box, Img, Text } from '@chakra-ui/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const IntroComponent = () => {
  
  return (
    <Box w="100%" h="988px" borderX="var(--border)" borderBottom="var(--border)" bg="var(--bgColor2)" overflow="hidden">
      <Box pos="relative" maxW="1440px" h="100%" mx="auto">
        <Box pos="absolute" left="50%" top="11%" transform="translate(-50%, -11%)" display="flex" justifyContent="center" alignItems="center" w="901px" h="164px" bg="var(--bgColor3)" borderRadius="100px">
          <Text fontSize="100px" fontWeight="600" color="#fff">CNSMR CAPITAL</Text>
          <Img src="/assets/images/intro/text.png" w="71.5px" h="193.8px" pos="absolute" right="-60px" top="-20px"/>
        </Box>

        <Text pos="absolute" left="50%" top="40%" transform="translate(-50%, -40%)" fontSize="50px" fontWeight="600" w="60%" textAlign="center" color="#000">
          Investment club fueling the next generation of CPG, backed a crew of CPGD’s <Box as="span" fontWeight="700">9,000</Box> readers.
        </Text>

        <Img src="/assets/images/intro/cloud1.png" pos="absolute" left="2.75%" bottom="10%" transform="translate(-2.75%,10%)" w="353px" />
        <Img src="/assets/images/intro/cloud2.png" pos="absolute" left="55.8%" bottom="3%" transform="translate(-55.8%,3%)" w="345px" />

        <Img src="/assets/images/intro/mountain1.png" pos="absolute" left="1.85%" bottom="-1.85%" transform="translate(1.85%,1.85%)" w="723px" />
        <Img src="/assets/images/intro/mountain2.png" pos="absolute" left="28.2%" bottom="0" transform="translate(28.2%,0)" w="725px" />

        <Img src="/assets/images/intro/flower1.png" pos="absolute" left="2.7%" bottom="-3.1%" transform="translate(-2.7%,3.1%)" w="326px" />
        <Img src="/assets/images/intro/flower2.png" pos="absolute" left="30.65%" bottom="-6%" transform="translate(-30.65%,6%)" w="244px" />
        <Img src="/assets/images/intro/flower3.png" pos="absolute" left="96.7%" bottom="-7.55%" transform="translate(-96.7%,7.55%)" w="472px" />
      </Box>
    </Box>
  )
}

export default IntroComponent