import { Box, Img } from '@chakra-ui/react'

const FooterLayout = () => {
  return (
    <Box pos="relative" w="100%" maxW="1440px" mx="auto">
      <Img src="/assets/images/footer/1.png" pos="absolute" left="10%" bottom="0" transform="translateX(-10%)"/>
    </Box>
  )
}

export default FooterLayout