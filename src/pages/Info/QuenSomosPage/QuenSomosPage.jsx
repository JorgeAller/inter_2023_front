import { Box } from "@mui/material"
import { useIntl } from "react-intl";
import TituloBannerMove from "../../../components/TituloBannerMove";

export const QuenSomosPage = () => {

    /* ###########################################################
    ############# DECLARACIONES DE TRADUCCIONES ##################
    ############################################################## */
    const intl = useIntl();
    const quenSomosTitulo = intl.formatMessage({id: "quenSomos-titulo"});
    const quenSomosDescripcion = intl.formatMessage({id: "quenSomos-descripcion"});

    return (
        <Box  >
            <Box >
                <TituloBannerMove
                    titulo={
                        <Box
                            sx={{
                                color: "black",
                                cursor: "default",
                                fontWeight: 900,
                                fontSize: {
                                    xs: '80px',
                                    md: '100px',
                                    lg: '150px',
                                    xl: '180px'
                                },
                            }}
                        >
                            {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp;
                            {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp;
                            {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp;
                            {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp; {quenSomosTitulo} &nbsp;
                        </Box>
                    }
                    speed={90}
                />
            </Box>
            <Box >
                <TituloBannerMove
                    titulo={
                        <Box
                            sx={{
                                fontWeight: 900,
                                fontSize: '40px',
                                color: "black",
                                cursor: "default",
                                WebkitTextStroke: "0px",
                            }}
                        >
                            {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp;
                            {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp;
                            {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp;
                            {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp; {quenSomosDescripcion} &nbsp; &nbsp; &nbsp;
                        </Box>
                    }
                    speed={60}
                />
            </Box>
            <Box sx={{mx: 6, mt: 10, whiteSpace: 'pre-line', fontSize: 18, borderLeft: '5px solid black', pl: 4, py: 2}}> 
                {intl.formatMessage({id: "quenSomos-texto"})}
            </Box>
        </Box>
    )
    
}