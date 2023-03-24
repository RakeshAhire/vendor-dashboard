import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    TextArea,
    Select,
    Grid
} from "@chakra-ui/react";
import { AuthContext } from '../context/AuthContext';


const AddProducts = () => {
    const { state } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        price_slab: "",
        unitPrice: "",
        packedPrice: "",
        materialUsed: "",
        pack: [
            {
                quant: "",
                sizes: "",
            },
        ],
        avgrating: "",
        rating: "",
        info: "",
        brand: "",
        tags: [""],
        description: {
            heading: "",
            bullet_points: [""],
            ending: "",
        },
        additional_info: [""],
        series: [""],
        category: [""],
        discount: "",
        image: [""],
        review: "",
        size: [""],
        colour: [""],
        cod: "",
        shipping: "",
        delivery: "",
        items_left: "",
        sold_by_location: "",
        sold_by: "",
        emi: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveClick = async (event) => {
        event.preventDefault()
        console.log(formData)
        // try {
        //     const config = {
        //         headers: { Authorization: `Bearer ${state.token}` },
        //     };
        //     const data = {
        //         title: formData.title,
        //         price: formData.price,
        //         rating: formData.rating,
        //         description: formData.description,
        //         category: formData.category.split(',').map((item) => item.trim()),
        //         image: formData.image.split(',').map((item) => item.trim()),
        //         reviews: formData.review.split(',').map((item) => item.trim()),
        //         size: formData.size.split(',').map((item) => item.trim()),
        //         color: formData.colour.split(',').map((item) => item.trim()),
        //         tags: formData.tags.split(',').map((item) => item.trim()),
        //         productId: formData.productId,
        //         additionalInfo: formData.additionalInfo.split(',').map((item) => item.trim()),
        //     }
        //     const response = await axios.post('https://example.com/products', data, config)
        //     console.log(response.data)
        // } catch (error) {
        //     console.error(error)
        // }
    }
    return (
        <Grid gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={4} p={4} borderWidth="1px" borderRadius="lg" m={"auto"}>
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
                <FormLabel>Price Slab</FormLabel>
                <Input
                    type="number"
                    name="price_slab"
                    value={formData.price_slab}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Unit Price</FormLabel>
                <Input
                    name="unitPrice"
                    value={formData.unitPrice}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Packed Price</FormLabel>
                <Input
                    type="number"
                    name="packedPrice"
                    value={formData.packedPrice}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Material Used</FormLabel>
                <Input
                    type="text"
                    name="materialUsed"
                    value={formData.materialUsed}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Pack</FormLabel>
                <Input
                    type="text"
                    name="quant"
                    value={formData.pack[0].quant}
                    placeholder="Quantity"
                    onChange={(e) => setFormData({ ...formData, pack: [{ ...formData.pack[0], quant: e.target.value }, ...formData.pack.slice(1)] })} 
                />

                <Input
                    type="text"
                    name="sizes"
                    placeholder='Sizes'
                    value={formData.pack[0].sizes}
                     onChange={(e) => setFormData({ ...formData, pack: [{ ...formData.pack[0], sizes: e.target.value }, ...formData.pack.slice(1)] })}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Avg Rating</FormLabel>
                <Input
                    type="text"
                    name="avgrating"
                    value={formData.avgrating}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Rating</FormLabel>
                <Input
                    type="text"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Info</FormLabel>
                <Input
                    type="text"
                    name="info"
                    value={formData.info}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Brand</FormLabel>
                <Input
                    name="brand"
                    value={formData.brand}
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
                <FormLabel>Description</FormLabel>
                <Input

                    name="heading"
                    placeholder='Heading'
                    value={formData.description.heading}
                    onChange={(e) => setFormData({ ...formData, description: { ...formData.description, heading: e.target.value } })}
                />
                <Input

                    name="bullet_points"
                    placeholder='Bullet Points'
                    value={formData.description.bullet_points}
                    onChange={(e) => setFormData({ ...formData, description: { ...formData.description, bullet_points: e.target.value.split(", ") } })}
                />
                <Input

                    name="ending"
                    placeholder="Ending"
                    value={formData.description.ending}
                  onChange={(e) => setFormData({ ...formData, description: { ...formData.description, ending: e.target.value } })}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Additional_Info</FormLabel>
                <Input
                    type="number"
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Series</FormLabel>
                <Input
                    name="series"
                    value={formData.series}
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
                <FormLabel>Discount</FormLabel>
                <Input
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Image</FormLabel>
                <Input
                    type="file"
                    accept='image/*'
                    name="image"
                    value={formData.image}
                    multiple
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Review</FormLabel>
                <Input
                    type="text"
                    name="review"
                    value={formData.review}
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
                <FormLabel>Colour</FormLabel>
                <Input
                    name="colour"
                    value={formData.colour}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>COD</FormLabel>
                <Input
                    name="cod"
                    value={formData.cod}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Shipping</FormLabel>
                <Input
                    name="shipping"
                    value={formData.shipping}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Delivery</FormLabel>
                <Input
                    name="delivery"
                    value={formData.delivery}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Items left</FormLabel>
                <Input
                    name="items_left"
                    value={formData.items_left}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Sold By Location</FormLabel>
                <Input
                    name="sold_by_location"
                    value={formData.sold_by_location}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Sold By</FormLabel>
                <Input
                    name="sold_by"
                    value={formData.sold_by}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>EMI</FormLabel>
                <Input
                    name="emi"
                    value={formData.emi}
                    onChange={handleInputChange}
                />
            </FormControl>
            <Button colorScheme='blue' onClick={handleSaveClick}>Save</Button>
        </Grid>
    );
};

export default AddProducts;

