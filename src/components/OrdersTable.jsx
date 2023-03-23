import React, { useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Image,
    Menu, MenuButton, MenuList, MenuItemOption, Button
} from "@chakra-ui/react";

const OrdersTable = ({ data, handleStatus }) => {
    // console.log('data: ', data);
    const fields = ["Total Items", "Total Amount", "Delivery Adress", "Status", "Change Status"];

    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    {fields.map((field) => (
                        <Th key={field} backgroundColor="blue.400" color="white">{field}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {data?.map((item, i) => (
                    <Tr key={item.id}>
                        <Td><Image src={item.img} alt={item.title} w="60px" h="60px" borderRadius="50%" /></Td>
                        <Td>{item.title}</Td>
                        <Td>{item.price}</Td>
                        <Td>{item.qty}</Td>
                        <Td>
                            <Menu closeOnSelect={false}>
                                <MenuButton as={Button} colorScheme='blue' w='auto'>
                                    Update Status
                                </MenuButton>
                                <MenuList w="max-content">
                                    <MenuItemOption value='recieved' onClick={() => handleStatus('recieved')}>
                                        Recieved
                                    </MenuItemOption>
                                    <MenuItemOption value='dispatch' onClick={() => handleStatus('recieved')}>
                                        Dispatch
                                    </MenuItemOption>
                                    <MenuItemOption value='delivered' onClick={() => handleStatus('delivered')}>
                                        Delivered
                                    </MenuItemOption>
                                    <MenuItemOption value='canceled' onClick={() => handleStatus('canceled')}>
                                        Canceled
                                    </MenuItemOption>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default OrdersTable;