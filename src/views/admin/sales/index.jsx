/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { SimpleGrid } from '@chakra-ui/react';

const SalesBillForm = () => {
  const [saleData, setSaleData] = useState({
    product_id: '',
    hsn_code: '',
    article: '',
    color: '',
    size: '',
    quantity: '',
    mrp: '',
    rate: '',
    gst: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSaleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateAmount = () => {
    const quantity = parseFloat(saleData.quantity) || 0;
    const rate = parseFloat(saleData.rate) || 0;
    const gstRate = parseFloat(saleData.gst) || 0;
    const baseAmount = quantity * rate;
    const gstAmount = baseAmount * (gstRate / 100);
    return (baseAmount + gstAmount).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedAmount = calculateAmount();
    setSaleData((prev) => ({
      ...prev,
      amount: calculatedAmount,
    }));
    // Add your submission logic here
    console.log(saleData);
  };

  return (
    <Flex
      maxW="container.xl"
      mx="auto"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Box
        w="full"
        maxW="800px"
        bg="white"
        p={8}
        borderRadius="xl"
        boxShadow="md"
      >
        <Heading textAlign="center" mb={6}>
          Sales Bill
        </Heading>

        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl>
              <FormLabel>Product ID</FormLabel>
              <Input
                name="product_id"
                value={saleData.product_id}
                onChange={handleInputChange}
                placeholder="Product ID"
              />
            </FormControl>

            <FormControl>
              <FormLabel>HSN Code</FormLabel>
              <Input
                name="hsn_code"
                value={saleData.hsn_code}
                onChange={handleInputChange}
                placeholder="HSN Code"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Article</FormLabel>
              <Input
                name="article"
                value={saleData.article}
                onChange={handleInputChange}
                placeholder="Article"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Color</FormLabel>
              <Input
                name="color"
                value={saleData.color}
                onChange={handleInputChange}
                placeholder="Color"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Size</FormLabel>
              <Input
                name="size"
                value={saleData.size}
                onChange={handleInputChange}
                placeholder="Size"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Quantity</FormLabel>
              <Input
                name="quantity"
                type="number"
                value={saleData.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
              />
            </FormControl>

            <FormControl>
              <FormLabel>MRP</FormLabel>
              <Input
                name="mrp"
                type="number"
                value={saleData.mrp}
                onChange={handleInputChange}
                placeholder="Maximum Retail Price"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Rate</FormLabel>
              <Input
                name="rate"
                type="number"
                value={saleData.rate}
                onChange={handleInputChange}
                placeholder="Rate"
              />
            </FormControl>

            <FormControl>
              <FormLabel>GST (%)</FormLabel>
              <Input
                name="gst"
                type="number"
                value={saleData.gst}
                onChange={handleInputChange}
                placeholder="GST Percentage"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input
                name="amount"
                value={saleData.amount}
                isReadOnly
                placeholder="Calculated Amount"
              />
            </FormControl>
          </SimpleGrid>

          <Flex justifyContent="center" mt={6}>
            <Button colorScheme="blue" type="submit" w="200px">
              Generate Sales Bill
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default SalesBillForm;
