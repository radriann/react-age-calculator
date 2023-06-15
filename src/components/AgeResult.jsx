import { Heading, chakra } from '@chakra-ui/react'

export const AgeResult = ({ name, result }) => {
  return (
    <Heading
      mt='.5rem'
      fontSize={{ base: '38px', md: '55px' }}
      fontStyle='italic'
    >
      <chakra.span color='primary.custom-purple'>{result || '- -'} </chakra.span>
      {name}
    </Heading>
  )
}
