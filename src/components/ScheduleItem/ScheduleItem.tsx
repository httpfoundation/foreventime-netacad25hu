import { DatoSpeaker, DatoTalk } from "../../types"
import "./ScheduleItem.scss"
import { styled } from '@mui/system'
import { ScheduleTimeCaption } from ".."
import { useMemo } from "react"
import { useStore } from "../../Store"

/* Egy napirendi pont komponense */

const TalkTitle = styled('div')`
		transition: all 0.2s ease-out;
		font-size: 1.1rem;
		font-weight: 700;
		padding: 0px 0 1px 0;`

const SpeakerCaption = styled('div')`
		transition: all 0.2s ease-out;
		font-size: 0.75rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.5);`

const Speaker = (props: {speaker: DatoSpeaker}) => {
	const { speaker } = props
	return (
		<SpeakerCaption>
			{`${speaker.name}, ${speaker.title}, ${speaker.company}`}
		</SpeakerCaption>
	)
}

const Speakers = (props: {speakers: DatoSpeaker[] | undefined}) => {
	const { speakers } = props
	return (
		<>
			{speakers?.map((speaker) => (
				<Speaker
					key={speaker.id} speaker={speaker}
				/>
			))}
		</>
	)	
}

const ScheduleItem = (props: {
	open: boolean
	talk: DatoTalk
}) => {
	const double = false

	const { talk } = props
	const store = useStore()
	const speakerIds = useMemo(() => talk.speaker?.map(s => s.id), [talk.speaker])
	const speakers = useMemo(() => store.presenters.filter(p => speakerIds.includes(p.id)), [store.presenters, speakerIds])	

	return (
		<div
			className={`shcedule-item ${props.open ? "open" : ""} ${double ? "double-presenter" : ""}`}
			//onClick={props.onClick}
		>
			<div className="images">
				{speakers.map((speaker) => (
					<div
						key={speaker.id}
						className="image"
						style={{ backgroundImage: "url('" + speaker.image?.url + "')" }}
					></div>
				))}
			</div>
			<div className="content">
				<ScheduleTimeCaption date={talk.start} />
				<TalkTitle>{talk.title}</TalkTitle>
				<Speakers speakers={speakers} />
				<div className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Rerum repellendus eos voluptas cupiditate quasi labore et
					velit asperiores minus recusandae a dignissimos, quis natus
					numquam cumque quod dicta placeat incidunt.
				</div>
			</div>
		</div>
	)
}

export default ScheduleItem