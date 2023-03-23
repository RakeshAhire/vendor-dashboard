import React from 'react'
import { useState, useEffect } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    Select,
} from "@chakra-ui/react";

const AddProducts = () => {
    const product={
        title:"Shirt",
        price: 1200,
        rating: 3,
        description: "Its is a good ",
        catagory: ['pasta', 'tomatoes', 'garlic', 'olive oil', 'salt', 'pepper'],
        image: ['pasta', 'tomatoes', 'garlic', 'olive oil', 'salt', 'pepper'],
        reviews: ['pasta', 'tomatoes', 'garlic', 'olive oil', 'salt', 'pepper'],
        size: ['pasta', 'tomatoes', 'garlic', 'olive oil', 'salt', 'pepper'],
        color: ['pasta', 'tomatoes', 'garlic', 'olive oil', 'salt', 'pepper'],
        tags: ['pasta', 'tomatoes', 'garlic', 'olive oil', 'salt', 'pepper'],
        productId: "abc",
        additionalInfo: ['pasta', 'tomatoes', 'garlic', 'olive oil', 'salt', 'pepper']
        }
    const [formData, setFormData] = useState(product);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveClick = async (event) => {
        event.preventDefault()
        setFormData(formData);
            // try {
            //   const response = await axios.post('https://example.com/products', {
            //     title:formData.title,
            //     price:formData.price,
            //     rating:formData.rating,
            //     description:formData.description,
            //     category: formData.catagory.split(',').map((item) => item.trim()),
            //     image: formData.image.split(',').map((item) => item.trim()),
            //     reviews: formData.reviews.split(',').map((item) => item.trim()),
            //     size: formData.size.split(',').map((item) => item.trim()),
            //     color: formData.color.split(',').map((item) => item.trim()),
            //     tags: formData.tags.split(',').map((item) => item.trim()),
            //     productId:formData.productId,
            //     additionalInfo: formData.additionalInfo.split(',').map((item) => item.trim()),
            //   })
            //   console.log(response.data)
            // } catch (error) {
            //   console.error(error)
            // }
          }
    return (
        <Box maxW={"lg"} p={4} borderWidth="1px" borderRadius="lg" m={"auto"}>
            <FormControl mb={4}>
                <FormLabel>Title</FormLabel>
                <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Price</FormLabel>
                <Input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Rating</FormLabel>
                <Input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Category</FormLabel>
                <Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                </Select>
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Image</FormLabel>
                <Input
                    type="file"
                    name="image"
                    accept="image/*"
                    multiple="multiple"
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Size</FormLabel>
                <Input
                    type="text"
                    name="size"
                    value={formData.size}
                    
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Color</FormLabel>
                <Input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Tags</FormLabel>
                <Input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Product ID</FormLabel>
                <Input
                    type="text"
                    name="productId"
                    value={formData.productId}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Additional Info</FormLabel>
                <Textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                />
            </FormControl>
            <Button colorScheme='blue' onClick={handleSaveClick}>Save</Button>
        </Box>
    );
};

export default AddProducts;

