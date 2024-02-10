import { Box, Flex, Text } from '@chakra-ui/react'
import { CiCircleCheck } from "react-icons/ci";
import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function AccountActivity() {
    return (
        <Box
            my={'20px'}
        >
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}

            >
                <Text fontSize={25}>Account Activity</Text>
                <Link color={'#4C8BDE'}>View All</Link>
            </Flex>
            <Box
                width={'100%'}
                py={5}
                bgColor={'#9ACF63'}
                borderRadius={'20px'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                px={5}
                gap={3}
                mt={4}
            >
                <CiCircleCheck size={'40px'} color='#FFF' />
                <Text color={'#FFF'}>
                    Withdrawal of your funds to your Account Has Been Succe
                </Text>
                <FaLongArrowAltRight color='#FFF' size={'30px'} />
            </Box>
        </Box>
    )
}
