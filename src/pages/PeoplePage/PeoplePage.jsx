import { Remove } from "@mui/icons-material";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { BASIC_URL } from "../../App";
import { useSelector } from "react-redux";
import TituloBannerMove from "../../components/TituloBannerMove";

export const PeoplePage = () => {
    const selectedColor = useSelector((state)=>state.configuration.color);
    const darkMode = useSelector((state)=>state.configuration.darkMode);
    return (
        <>
            <section >
                <Box
                    sx={{
                        pt:{
                            xs: '60px',
                            sm: '130px',
                            md: '160px'
                        },
                    }}
                >
                    <TituloBannerMove
                        titulo={
                            <Box
                                sx={{
                                    color: darkMode ? 'white' : "black",
                                    cursor: "default",
                                    fontWeight: 900,
                                    fontSize: {
                                        xs: '130px',
                                        lg: '150px',
                                        xl: '180px'
                                    },
                                }}
                            >
                                ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp;
                                ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp;
                                ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp;
                                ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp; ARTISTUCHO RANDOM  &nbsp;
                            </Box>
                        }
                        speed={80}
                    />
                </Box>
            </section>
            <Box sx={{display:'flex', flexDirection: 'column', alignItems:'center', position: 'relative', bottom:{xs:'140px', sm: '200px', md: '250px'}, zIndex: 1000}}>
                <Box sx={{display: 'flex', flexDirection: 'column', width: {xs: '60%', lg: '500px'}, boxShadow: '2px 2px 10px black'}}>
                    <Grid component='img' src={`${BASIC_URL}/images/CARLA.png`} sx={{width: '100%'}} />
                    <Typography  sx={{ fontSize: {xs: '16px', sm: '30px', md: '34px'}, display: 'flex', flexDirection: 'row', justifyContent: 'center',bgcolor: selectedColor, color: 'white', fontWeight: '900', pr: 1, py: 1}}>
                        NOMBRE ARTISTA
                    </Typography>
                    {/* <Button sx={{alignSelf: 'center', fontSize: '24px', color: selectedColor, my: 2, '&:hover': {cursor: 'url("./images/faviconInterseccionBold.png") 20 20, auto'}}} onClick={() => handleCloseModal()}>
                        VOLVER
                    </Button> */}
                </Box>
                <Typography sx={{ color: darkMode ? 'white' : 'black', mx: {xs:6, sm: 12, md: 15}, mt: 10,  mb: 3, textAlign: 'justify', minWidth: {md:'350px', lg: '500px'}}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut cum, et quis aliquam nesciunt sint ipsam dicta magnam incidunt explicabo in consectetur quod iusto inventore placeat! Deserunt, quam. Autem, perspiciatis assumenda provident perferendis facilis corporis. Temporibus modi consequatur sint maxime, libero vel aut accusantium voluptate nisi, quasi facilis dignissimos provident laudantium rerum illum! Fuga, ducimus consectetur, cumque voluptatem consequuntur optio autem beatae reprehenderit vel ex quibusdam voluptatum. Nam quaerat dolorem at accusantium nisi laudantium tempore eos sint natus blanditiis, quas commodi. Aspernatur corporis obcaecati sapiente sint nobis placeat quod tempora amet similique. Nostrum cumque officia quidem. Officiis perferendis numquam tenetur facilis, animi sunt laborum, obcaecati saepe doloremque, suscipit eveniet. Illo a veritatis suscipit excepturi placeat facere ullam corrupti aspernatur eius provident quod blanditiis error, repudiandae eaque impedit quam odit reprehenderit? Molestias itaque, optio, architecto accusantium aspernatur minus excepturi earum vel harum odit eveniet, quas facere quod perferendis eos maiores corporis.
                </Typography>
                
            </Box>
        </>
    )
};