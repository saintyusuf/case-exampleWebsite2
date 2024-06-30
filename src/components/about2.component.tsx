import { Box, Text } from '@chakra-ui/react'

const About2Component = () => {
  return (
    <Box display="flex" flexDir="column" borderBottom="var(--border)" borderX="var(--border)" pt="65px" bg="var(--bgColor2)" color="#000">
      <Box w="100%" maxW="1440px" h="100%" mx="auto">
        <Text fontSize="155px" fontWeight="600" textAlign="center" lineHeight="1" mb="40px">Get in on our deals</Text>
        <Box ml="455px">
          <Text fontSize="29px" fontWeight="600" textAlign="left" lineHeight="1.2" mb="50px" sx={{"& span": {fontSize: "50px"}}}>
            Apply to be an LP in our investment club. 
            <br/>
            Minimum checks are <span>$5k</span> and you don’t need to be accredited.
          </Text>
          <Text fontSize="29px" fontWeight="600" textAlign="left" lineHeight="1" mb="80px">Because these deals are too sweet to gate-keep.</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default About2Component