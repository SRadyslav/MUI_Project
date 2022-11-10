import React from 'react'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import { Feed } from './components/Feed'
import { Rightbar } from './components/Rightbar'
import { Sidebar } from './components/Sidebar'
import { Navbar } from './components/Navbar'

const AddPost = React.lazy(()=> import('./components/AddPost'))
const App = () => {
    const [mode, setMode] = React.useState("light")
    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <AddPost />
                </React.Suspense>
            </Box>
        </ThemeProvider>
    )
}

export default App
