import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { useContext } from 'react'
import { AgeContext } from '../context/AgeContext'

export const AgeInput = ({ name, w }) => {
  const { handleInput, error } = useContext(AgeContext)
  const width = w || '70px'

  return (
    <FormControl
      isInvalid={error.isError}
      mx={{ base: '.5rem', md: '1rem' }}
      w={{ base: 'fit-content', md: '20%' }}
    >
      <FormLabel
        color={error.isError ? 'primary.light-red' : 'neutral.smokey-grey'}
        textTransform='uppercase'
        letterSpacing='3px'
        fontWeight='600'
        fontSize={{ base: '12px', md: '14px' }}
      >
        {name}
      </FormLabel>

      <Input
        onChange={handleInput}
        type='number'
        borderColor='neutral.smokey-grey'
        autoComplete='off'
        w={{ base: width, md: '120px' }}
        h={{ base: '55px', md: '60px' }}
        fontSize={{ base: '20px', md: '25px' }}
        fontWeight='800'
        name={name.toLowerCase()}
      />

      <FormErrorMessage
        fontSize='10px'
        fontWeight='600'
      >
        {error.message}
      </FormErrorMessage>
    </FormControl>
  )
}
