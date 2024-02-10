import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react'
import { FaGoogle } from "react-icons/fa";
import React from 'react'
import { RecentActivities } from '../../data';

export default function RecentActivity() {
    return (
        <Box

            bgColor={'#FFF'}
            px={3}
            py={3}
        >
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}

            >
                <Text fontSize={25}>Recent Activity</Text>
                <Link color={'#4C8BDE'}>View All</Link>
            </Flex>

            <Flex
                width={'100%'}
                py={'20px'}
                // px={5}
                flexDirection={'column'}
                justifyContent={'start'}
                alignItems={'start'}
                borderRadius={'10px'}
            >
                {
                    RecentActivities?.map((item) => {
                        return (
                            <Box
                                width={'100%'}
                                display={'flex'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                mb={3}
                            >
                                <Flex
                                    justifyContent={'start'}
                                    alignItems={'start'}
                                    gap={2}
                                >
                                    <IconButton
                                        bgColor={item.iconColor}
                                        color={'#FFF'}
                                        width={'60px'}
                                        height={'60px'}
                                    >
                                        <item.icon />
                                    </IconButton>
                                    <Flex
                                        flexDirection={'column'}
                                        justifyContent={'start'}
                                        alignItems={'start'}
                                        gap={1}
                                    >
                                        <Text>{item.text}</Text>
                                        <Text>{item.date}</Text>
                                    </Flex>
                                </Flex>
                                <Flex
                                    flexDirection={'column'}
                                    justifyContent={'end'}
                                    alignItems={'end'}
                                    gap={1}
                                >
                                    <Text color={'#DE6575'}>{item.price}</Text>
                                    <Text fontSize={'14px'}>{item.payment}</Text>
                                </Flex>
                            </Box>
                        )
                    })
                }

            </Flex>
        </Box>
    )
}
