import { PageContainer } from "../components"
import PageTitle from "../components/PageTitle"
import { StructuredText } from "react-datocms"
import { useLiveStaticElements, useStaff } from "../Store"
import { Box } from "@mui/material"


const Handout = () => {

	const {handout: handoutText} = useLiveStaticElements()

	return (
 		<PageContainer container>
			 <Box>
				<PageTitle>Virtuális konferenciaközpont használati útmutató</PageTitle>
				<Box sx={{color: 'primary.contrastText'}}>
					<StructuredText data={handoutText}></StructuredText> 
				</Box>
			 </Box>
		</PageContainer> 
	)
}

export default Handout