import { chakra } from '@chakra-ui/react'
import { InputContainer } from './components/InputContainer'

function App () {
  return (
    <chakra.main
      w='100%'
      h='100vh'
      bgColor='neutral.off-white'
      display='flex'
      alignItems='center'
      justifyContent='center'
      p={{ base: '.4rem', md: '0' }}
      color='black'
    >
      <InputContainer />
    </chakra.main>
  )
}

export default App
