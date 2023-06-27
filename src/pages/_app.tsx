import '@/styles/globals.css';
import { muiTheme } from '@/theme/muitheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
