import { Box } from '@chakra-ui/react'
import { Inputs } from './Inputs'
import { useContext } from 'react'
import { AgeContext } from '../context/AgeContext'
import { AgeResult } from './AgeResult'

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
          <AgeResult name='years' result={resultYear} />
          <AgeResult name='months' result={resultMonth} />
          <AgeResult name='days' result={resultDay} />
        </Box>
      </Box>
    </>
  )
}
