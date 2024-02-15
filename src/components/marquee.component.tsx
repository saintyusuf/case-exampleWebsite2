import { Box, Img, Text } from '@chakra-ui/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

interface IProps {
  variant: 1 | 2
}

const MarqueeComponent = (props: IProps) => {  
  return (
    <>
      {
        props.variant === 1 ? <Marquee1/>
        : props.variant === 2 ? <Marquee2/>
        : null
      }
    </>
  )
}

export default MarqueeComponent

const Marquee1 = () => {

  const dispatch = useDispatch()

  const marquee = useRef<any>(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    gsap.to(marquee.current, {
      scrollTrigger:{
        trigger: marquee.current,
        scrub: true,
      },
      x: "-50vw",
    })

    let proxy = {skew: 0}
    let skewSetter = gsap.quickSetter(marquee.current, "skewX", "deg")
    let clamp = gsap.utils.clamp(-100,100)

    ScrollTrigger.create({
      trigger: marquee.current,
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -100)
        if(Math.abs(skew) > Math.abs(proxy.skew)){
          proxy.skew = skew
          gsap.to(proxy, {skew: 0, duration: 0.1, ease: "power1", overwrite: true, onUpdate: () => skewSetter(proxy.skew)})
        }
      }
    })
    
  },[])
  
  return(
    <Box pos="relative" w="100%" h="137px" bg="var(--bgColor4)" mx="auto" overflow="hidden" borderBottom="var(--border)" borderX="var(--border)" userSelect="none" cursor="pointer" transition="200ms" _hover={{bg: "var(--bgColor3)", "& p": {color: "var(--bgColor2)"}}} onClick={()=>dispatch({type: "modal/openModal"})}>
      <Box ref={marquee} display="flex" justifyContent="center" alignItems="center" mx="20px" h="100%">
        {
          [...Array(25)].map((_,i)=>(
            <React.Fragment key={i}>
              <Text fontSize="100px" fontWeight="600" mx="20px" textTransform="uppercase" color="var(--bgColor3)" whiteSpace="nowrap">Apply Now</Text>
              <Img src="/assets/images/marquee/cursor.png" w="50px" h="50px" objectFit="cover" mx="20px"/>   
            </React.Fragment>
          ))
        }
      </Box>
    </Box>
  )
}

const Marquee2 = () => {

  const marquee = useRef<any>(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{

    gsap.to(marquee.current, {
      scrollTrigger:{
        trigger: marquee.current,
        scrub: true,
      },
      x: "50vw",
    })    

    let proxy = {skew: 0}
    let skewSetter = gsap.quickSetter(marquee.current, "skewX", "deg")
    let clamp = gsap.utils.clamp(-100,100)

    ScrollTrigger.create({
      trigger: marquee.current,
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / 100)
        if(Math.abs(skew) > Math.abs(proxy.skew)){
          proxy.skew = skew
          gsap.to(proxy, {skew: 0, duration: 0.1, ease: "power1", overwrite: true, onUpdate: () => skewSetter(proxy.skew)})
        }
      }
    })
    
  },[])
  
  return(
    <Box pos="relative" w="100%" h="165px" bg="var(--bgColor1)" mx="auto" overflow="hidden" borderBottom="var(--border)" borderX="var(--border)" userSelect="none" transition="200ms">
      <Box ref={marquee} display="flex" justifyContent="center" alignItems="center" mx="20px" h="100%">
        {
          [...Array(10)].map((_,i)=>(
            <React.Fragment key={i}>
              <Img className="image" src="/assets/images/marquee/1.png" w="180px" h="auto" objectFit="cover" mx="40px"/>
              <Img className="image" src="/assets/images/marquee/2.png" w="180px" h="auto" objectFit="cover" mx="40px"/>
              <Img className="image" src="/assets/images/marquee/3.png" w="180px" h="auto" objectFit="cover" mx="40px"/>
              <Img className="image" src="/assets/images/marquee/4.png" w="180px" h="auto" objectFit="cover" mx="40px"/>
              <Img className="image" src="/assets/images/marquee/5.png" w="180px" h="auto" objectFit="cover" mx="40px"/>    
            </React.Fragment>
          ))
        }
      </Box>
      <Box pos="absolute" left="0" top="0" w="50%" h="100%" zIndex="3" boxShadow="inset 150px 0 40px -40px var(--bgColor1)"/>
      <Box pos="absolute" right="0" top="0" w="50%" h="100%" zIndex="3" boxShadow="inset -150px 0 40px -40px var(--bgColor1)"/>
    </Box>
  )
}