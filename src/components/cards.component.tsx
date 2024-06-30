import { Box, Img, Text } from '@chakra-ui/react'

const CardsComponent = () => {

  const data = [
    {
      title: "Mentorship",
      img: "/assets/images/cards/1.png"
    },
    {
      title: "Invite to Quarterly Dinners",
      img: "/assets/images/cards/2.png"
    },
    {
      title: "Access to Deal Flow",
      img: "/assets/images/cards/3.png"
    },
  ]
  
  return (
    <Box w="100%" h="490px" borderBottom="var(--border)" bg="var(--bgColor2)" color="#000">
      <Box w="100%" maxW="1440px" h="100%" mx="auto" borderX="var(--border)">
        <Box w="100%" h="155px" borderBottom="var(--border)" />
        <Box w="100%" h="calc(490px - 155px)" display="flex">
          {
            data.map((item, i) => (
              <Box key={i} w="33.33%" h="100%" borderRight={i !== data.length-1 ? "var(--border)" : ""}>
                <Img src={item.img} w="84%" h="84%" objectFit="contain" mt="-13.5%" mx="auto" mb="35px"/>
                <Text fontSize="30px" fontWeight="600" textAlign="center">{item.title}</Text>
              </Box>   
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default CardsComponent