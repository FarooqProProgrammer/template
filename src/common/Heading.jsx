import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading({ title, link }) {
    return (
        <Flex
            justifyContent={'space-between'}
            alignItems={'center'}

        >
            <Text fontSize={25}>{title}</Text>
            <Link color={'#4C8BDE'} to={link}>View All</Link>
        </Flex> 
  )
}
