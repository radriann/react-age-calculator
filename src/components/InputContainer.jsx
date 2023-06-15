import { Box, Heading, chakra } from '@chakra-ui/react'
import { Inputs } from './Inputs'
import { useContext } from 'react'
import { AgeContext } from '../context/AgeContext'

export const InputContainer = () => {
  const { resultYear, resultMonth, resultDay } = useContext(AgeContext)

  return (
    <>
      <Box
        as='article'
        w={{ base: '100%', md: '45%' }}
        bgColor='white'
        borderRadius='12px'
        borderBottomRightRadius='90px'
        h='fit-content'
        py='2rem'
        px='1rem'
        boxShadow='md'
      >
        <Inputs />
        <Box
          mt={{ base: '3rem', md: '1rem' }}
          w={{ base: '100%', md: '90%' }}
          h='2px'
          bgColor='neutral.light-grey'
          mx={{ base: 'auto', md: '1rem' }}
        />

        <Box
          display='flex'
          flexDirection='column'
          mt='3rem'
        >
          <Heading
            mt='.5rem'
            fontSize={{ base: '38px', md: '55px' }}
            fontStyle='italic'
          >
            <chakra.span color='primary.custom-purple'>{resultYear || '- -'} </chakra.span>
            years
          </Heading>
          <Heading
            mt='.5rem'
            fontSize={{ base: '38px', md: '55px' }}
            fontStyle='italic'
          >
            <chakra.span color='primary.custom-purple'>{resultMonth || '- -'} </chakra.span>
            months
          </Heading>
          <Heading
            mt='.5rem'
            fontSize={{ base: '38px', md: '55px' }}
            fontStyle='italic'
          >
            <chakra.span color='primary.custom-purple'>{resultDay || '- -'} </chakra.span>
            days
          </Heading>
        </Box>
      </Box>
    </>
  )
}
