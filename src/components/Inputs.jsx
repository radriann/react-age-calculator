import { FormControl, FormLabel, Input, Flex, Button, Image } from '@chakra-ui/react'
import arrowDown from '../assets/icon-arrow.svg'

export const Inputs = () => {
  return (
    <Flex
      as='section'
      w='full'
      alignItems='center'
      position='relative'
    >
      <FormControl
        mx={{ base: '.5rem', md: '1rem' }}
        w={{ base: '30%', md: '20%' }}
      >
        <FormLabel
          color='neutral.smokey-grey' textTransform='uppercase' letterSpacing='3px'
          fontWeight='600'
          fontSize={{ base: '12px', md: '14px' }}
        >
          Day
        </FormLabel>
        <Input
          type='number'
          borderColor='neutral.smokey-grey'
          autoComplete='off'
          w={{ base: '70px', md: '120px' }}
          h={{ base: '55px', md: '60px' }}
          fontSize={{ base: '20px', md: '25px' }}
          fontWeight='800'
          _hover={{ borderColor: 'neutral.smokey-grey' }}
        />
      </FormControl>

      <FormControl
        mx={{ base: '.5rem', md: '1rem' }}
        w={{ base: '30%', md: '20%' }}
      >
        <FormLabel
          color='neutral.smokey-grey' textTransform='uppercase' letterSpacing='3px'
          fontWeight='600'
          fontSize={{ base: '12px', md: '14px' }}
        >
          Month
        </FormLabel>
        <Input
          type='number'
          borderColor='neutral.smokey-grey'
          autoComplete='off'
          w={{ base: '70px', md: '120px' }}
          h={{ base: '55px', md: '60px' }}
          fontSize={{ base: '20px', md: '25px' }}
          fontWeight='800'
          _hover={{ borderColor: 'neutral.smokey-grey' }}
        />
      </FormControl>

      <FormControl
        mx={{ base: '.5rem', md: '1rem' }}
        w={{ base: '30%', md: '20%' }}
      >
        <FormLabel
          color='neutral.smokey-grey' textTransform='uppercase' letterSpacing='3px'
          fontWeight='600'
          fontSize={{ base: '12px', md: '14px' }}
        >
          Year
        </FormLabel>
        <Input
          type='number'
          borderColor='neutral.smokey-grey'
          autoComplete='off'
          w={{ base: '85px', md: '150px' }}
          h={{ base: '55px', md: '60px' }}
          fontSize={{ base: '20px', md: '25px' }}
          fontWeight='800'
          _hover={{ borderColor: 'neutral.smokey-grey' }}
        />
      </FormControl>

      <Button
        bgColor='primary.custom-purple'
        position='absolute'
        w={{ base: '65px', md: '80px' }}
        h={{ base: '65px', md: '80px' }}
        borderRadius='100%'
        bottom={{ base: '-90px', md: '-50px' }}
        right={{ base: '40%', md: '0' }}
        _hover={{ bgColor: 'neutral.off-black' }}
      >
        <Image src={arrowDown} />
      </Button>

    </Flex>
  )
}