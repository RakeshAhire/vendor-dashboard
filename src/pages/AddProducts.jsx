import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
    Grid,
    Textarea,
    Image
} from "@chakra-ui/react";
import { AuthContext } from '../context/AuthContext';


const AddProducts = () => {
    const { state } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        price_slab: 0,
        unitPrice: 0,
        packedPrice: 0,
        materialUsed: "",
        pack: [
            {
                quant: 0,
                sizes: 0,
            },
        ],
        avgrating: 0,
        rating: 0,
        info: "",
        brand: "",
        tags: [""],
        description: {
            heading: "",
            bullet_points: [],
            ending: "",
        },
        additional_info: [""],
        series: [""],
        category: [""],
        discount: 0,
        image: "",
        review: "",
        size: [""],
        colour: [""],
        cod: "",
        shipping: "",
        delivery: 0,
        items_left: 0,
        sold_by_location: "",
        sold_by: "",
        emi: 0,
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log('value: ', value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleImage = (e) => {

        let reader = new FileReader();
        // console.log(e.target.files)
        reader.readAsDataURL(e.target.files[0]);
        // console.log( e.target.files);
        reader.onload = () => {
            setFormData({ ...formData, image: [...formData.image, reader.result], ...formData.image.slice(1) })
            // setPhoto(reader.result);
            // console.log('reader.result: ', reader.result);
        }
    }
    const handleSaveClick = async (event) => {
        event.preventDefault()

        try {
            const config = {

                headers: { Authorization: `${state.token}` },

            };
            // console.log('config: ', config);
            const data = {
                title: formData.title,
                price: Number(formData.price),
                price_slab: Number(formData.price_slab),
                unitPrice: Number(formData.unitPrice),
                packedPrice: Number(formData.packedPrice),
                materialUsed: formData.materialUsed,
                pack: [
                    {
                        quant: Number(formData.pack[0].quant),
                        sizes: Number(formData.pack[0].sizes),
                        // sizes: formData.pack[0].sizes.split(',').map((item) => item.trim()),
                    },
                ],
                avgrating: Number(formData.avgrating),
                rating: Number(formData.rating),
                info: formData.info,
                brand: formData.brand,
                tags: formData.tags.split(',').map((item) => item.trim()),
                description: {
                    heading: formData.description.heading,
                    bullet_points: formData.description.bullet_points.split(',').map((item) => item.trim()),
                    ending: formData.description.ending,
                },
                additional_info: formData.additional_info.split(",").map((item) => item.trim()),
                series: formData.series.split(',').map((item) => item.trim()),
                category: formData.category.split(',').map((item) => item.trim()),
                discount: Number(formData.discount),
                image: formData.image,
                review: formData.review,
                size: formData.size.split(',').map((item) => item.trim()),
                colour: formData.colour.split(',').map((item) => item.trim()),
                cod: formData.cod,
                shipping: formData.shipping,
                delivery: Number(formData.delivery),
                items_left: Number(formData.items_left),
                sold_by_location: formData.sold_by_location,
                sold_by: formData.sold_by,
                emi: Number(formData.emi),
            }
            console.log(data)
            const response = await axios.post('https://erin-tough-viper.cyclic.app/product/add', data, {
                headers: {
                    Authorization: `${state.token}`
                }
            });
            // axios.post("https://erin-tough-viper.cyclic.app/cart/add", data, )
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
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
                type="number"
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
                <Textarea
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
                    placeholder='Add Comma after each Tag'
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
                    placeholder='Add Comma after each Bullet Point'
                    value={formData.description.bullet_points}
                    onChange={(e) => setFormData({ ...formData, description: { ...formData.description, bullet_points: e.target.value } })}
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
                    name="additional_info"
                    placeholder='Add Comma after each Additional Info'
                    value={formData.additional_info}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Series</FormLabel>
                <Input
                    name="series"
                    placeholder='Add Comma after each Additional Series'
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
                    <option value="">Select</option>
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
                    multiple
                    onChange={handleImage}
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
                    placeholder='Add Comma after each Additional Size'
                    value={formData.size}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl mb={4}>
                <FormLabel>Colour</FormLabel>
                <Input
                    name="colour"
                    placeholder='Add Comma after each Additional Colour'
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

