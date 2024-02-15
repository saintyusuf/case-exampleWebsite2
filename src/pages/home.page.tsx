import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import IntroComponent from '../components/intro.component'
import gsap, { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'
import MarqueeComponent from '../components/marquee.component'
import About1Component from '../components/about1.component'
import IntroducerComponent from '../components/introducer.component'
import SliderComponent from '../components/slider.component'
import CardsComponent from '../components/cards.component'
import About2Component from '../components/about2.component'
import ModalComponent from '../components/modal.component'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const HomePage = () => {

  const modalStates = useSelector((state:RootState) => state.modal)

  // smooth scroll
  const lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1500)
  })
  gsap.ticker.lagSmoothing(0)
  
  return (
    <Box>
      <IntroComponent/>
      <MarqueeComponent variant={1}/>
      <About1Component/>
      <IntroducerComponent/>
      <SliderComponent/>
      <MarqueeComponent variant={2}/>
      <CardsComponent/>
      <About2Component/>
      <MarqueeComponent variant={1}/>
      <ModalComponent isOpen={modalStates.isOpen}/>
    </Box>
  )
}

export default HomePage