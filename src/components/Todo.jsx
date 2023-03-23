import React, { useState } from "react";
import {
  Flex,
  Checkbox,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Todo = ({ todo, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { colorMode } = useColorMode();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <Flex align="center">
      <Checkbox
        mr={2}
        isChecked={isChecked}
        onChange={handleCheckboxChange}
        textDecoration={isChecked ? "line-through" : "none"}
      >
        <Text
          fontSize={isChecked ? "lg" : "md"}
          color={isChecked ? "gray.500" : "gray.800"}
        >
          {todo.task}
        </Text>
      </Checkbox>
      <IconButton
        icon={<FaTrash />}
        onClick={handleDeleteClick}
        variant="ghost"
        size="sm"
        aria-label="Delete Todo"
        ml="auto"
        color={colorMode === "light" ? "gray.500" : "gray.200"}
        _hover={{
          color: colorMode === "light" ? "gray.700" : "gray.300",
        }}
      />
    </Flex>
  );
};

export default Todo;
