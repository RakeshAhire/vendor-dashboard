import React, { useState } from "react";
import { Box, Heading, Button, Input,Flex } from "@chakra-ui/react";
import Todo from "./Todo";

const todosData = [
    { id: 1, task: "Some orders are delivere so change status" },
    { id: 2, task: "10 orders are COD" },
    { id: 3, task: "3 orders are pending to dispatch" },
];

const TodoList = () => {
    const [todos, setTodos] = useState(todosData);
    const [newTodo, setNewTodo] = useState("");

    const handleNewTodoChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleNewTodoSubmit = () => {
        if (newTodo.trim() !== "") {
            const newId = todos[todos.length - 1].id + 1;
            const newTodoObject = { id: newId, task: newTodo };
            setTodos([...todos, newTodoObject]);
            setNewTodo("");
        }
    };
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <Box textAlign="center" position="relative" p={"20px 10px"} boxShadow={"md"}>
            <Heading as="h4" size="xl" mb={4}>
                Todo List
            </Heading>

            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
            ))}
            <Flex justifyContent="space-between" gap={2}>
                <Input
                    placeholder="Add a new todo..."
                    size="md"
                    mt={4}
                    value={newTodo}
                    variant="filled"
                    onChange={handleNewTodoChange}
                />
                <Button onClick={handleNewTodoSubmit} colorScheme="green" mt={4} >
                    Add
                </Button>
            </Flex>
        </Box>
    );
};

export default TodoList;