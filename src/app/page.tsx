"use client";

import Header from "@/components/header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Fade } from "react-awesome-reveal";
import { useRef, useState } from "react";
import { Error, getAllTeam } from "@/action";
import React from "react";

import { User } from "@/db/schema";
import { useResize } from "@/components/useResize";
import DecryptedText from "@/components/ui/DecryptedText";
import Threads from "@/components/ui/Threads";
import BlurText from "@/components/ui/BlurText";
import Squares from "@/components/ui/Squares";
import ASCIIText from "@/components/ui/ASCIIText";
import SplineBlock from "@/components/ui/Spline";
import TeamSkeleton from "@/components/ui/Team-skeleton";
import Team from "@/components/ui/Team";
import ProjectCarousel from "@/components/ui/project-carousel";

import SendForm from "@/components/forms/send-form";

export default function Home() {
	const { height, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
	const [team, setTeam] = useState<User[]>([]);
	React.useEffect(() => {
		(async () => {
			const teamResponce: User[] | Error = await getAllTeam();
			if (Array.isArray(teamResponce) && teamResponce.length > 0) {
				setTeam(teamResponce);
			}
		})();
	}, []);
	const ref = useRef(null);

	const getParallaxHeight = (baseHeight: number) =>
		baseHeight +
		(+(500 / height).toFixed(2) * team.length) /
			(isScreenXl ? 3 : isScreenMd ? 2 : 1);
	return (
		<>
			<Parallax
				pages={
					!isScreenSm
						? getParallaxHeight(7)
						: !isScreenMd
							? getParallaxHeight(8)
							: !isScreenLg
								? getParallaxHeight(5.2)
								: !isScreenXl
									? getParallaxHeight(5.6)
									: getParallaxHeight(4.9)
				}
				className="relative"
			>
				<Header refer={ref} />
				<ParallaxLayer
					ref={ref}
					className="absolute h-[100vh] -z-20"
					sticky={{ start: 0, end: !isScreenMd ? 7 : !isScreenLg ? 5 : 4 }}
				>
					<Squares
						speed={0.2}
						squareSize={40}
						direction="diagonal" // up, down, left, right, diagonal
						borderColor="#fff"
						hoverFillColor="#222"
					/>
				</ParallaxLayer>
				<ParallaxLayer
					speed={0.5}
					offset={0}
					factor={1}
					className="bg-gray-900 mx-auto  px-2 pt-7 lg:pt-14  lg:px-8"
				>
					<div
						style={{
							width: "100%",
							height: "100vh",
							zIndex: 40,
							left: 0,
							position: "absolute",
						}}
					>
						<Threads amplitude={1.6} distance={0.6} enableMouseInteraction={false} />
					</div>

					<div className="flex justify-between mt-14 flex-col-reverse lg:flex-row  w-11/12 mx-auto   items-center">
						<div className=" max-w-3xl  ">
							<div className="block mb-7">
								<DecryptedText
									text="Команда разработки Altergemu"
									speed={45}
									animateOn="view"
									maxIterations={20}
									characters="ALTERGEMUaltergemu!?"
									className=" text-balance text-3xl  sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-green-400 revealed"
									parentClassName="all-letters "
									encryptedClassName="encrypted text-3xl  sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-green-400"
									sequential={true}
								/>
							</div>
							<div className="block">
								<DecryptedText
									text="Команда разработчиков-профессионалов, разрабатывающая широкий спектр продуктов, начиная от сайтов и игр, заканчивая системой контроля версий"
									speed={3}
									animateOn="view"
									maxIterations={10}
									sequential={true}
									characters="alter1234!?"
									className=" mt-8 text-pretty text-lg sm:text-xl lg:text-xl xl:text-xl/8  font-medium text-green-400 revealed"
									parentClassName="all-letters "
									encryptedClassName="text-lg sm:text-xl lg:text-xl xl:text-xl/8 font-medium text-green-400 encrypted"
								/>
							</div>
						</div>
						<SplineBlock isScreenLg={!isScreenLg} />
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					id="about"
					offset={0.9999}
					speed={0.3}
					factor={!isScreenLg ? 1.5 : 1}
					className="bg-opacity-0 z-40  h-full mb-6  py-10"
				>
					<Fade damping={0.2} triggerOnce={true} cascade>
						<div className="container bg-gray-900 rounded-xl py-6 px-3 sm:py-6 lg:py-16 lg:px-36  mx-auto">
							<BlurText
								text="Команда Altergemu разрабатывает игры, платформы для тестирования, системы контроля версий и не только. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellat eius natus ab! Voluptatibus nisi labore deserunt quae, corrupti est? Aspernatur omnis quod reprehenderit eligendi"
								delay={30}
								animateBy="words"
								direction="top"
								threshold={0.1}
								className="text-xl sm:text-2xl lg:text-4xl text-green-400"
							/>
						</div>

						<div className="relative">
							<div
								style={{
									width: "94.4%",
									display: !isScreenLg ? "none" : "block",
								}}
								className="absolute top-4  xl:top-14 h-full bg-gray-800 -z-10 bottom-0"
							></div>
							<div className="flex container bg-gray-700 rounded-xl py-4 px-1 my-4 lg:bg-inherit  lg:p-0 mx-auto flex-col lg:flex-row justify-between items-center">
								<div className="  lg:w-6/12 px-3 lg:ml-12 ">
									<h2 className="text-center text-4xl lg:text-left lg:text-5xl xl:text-6xl font-bold text-green-400 mb-6">
										О команде
									</h2>
									<p className="text-lg text-white sm:text-xl lg:text-2xl">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
										consectetur fugiat natus quasi officiis nam quia, hic, rem eveniet
										nobis quis fugit facilis obcaecati eos impedit ipsam accusamus dolorum
										velit eligendi doloremque? Voluptates, maiores. Blanditiis nostrum
										harum soluta laudantium similique rerum architecto doloremque, nam
										accusamus sint. Aliquam explicabo beatae sit.
									</p>
								</div>
								<img src=".././team.jpg" className=" h-[50vh] w-3/12 " alt="" />
							</div>
						</div>
					</Fade>
				</ParallaxLayer>
				<ParallaxLayer
					id="projects"
					offset={1.9999}
					speed={0.4}
					factor={!isScreenLg ? 2.5 : 1}
					className="  absolute  z-40 pt-4 lg:pt-8  mb-6   "
				>
					<Fade duration={400} triggerOnce={true}>
						<div className=" container mx-auto bg-gray-800 rounded-xl p-6 lg:p-14">
							<h3 className="text-green-400 text-4xl mb-3 font-bold text-center">
								Наши Проекты
							</h3>
							<ProjectCarousel />
						</div>
					</Fade>
				</ParallaxLayer>
				<ParallaxLayer
					id="team"
					offset={2.5}
					speed={0.4}
					factor={2}
					className="absolute  z-40 bg-transparent  mb-6"
				>
					<div className="w-80 mx-auto bg-gray-800 py-4 rounded-xl">
						<h3 className="text-green-400   text-4xl font-bold  text-center">
							Участники
						</h3>
					</div>

					<div className="container mx-auto   place-items-center grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-y-5  md:gap-x-[120px]">
						{team != undefined ? <Team team={team} /> : <TeamSkeleton />}
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					id="join"
					offset={!isScreenMd ? 6.3 : !isScreenXl ? 4.4 : 4}
					speed={0.4}
					factor={1}
					className="  relative z-40 bg-transparent  mb-6"
				>
					<div className="relative  container bg-gray-800 rounded-xl mx-auto py-14 sm:py-0 h-[30vh] sm:h-[60vh] flex flex-col">
						{!isScreenMd ? (
							<div className="">
								<h3 className="text-green-400 text-3xl   mb-3 font-bold text-center">
									Попробуй себя в Altergemu
								</h3>
							</div>
						) : (
							<ASCIIText
								text="Попробуй себя в Altergemu"
								enableWaves={true}
								asciiFontSize={5}
								planeBaseHeight={5}
								textFontSize={40}
								textColor="#2adb6a"
							/>
						)}

						<div className="  flex flex-col items-center h-full mb-14 justify-end   ">
							<SendForm />
						</div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}
