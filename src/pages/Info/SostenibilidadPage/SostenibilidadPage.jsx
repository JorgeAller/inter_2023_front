import { Box } from "@mui/material"
import { useIntl } from "react-intl";
import TituloBannerMove from "../../../components/TituloBannerMove";

export const SostenibilidadPage = () => {

    /* ###########################################################
    ############# DECLARACIONES DE TRADUCCIONES ##################
    ############################################################## */
    const intl = useIntl();
    const sostenibilidadTitulo = intl.formatMessage({id: "sostenibilidad-titulo"});
    const sostenibilidadDescripción = intl.formatMessage({id: "sostenibilidad-descripcion"});

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
                            {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp;
                            {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp;
                            {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp;
                            {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp; {sostenibilidadTitulo} &nbsp;
                        </Box>
                    }
                    speed={90}
                />
            </Box>
         
            <Box sx={{mx: 6, mt: 5, whiteSpace: 'pre-line', fontSize: 18, borderLeft: '5px solid black', pl: 4, py: 2}}> 
                {intl.formatMessage({id: "sostenibilidad-texto"})}
            </Box>
        </Box>
    )
    
}