import { Box, Img, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ButtonComponent from './button.component'

interface IProps {
  isOpen: boolean
}

const ModalComponent = (props:IProps) => {

  const dispatch = useDispatch()

  document.addEventListener("keydown", (e)=>{
    if(e.key==="Escape") dispatch({type: "modal/closeModal"})
  })

  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  })

  const [resData, setResData] = useState({
    message: "",
    success: undefined
  })

  function submit() {
    axios.post("https://case.justdesignfx.com/form.php", {
      name: inputs.name,
      email: inputs.email
    }).then(res=>{
      setResData({
        message: res.data.message,
        success: res.data.success
      })
    })
  }

  function closeModal() {
    setInputs({
      name: "",
      email: ""
    })
  
    setResData({
      message: "",
      success: undefined
    })
    dispatch({type: "modal/closeModal"})
  }
  
  return props.isOpen ? (
    <>

      <Box pos="fixed" left="0" top="0" w="100vw" h="100vh" zIndex="9" bg="#000000cc" onClick={()=>closeModal()}/>

      <Box pos="fixed" left="50%" top="50%" transform="translate(-50%,-50%)" zIndex="10" w="554px" h="382px" border="var(--border)" bg="var(--bgColor2)">
        <Box pos="fixed" right="-40px" top="0" zIndex="11" cursor="pointer" transition="200ms" _active={{transform: "scale(0.9)"}} onClick={()=>closeModal()}>
          <Img src="/assets/images/modal/1.png" w="20px" h="20px" objectFit="contain"/>
        </Box>

        {
          resData.success ?
            <>
              <Img src="/assets/images/footer/1.png" w="223px" pos="absolute" right="12px" bottom="0" />
              <Box pos="absolute" left="30px" top="65%" transform="translateY(-65%)">
                <Text fontSize="50px" fontWeight="600" lineHeight="1" textAlign="center" textTransform="uppercase" mb="10px">Thank You!</Text>
                <Text fontSize="15px" fontWeight="600" mb="75px">{resData.message}</Text>
                <ButtonComponent onClick={()=>closeModal()}>Done</ButtonComponent>
              </Box>
            </>
          :
          <>
            <Box borderBottom="var(--border)">
              <Text fontSize="50px" fontWeight="600" lineHeight="1" textAlign="center" py="5px" textTransform="uppercase">Apply Now</Text>
            </Box>

            <Box display="flex" flexDir="column" alignItems="center" pt="45px">
              <Input type="text" placeholder="Name Surname" name="name" w="240px" mb="20px" border="0" borderBottom="1px solid #000" borderRadius="0" focusBorderColor="transparent" textAlign="center" fontSize="20px" _hover={{border: "0", borderBottom: "1px solid #000"}} _focus={{border: "0", borderBottom: "1px solid #000"}} value={inputs.name} onChange={(e)=>setInputs({...inputs, name: e.target.value})}/>
              <Input type="email" placeholder="Email Address" name="email" w="240px" mb="55px" border="0" borderBottom="1px solid #000" borderRadius="0" focusBorderColor="transparent" textAlign="center" fontSize="20px" _hover={{border: "0", borderBottom: "1px solid #000"}} _focus={{border: "0", borderBottom: "1px solid #000"}} value={inputs.email} onChange={(e)=>setInputs({...inputs, email: e.target.value})}/>
              <ButtonComponent onClick={()=>submit()}>Send</ButtonComponent>
              <Text color="var(--bgColor3)" fontSize="15px" fontWeight="600">{resData.message}</Text>
            </Box>
          </>          
        }
        </Box>

    </>
  ) : null
}

export default ModalComponent