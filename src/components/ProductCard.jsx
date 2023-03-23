import { Badge, Box, Image, Text } from '@chakra-ui/react'

export const ProductCard = ({ property }) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.image[0]} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.brand} &bull; {property.materialUsed}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>
        <Text noOfLines={[1, 2, 3]}>
          {property.info}
        </Text>
        <Box >
          Price: <Text as='span' fontWeight="bold"> {property.price}</Text>
          <Box as='span' color='gray.600' fontSize='sm' ml={1}>
            ₹/Single Peice
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            Reviews: {property.review}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}