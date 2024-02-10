import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { SendMonayData } from '../../data';

export default function SendMoney() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Box
            my={'20px'}
        >
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}

            >
                <Text fontSize={25}>Send Money</Text>
                <Link color={'#4C8BDE'}>View All</Link>
            </Flex>
            <Slider {...settings}>

                {
                    SendMonayData?.map((item) => {
                        return (
                            <Box
                                width={'100px'}
                                height={'100px'}
                                display={'flex !important'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                mt={1}
                            >
                                <Image
                                    width={'70px'}
                                    height={'70px'}
                                    rounded={'20px'}
                                    src={item.Image}
                                />
                                <Text>{item.text}</Text>
                            </Box>

                        )
                    })
                }






            </Slider>
        </Box>
    )
}
