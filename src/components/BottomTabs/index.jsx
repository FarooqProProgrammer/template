import { Box } from '@chakra-ui/react'
import { CiCreditCard1, CiHome } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";

import React from 'react'

export default function BottomTabs() {
    return (
        <Box
            width={'100%'}
            py={'1px'}
            border={'1px solid #999'}
            position={'fixed'}
            bottom={'0px'}
            // top={'614px'}    
            display={'grid'}
            gridTemplateColumns={'repeat(5,1fr)'}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <CiCreditCard1 size={40} />
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <FaChartLine size={36} />
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                bgColor={'#4C8BDE'}
                position={'relative'}
                top={'-30px'}
                py={'10px'}
                rounded={'10px'}
            >
                <CiHome size={36} color='#FFF' />
            </Box>

            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <RiTodoLine size={40} />
            </Box>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <IoIosMore size={36} />
            </Box>

        </Box>
    )
}
