import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'

const HeaderLayout = () => {

  const dispatch = useDispatch()

  const data = [
    {
      label: "Directory",
      link: "/directory"
    },
    {
      label: "Team",
      link: "/team"
    },
    {
      label: "STFU",
      link: "/stfu"
    },
    {
      label: "Investment Guide",
      link: "/investment-guide"
    },
    {
      label: "Newsletter",
      link: "/newsletter"
    },
    {
      label: "CNSMR CAPITAL",
      link: "/cnsmr-capital"
    }
  ]
  
  return (
    <Box display="flex" h="98px" w="100%" border="var(--border)">
      <Box display="flex" w="281px" h="100%" bg="#fff" borderRight="var(--border)">
        <Box w="19px" h="100%" bg="#FF0016" borderRight="var(--border)"/>
        <Box display="flex" flexDir="column" justifyContent="center" px="12px" color="#000">
          <Text fontSize="54px" fontWeight="600" lineHeight="1" letterSpacing="-0.8px">CPGD</Text>
          <Text fontSize="13px" fontWeight="600" lineHeight="1" letterSpacing="-0.3px">Consumer Packaged Goods Directory</Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" px="20px">
        {data.map((item, i) => (
          <Box key={i} px="15px" py="0.69">
            <Text fontSize="19px" fontWeight="600" lineHeight="1" letterSpacing="-0.3px" color="#000" cursor="pointer">{item.label}</Text>
          </Box>
        ))}
      </Box>
      <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" w="164px" ml="auto" borderLeft="var(--border)" bg="var(--bgColor1)" cursor="pointer" color="#000" onClick={()=>dispatch({type: "modal/openModal"})}>
        <Box display="flex" justifyContent="center" alignItems="baseline">
          <Img src="/assets/images/header/dot.png" w="15px" mr="5px" />
          <Text fontSize="20px" fontWeight="600" lineHeight="1">Browse</Text>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="baseline">
          <Img src="/assets/images/header/up.png" w="15px" mr="5px" ml="-5px" />
          <Text fontSize="20px" fontWeight="600" lineHeight="1">Submit</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderLayout