import { Box, Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <Grid>
            <Box>
                <Typography>PAGINA NO ENCONTRADA</Typography>
                <Link to='/'>
                    <Button variant="outlined">ATRAS</Button>
                </Link>
            </Box>
        </Grid>
    )
}