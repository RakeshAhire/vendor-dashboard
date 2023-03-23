import React from 'react'
import { HStack, Input, Icon } from '@chakra-ui/react';
import { BsSearch } from "react-icons/bs"

const SearchInput = ({handleSearch,type=""}) => {
  return (
    <HStack p={"10px 15px"}
        bgColor={"gray.100"}
        variant='filled'
        border="1px"
        borderColor='gray.200'
        borderRadius={8}
        alignItems="center"
        w="90%"
      >
        <Icon as={BsSearch} mr={2} />
        <Input
          onChange={(e)=>handleSearch(e)}
          placeholder={`Search ${type} `} 
          variant='unstyled'
        />
      </HStack>
  )
}

export default SearchInput
