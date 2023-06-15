import { FormControl, FormLabel, Input } from '@chakra-ui/react'

export const AgeInput = ({ handleInput, name, w }) => {
  const width = w || '70px'

  return (
    <FormControl
      mx={{ base: '.5rem', md: '1rem' }}
      w={{ base: 'fit-content', md: '20%' }}
    >
      <FormLabel
        color='neutral.smokey-grey'
        textTransform='uppercase' letterSpacing='3px'
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
        _hover={{ borderColor: 'neutral.smokey-grey' }}
      />
    </FormControl>
  )
}
