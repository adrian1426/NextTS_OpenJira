import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import Navbar from '../ui/Navbar';
import Sidebar from '../ui/Sidebar';

interface Props {
  title?: string;
  children: React.ReactNode
}

const MainLayout = (props: Props) => {
  const { title, children } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  )
};

export default MainLayout;