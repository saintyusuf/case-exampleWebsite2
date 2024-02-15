import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import HeaderLayout from './header.layout'
import FooterLayout from './footer.layout'
import gsap from 'gsap'

interface IProps {
  children: React.ReactNode
}

const IndexLayout = (props:IProps) => {

  const refPageTransition = useRef(null)
  const refLogo = useRef(null)

  function pageTransition() {
    const tl = gsap.timeline()
    
    tl.set(refLogo.current, {
      left: "50%",
      bottom: "-100%",
      transform: "translateX(-50%)",
    })

    tl.to(refLogo.current, {
      duration: 1,
      ease: "Expo.easeInOut",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      scale: 2
    })
    
    tl.to(refLogo.current, {
      duration: 1,
      ease: "Expo.easeInOut",
      delay: 0.3,
      left: 0,
      top: 0,
      transform: "translate(0, 0)",
      scale: 1
    })

    
    tl.to(refPageTransition.current, {
      duration: 1,
      width: "100%",
      left: "-100%",
      ease: "Expo.easeInOut",
      delay: 0.1
    })
    
    tl.set(refPageTransition.current, {left: "-100%"})
    tl.set(refLogo.current, {display: "none"})

  }

  useEffect(()=>{
    pageTransition()
  },[])
  
  return (
    <Box w={{desktop: "100vw"}}>
      <Box ref={refPageTransition} position="fixed" left="0" top="0" width="100%" height="100%" backgroundColor="var(--bgColor4)" zIndex="100">
        <Box ref={refLogo} pos="fixed" display="flex" w="285px" h="98px" bg="#fff" border="var(--border)">
          <Box w="19px" h="100%" bg="#FF0016" borderRight="var(--border)"/>
          <Box display="flex" flexDir="column" justifyContent="center" px="12px" color="#000">
            <Text fontSize="54px" fontWeight="600" lineHeight="1" letterSpacing="-0.8px">CPGD</Text>
            <Text fontSize="13px" fontWeight="600" lineHeight="1" letterSpacing="-0.3px">Consumer Packaged Goods Directory</Text>
          </Box>
        </Box>
      </Box>
      <HeaderLayout/>
      {props.children}
      <FooterLayout/>
    </Box>
  )
}

export default IndexLayout