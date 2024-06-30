import { Box, Img, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import ISlider from '../types/slider.interface'

const SliderComponent = () => {

  const [data, setData] = useState<ISlider[]>([])
  
  function fetchData(){
    axios.get("https://case.justdesignfx.com/team.php").then((res)=>{
      setData(res.data)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <Box w="100%" h="780px" borderBottom="var(--border)" borderX="var(--border)" bg="var(--bgColor2)" color="#000">
      <Box display="flex" alignItems="center" w="100%" maxW="1440px" px="50px" h="100%" mx="auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            
          }}
        >
          {
            data.map((item)=>(
              <SwiperSlide key={item.id} style={{width: "fit-content"}}>
                <Box display="flex" flexDir="column" w="412px" h="532px" border="var(--border)" borderTopLeftRadius="250px" borderTopRightRadius="250px" borderBottomRadius="15px" overflow="hidden" cursor="pointer" userSelect="none">
                  <Img src={item.image} userSelect="none" h="375px"/>
                  <Box display="flex" flexDir="column" alignItems="center" h="calc(532px - 375px)" bg="var(--bgColor1)" pt="20px">
                    <Text fontSize="28px" fontWeight="600" lineHeight="1" mb="20px" w="85%" textAlign="center" h="56px">{item.name}</Text>
                    <Text fontSize="12px" fontWeight="500" lineHeight="1">{item.title}</Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))
          }
          <Box display="flex" zIndex={2} mt="50px">
            <Box className="swiper-button-prev" pos="relative" border="2px solid #000" w="40px" h="40px" borderRadius="100%" sx={{"&::after": {content: "''"}}} mr="40px">
              <Img src="/assets/images/slider/left.png"/>
            </Box>
            <Box className="swiper-button-next" pos="relative" border="2px solid #000" w="40px" h="40px" borderRadius="100%" sx={{"&::after": {content: "''"}}}>
              <Img src="/assets/images/slider/right.png"/>
            </Box>
          </Box>
        </Swiper>
      </Box>
    </Box>
  )
}

export default SliderComponent