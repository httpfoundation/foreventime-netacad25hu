import { PageContainer } from "../../components"
import PageTitle from "../../components/PageTitle"
import { Box, Container, Grid, Typography } from "@mui/material"
import telekomLogo from "../../assets/images/Telekom.png"
import microsoftLogo from "../../assets/images/ms-logo_HU.png"
import ciscoLogo from "../../assets/images/cisco2.png"
import pannonLogo from "../../assets/images/pannon-mik2.png"
import eltetokLogo from "../../assets/images/elte-tok2.png"
import netAcadLogo from "../../assets/images/netacad2.png"
import { styled } from "@mui/system"
import { useSponsorCategories } from "../../Store"

const Sponsors = () => {
	const sponsorCategories = useSponsorCategories()
	console.log({sponsorCategories})
	
	return (
		<PageContainer>
				<Container>
					<PageTitle>Támogatók és szervezők</PageTitle>
					
					
{/* 					<Grid
						container
						direction={"row"}
						spacing={5}
						sx={{}}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Grid item xs={12} xl={6} lg={6} display="flex" alignItems="center" justifyContent="center" textAlign="center" >
							<Sponsor image={microsoftLogo} link="https://microsoft.hu" />
						</Grid>
						<Grid item xs={12} xl={6} lg={6} display="flex" alignItems="center" justifyContent="center" textAlign="center" >
							<Sponsor image={telekomLogo} link="https://telekom.hu" />
						</Grid>
					</Grid>
					<Typography variant="h2" sx={{textAlign:"center", mb:4, mt:4,}}>Együttműködő partnerek</Typography>
					<Grid
						container
						direction={"row"}
						spacing={5}
						sx={{}}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Grid item xs={12} xl={3} lg={3} display="flex" alignItems="center" justifyContent="center" textAlign="center" >
							<Sponsor image={ciscoLogo} link="http://cisco.hu" />
						</Grid>
						<Grid item xs={12} xl={3} lg={3} display="flex" alignItems="center" justifyContent="center" textAlign="center" >
							<Sponsor image={pannonLogo} link="https://mik.uni-pannon.hu/" />
						</Grid>
						<Grid item xs={12} xl={3} lg={3} display="flex" alignItems="center" justifyContent="center" textAlign="center" >
							<Sponsor image={eltetokLogo} link="https://www.tok.elte.hu/" />
						</Grid>
						<Grid item xs={12} xl={3} lg={3} display="flex" alignItems="center" justifyContent="center" textAlign="center" >
							<Sponsor image={netAcadLogo} link="https://netacad.com/" />
						</Grid>

					</Grid>					
					
					 */}
					{sponsorCategories && sponsorCategories.map((category, index) => (
						<>
							<Typography variant="h2" color={theme => theme.palette.grey[400]} sx={{textAlign:"center", mb:4, mt:4}}>{category.name}</Typography>
							<ul style={{
								  display: "flex",
								  flexWrap: "wrap",
								  justifyContent: "center",
								  gap: "10px",
								  padding: 0,
								  listStyle: "none",
							}}>
								{category.sponsor && category.sponsor.map((sponsor, index) => (
									<li style={{flexBasis: "250px"}}>
										<Sponsor key={index} image={sponsor.logo.url} link={sponsor.url} name={sponsor.name} />
									</li>
								))}
							</ul>
						</>
					))}
					
					
				</Container>
		</PageContainer>
	)
}

const Sponsor = (props : {link: string, image: string, name?: string}) => {
	return (
		<div style={{textAlign: "center"}}>
			<a href={props.link} target="_blank" rel="noopener noreferrer"  >
					<img src={props.image} alt={props.name} {...props} style={{
						  
						  
						  height: "100%",
						  verticalAlign: "middle",
						  borderRadius: "5px",
						  maxHeight: "100px",
					}}/>
			</a>
		</div>
	)
}



export default Sponsors