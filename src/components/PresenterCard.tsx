import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { DatoSpeaker } from "../types"

const PresenterWrapper = styled('div')(({ theme }) => `
	display: flex;
	flex-direction: column;
	height: 100%;
	box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
	border-radius: 12px;
	overflow: hidden;
	transition: all .2s ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.08);
	}
`)

const PresenterCardImage = styled('img')(({ theme }) => `
	width: 100%;
	height: auto;
	aspact-ratio: 1;
`)

const PresenterDetails = styled('div')(({ theme }) => `
	flex: 1;
	min-height: 80px;
	padding: 5px;
`)

const PresenterName = styled('div')(({ theme }) => `
	font-weight: 700;
    font-size: 0.9rem;
    margin: 7px 0;
	text-align: center;
`)

const PresenterTitle = styled('div')(({ theme }) => `
	font-size: 0.7rem;
	text-align: center;
`)

const PresenterCard = (props: {presenter: DatoSpeaker}) => {
	const { presenter } = props
	return (
		<Link to={`/eloadok/${presenter.slug}`}>
		<PresenterWrapper>
			<PresenterCardImage src={props.presenter.image?.url} />
			<PresenterDetails>
				<PresenterName>{presenter.name}</PresenterName>
				<PresenterTitle>{presenter.title}, {presenter.company}</PresenterTitle>
			</PresenterDetails>
		</PresenterWrapper>
		</Link>
	)
}

export const PresenterGrid = styled('div')`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
    gap: 30px;
`
export default PresenterCard