import React from 'react'
import { Select } from '@chakra-ui/react';
import { useState } from 'react'
import OrdersTable from '../components/OrdersTable';
const products = [
  { id: 1, img: "https://cdn.shopify.com/s/files/1/0587/1625/8481/products/weightgain2.jpg?v=1667028435", title: "Muscel Power", price: 200, qty: 10 },
  { id: 2, img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/products/WeightPlus-02_540x.jpg?v=1676976580", title: "Weight Plus", price: 200, qty: 10 },
  { id: 3, img: "https://cdn.shopify.com/s/files/1/0587/1625/8481/products/weightgain2.jpg?v=1667028435", title: "Muscel Power", price: 200, qty: 10 },
  { id: 4, img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/products/WeightPlus-02_540x.jpg?v=1676976580", title: "Weight Plus", price: 200, qty: 10 },
  { id: 5, img: "https://cdn.shopify.com/s/files/1/0587/1625/8481/products/weightgain2.jpg?v=1667028435", title: "Muscel Power", price: 200, qty: 10 },
  { id: 6, img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/products/WeightPlus-02_540x.jpg?v=1676976580", title: "Weight Plus", price: 200, qty: 10 },
  { id: 7, img: "https://cdn.shopify.com/s/files/1/0587/1625/8481/products/weightgain2.jpg?v=1667028435", title: "Muscel Power", price: 200, qty: 10 },
  { id: 8, img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/products/WeightPlus-02_540x.jpg?v=1676976580", title: "Weight Plus", price: 200, qty: 10 },
];

const TodaysOrder = () => {
    const [data, setData] = useState(products)
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleStatus = (value) => {
      console.log('value: ', value);
      // setSelectedValue(value);
      // console.log(selectedValue);
    };
  
    const handleFilter = (e) => {
      const type = e.target.value;
      console.log('type: ', type);
    };
  return (
    <div>
    <Select placeholder='Filter option' variant="filled" onChange={handleFilter} mb={4}>
      <option value='recieved'>Recieved Orders</option>
      <option value='dispatched'>Dispatched Orders</option>
      <option value='delivered'>Delivered Orders</option>
      <option value='cancled'>Cancel Orders</option>
    </Select>
    <OrdersTable data={data} handleStatus={handleStatus} />
  </div>
  )
}

export default TodaysOrder
