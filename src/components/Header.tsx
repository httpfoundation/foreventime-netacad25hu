import { AppBar, Toolbar, Typography, Drawer, List, ListItemText, ListItemIcon, ListItemButton, ListSubheader, Box, IconButton, Avatar, Divider, Fab, Tooltip, Zoom } from '@mui/material'

import { Home as HomeIcon, Menu as MenuIcon, People as PeopleIcon, Coffee as CoffeeIcon, Star as StarIcon, EventNote as EventNoteIcon, LiveTv as LiveTvIcon, Logout as LogoutIcon, Info as InfoIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material'

import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useStages, usePageTitle, useRegistration } from "../Store"
import iokLogo from "../assets/images/netacad_logo.png"
//import iokLogo from "../assets/images/iok2022_logo_w_httpw_sm.png"
//import educationnextLogo from "../assets/images/educationnextlogo_inverz.png"
import {styled} from "@mui/system"

type MenuItem = {
	label: string,
	to: string,
	icon?: React.ReactElement,
	divider?: false
}
type DividerMenuItem = {
	divider: true,
	label?: string,
	icon?: React.ReactElement
}

const Header = () => {
	const isInfoButtonVisible = true
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [registration, loading] = useRegistration()
	const stages = useStages()

	const menuItems = useMemo<(MenuItem | DividerMenuItem)[]>(() => [

		{label: 'Köszöntő', to: '/koszonto', icon: <EventNoteIcon />},
		{label: 'Program', to: '/eloadasok', icon: <EventNoteIcon />},
		{label: 'Előadók', to: '/eloadok', icon: <PeopleIcon />},
		{label: 'Nagyelőadó', to: '/szekcio/plenaris', icon: <EventNoteIcon />},
/*  		{label: 'IOK Cafe', to: '/iok-cafe', icon: <CoffeeIcon />}, */
		{label: 'Díjalapítók', to: '/tamogatok', icon: <StarIcon />},
		/* {label: 'Értékelő űrlap', to: '/ertekeles', icon: <StarIcon />}, */
		{divider: true},
		{label: 'Kijelentkezés', to: '/kijelentkezes', icon: <LogoutIcon />},
	], [stages])

	const pageTitle = usePageTitle()
	useEffect(() => {
		document.title = pageTitle ? "NetAcad 25 | " + pageTitle : "NetAcad 25"
	}, [pageTitle])
	
	
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => setDrawerOpen(false), [location.pathname])

	return (<>
	

		<Drawer 
			anchor="right" 
			open={drawerOpen}  
			onClose={() => setDrawerOpen(false)} 
			PaperProps={{ sx: { bgcolor: "primary.dark" } }}
		>
			<Box sx={{ width: 370, pt: '64px', maxWidth: 'calc(100vw - 20px)', backgroundColor: "primary.dark"}} role="presentation">
				<List>
					{menuItems.map((menuItem, index) => {

						if (menuItem.divider && menuItem.label) return <ListSubheader key={index}>{menuItem.icon ?? null}{menuItem.label}</ListSubheader>
						if (menuItem.divider) return <Divider key={index} />
						const selected = menuItem.to === location.pathname
						return (
							<ListItemButton selected={selected} key={index} component={Link} to={menuItem.to} onClick={() => setDrawerOpen(false)}>
								{
									menuItem.icon && (
									<ListItemIcon>
										<Avatar sx={{ bgcolor: selected ? 'secondary.main' : '' }}>{menuItem.icon}</Avatar>
									</ListItemIcon>)
								}
								<ListItemText>
									<span style={{fontWeight: selected ? 600 : 500}}>{menuItem.label}</span>
								</ListItemText>
							</ListItemButton>
						)
					})}
				</List>
			</Box>
		</Drawer>

		
		<AppBar position="fixed" color="inherit" sx={{
			zIndex: theme => theme.zIndex.drawer + 1, backgroundColor: "info.main"
		}}>
			<Toolbar>
				<Box sx={{flex: '0 0 auto', transform: 'translateY(2px)'}}>
					<Link to="/"><Logo src={iokLogo} />	</Link>
				</Box>
				<Typography variant="h6" noWrap sx={{flex: 1, transform: 'translateY(2px)'}} align="center">
					{/* {pageTitle} */}
				</Typography>
				<Typography variant="h6" noWrap sx={{flex: '0 0 auto', transform: 'translateY(2px)', mr: 2, display: {xs: 'none', md: 'block'}}} align="center">
					{(registration?.id) ? registration?.name : ""}
				</Typography>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
           			<MenuIcon />
          		</IconButton>
			</Toolbar>
		</AppBar>
		{location.pathname !== "/" && (
			<Zoom in>
				<Tooltip title="Vissza az aulába" placement="bottom" arrow>
					<Fab color="secondary" aria-label="home" sx={{position: 'absolute', right: 30, top: {lg: 80, xs: 'unset'}, bottom: {lg: 'unset', xs: 10}, zIndex: 800}} component={Link} to="/" >
						<HomeIcon />
					</Fab>
				</Tooltip>	
			</Zoom>
		)}

{/* 		{(location.pathname !== "/infopult") && isInfoButtonVisible &&  (
			<Zoom in>
				<Tooltip title="Tovább az információs pulthoz" placement="bottom" arrow>
					<Fab color="secondary" sx={{position: 'absolute', right: location.pathname !== "/" ? 100 : 30, top: 80, zIndex: 800, display: {lg: 'flex', xs: 'none'}}} component={Link} to="/infopult" >
						<InfoIcon />
					</Fab>
				</Tooltip>
			</Zoom>
			)
		} */}

		{ (location.pathname !== "/" && !location.pathname.includes("/szekcio")) && (
			<Zoom in>
				<Tooltip title="Vissza" placement="bottom" arrow>
					<Fab color="secondary" sx={{position: 'absolute', right: location.pathname !== "/infopult" ? 100 : 100, top: 80, zIndex: 800, display: {lg: 'flex', xs: 'none'}}} onClick={()=> navigate(-1)} >
						<ArrowBackIcon />
					</Fab>
				</Tooltip>
			</Zoom>
			)
		}
	</>)
}

const Logo = styled('img')`
	padding-top:5px;
	height: 38px;
	/*width: 207px;*/
	

`

export default Header