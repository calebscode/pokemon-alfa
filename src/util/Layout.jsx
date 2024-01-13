import { Box, CssBaseline } from '@mui/material'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <Box>
      <CssBaseline/>
      <Navbar/>
      <Box component="main">
        {children}
      </Box>
    </Box>
  )
}
