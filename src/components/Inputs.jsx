import { Flex, Button, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { AgeContext } from '../context/AgeContext'
import { AgeInput } from './AgeInput'
import arrowDown from '../assets/icon-arrow.svg'

export const Inputs = () => {
  const { calculateAge } = useContext(AgeContext)

  return (
    <Flex
      as='section'
      w='full'
      alignItems='center'
      position='relative'
    >
      <AgeInput name='Day' />
      <AgeInput name='Month' />
      <AgeInput name='Year' w='90px' />

      <Button
        onClick={calculateAge}
        bgColor='primary.custom-purple'
        position='absolute'
        w={{ base: '65px', md: '80px' }}
        h={{ base: '65px', md: '80px' }}
        borderRadius='100%'
        bottom={{ base: '-90px', md: '-60px' }}
        right={{ base: '40%', md: '0' }}
        _hover={{ bgColor: 'neutral.off-black' }}
      >
        <Image src={arrowDown} />
      </Button>

    </Flex>
  )
}
