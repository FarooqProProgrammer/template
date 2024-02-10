import { Box } from '@chakra-ui/react'
import React from 'react'
import RecentActivity from '../../components/RecentActivity'
import AccountActivity from '../../components/AccountActivity'
import SendMoney from '../../components/SendMoney'

export default function Home() {
    return (
        <Box
            padding={'20px'}

            bgColor={'#F7F7F7'}
            height={'100vh'}
            overflowY={'auto'}
        >
            <RecentActivity />
            <AccountActivity />
            <SendMoney />
        </Box>
    )
}
