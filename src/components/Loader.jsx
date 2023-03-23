import { Box, SkeletonText,Skeleton } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return (
        <Box padding='6' boxShadow='lg' bg='white' borderRadius={4}>
            <Skeleton height='150px'></Skeleton>
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
        </Box>
    )
}

export default Loader
