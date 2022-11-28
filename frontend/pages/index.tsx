import { Box } from "@mui/material";
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import HomePage from './home/homepage';
import NavBar from './home/navbar';

export default function Home() {

  return (
    <>
      <NavBar/>
      <Box sx={{height: "100px"}}></Box>
      <HomePage/>
    </>
  );
}
