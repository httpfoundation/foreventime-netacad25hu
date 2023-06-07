import { PageContainer, PageSubtitle, Paragraph } from "../components"
import Bubble from "../components/Bubble/Bubble"
import PageTitle from "../components/PageTitle"
import { Box, Button, Container, Grid, Typography, TypographyProps } from "@mui/material"
import { styled } from "@mui/system"
import { StructuredText } from "react-datocms"
import { useLiveStaticElements, usePresident, useRegistration } from "../Store"
import {Home as HomeIcon, PermDeviceInformation as InformationIcon } from '@mui/icons-material'
import { Link } from "react-router-dom"
import { iokLocalStorage } from "../utils"
import almasibelaimg from "../assets/images/almasi_bela_2.jpg"

const ChairmanImage = styled('img')`
	width: 100%;
	height: auto;
	border-radius: 20px;
`



const Title = styled(Typography)<TypographyProps>(({theme}) => `
	text-align: "left";
	font-weight: 500;
	margin: 0 0 0 0;
`)

const Name = styled(Typography)<TypographyProps>(({theme}) => `
	text-align: "left";
	font-weight: 700;
    font-size: 1.6rem;
	margin: 0 0 0 0;
`)

const Welcome = () => {
    const {menu} = useLiveStaticElements()
	const [registration, loading] = useRegistration()
	const chairman = usePresident() 
    iokLocalStorage("set", "welcome", "true") 
	return (
 		<PageContainer container>
            <PageTitle>NETACAD oktatásért díjak</PageTitle>
			<Grid container spacing={4} sx={{mb: 4}}>
				<Grid item xs={12} md={4}>
					<ChairmanImage src={almasibelaimg} alt={"Almási Béla"} />
					<Box sx={{color:"primary.contrastText"}}>
						<Name >{"dr. Almási Béla"}</Name>
						<Title>{"docens, Debreceni Egyetem"}</Title>
						<Title>{"1966-2015"}</Title>
					</Box>
				</Grid>
				<Grid item xs={12} md={8} sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end", pb: 1, color:"primary.contrastText"}}>
                    <StructuredText data={menu}></StructuredText> 
						

					
				</Grid>
				<Grid item xs={12} md={12} sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end", pb: 1}}>

				</Grid>                
			</Grid>
		</PageContainer> 
	)
}

export default Welcome