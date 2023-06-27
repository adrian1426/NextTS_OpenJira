import React from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import Navbar from '../ui/Navbar';

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
      {/* SideBar */}

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  )
};

export default MainLayout;