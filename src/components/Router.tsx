import { Routes, Route, useLocation } from "react-router-dom"
import Presenters from "../pages/Presenter/PresenterRouter"
import Talks from "../pages/Talk/TalkRouter"
import StagePage from '../pages/Stage/Stage'
import Home from "../pages/Home/Home"
import Reception from "../pages/Reception/Reception"
import BreakoutRoom from "../pages/BreakoutRoom/BreakoutRoom"
import Sponsors from "../pages/Sponsors/Sponsors"
import { useEffect } from "react"


const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		
		document.getElementById("main")?.scrollTo(0, 0)
	}, [pathname])

	return null
}


const Router = () =>{
	return (
		<>
		<ScrollToTop />
		<Routes>
			{/* Home */}
			<Route index element={<Home />} />
			{/* Reception */}
			<Route path="/recepcio" element={<Reception />} />
			{/* Stage */}
			<Route path={"/stage/:stageId"} element={<StagePage />} />
			<Route path={"/szekcio/:stageId"} element={<StagePage />} />
			{/* Presenter */}
			<Route path="/presenters/*" element={<Presenters />} />
			<Route path="/eloadok/*" element={<Presenters />} />
			{/* Talks / Presentations */}
			<Route path="/presentations/*" element={<Talks />} />
			<Route path="/eloadasok/*" element={<Talks />} />

			<Route path="/iok-cafe/*" element={<BreakoutRoom />} />
			<Route path="/tamogatok" element={<Sponsors />} />
		</Routes>
		</>
	)
}

export default Router