import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const educationnextBlue = "#273568"
const educationnextDarkBlue = "#132a73"
const educationnextGreen = "#93c47d"
const educationnextDarkGreen = "#6c915c"

const educationnextLightGreen = "#dfffd8"
const educationnextCreativeGreen = "#c1df61"
const educationnextCreativeDarkGreen = "#7e923f"
const educationnextCreativeDarkBlue = "#42518a"
const educationnextCreativeLightGreen = "#edffcf"

const iokDarkBlue = "#14475C"
const iokLightBlue = "#d6f4f5"


/* const colorDark = iokDarkBlue
const colorLight = iokLightBlue */
const colorDark = educationnextCreativeDarkBlue
const colorLight = educationnextCreativeLightGreen //"#fff" //educationnextLightGreen
const colorDashboardDark = educationnextCreativeGreen
const colorDashboardCaption = educationnextDarkGreen


let theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
		  main: '#ff6d00',
		  contrastText: '#fff',
		},
		secondary: {
		  main: colorDark, //iojDarkB
		  dark: colorDark,
		  light: colorLight,		  
		  contrastText: '#fff',
		},
		info: {
		  main: '#f18c4e',
		  dark: colorDashboardDark,

		},
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: '#14475C'
		},
	},
	typography: {
		//fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontFamily: '"Spartan", sans-serif',
		fontSize: 13.5,
		
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		body1: {
			color: '#14475C',
			fontSize: "0.95rem"
		},
		h1: {
			fontSize: '2.8rem',
			fontWeight: 700,
			color: '#14475C',
		},
		h2: {
			fontSize: '1.7rem',
			fontWeight: 700,
			color: '#14475C',
		},	
		h6: {
			fontSize: '18px',
			fontWeight: 400,
		}

	},
	components: {
		MuiTooltip: {
		  styleOverrides: {
			tooltip: {
			  lineHeight: "1.2rem !important",
			  backgroundColor: colorDark
			}
		  }
		}
	  }
})



theme.typography.h1 = {
	fontSize: '2.0rem',
	/*'@media (max-width:800px)': {
	  fontSize: '1.5rem',
	}, */

	[theme.breakpoints.up('xl')]: {
		fontSize: '2.8rem',
	  },
  }

  theme.typography.body1 = {
	fontSize: '0.8rem',
	/*'@media (max-width:800px)': {
	  fontSize: '1.5rem',
	}, */

	[theme.breakpoints.up('xl')]: {
		fontSize: '0.9rem',
	  },
  }

// theme = responsiveFontSizes(theme)

export default theme