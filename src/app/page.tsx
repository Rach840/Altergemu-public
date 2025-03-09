"use client";

import { animated, useSpring } from "@react-spring/web";
import Header from "@/components/header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useRef, useState } from "react";
import { getAllTeam } from "@/action";
import React from "react";
import Spline from "@splinetool/react-spline";
import Skeleton from "@mui/material/Skeleton";
import { User } from "@/db/schema";
import { useResize } from "@/components/useResize";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import DecryptedText from "@/components/ui/DecryptedText/DecryptedText";

import TiltedCard from "@/components/ui/TiltedCard/TiltedCard";
import Dither from "@/components/ui/Dither/Dither";
import Threads from "@/components/ui/Threads/Threads";

export default function Home() {
	const projects = [
		{
			img: ".././kvf-project.png",
			name: "Платформа тестрования КВФ",
			description:
				"Платформа тестирования для Агенства Социальных Инициатив. Платформа уже в релизе и доступна пользователя",
			projectUrl: "https://24kvf.ru/",
			customSize: "",
		},
		{
			img: ".././kvf-project.png",
			name: "Хоррор игра Сhaos",
			description:
				"Хоррор игра в локациях старого нацисткого бункера, Главный герой решает отправиться на экскурсию в заброшанный нацисткий бункер который окутан загадкими и мрачной историей, по приезду он понимает что это совсем не экскурсия.\n" +
				"\n",
			projectUrl: "",
			customSize: "",
		},
	];
	const { isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
	const [team, setTeam] = useState<User[]>();
	const ref = useRef();
	React.useEffect(() => {
		(async () => {
			const teamResponce = await getAllTeam();
			console.log(teamResponce);
			if (teamResponce != null) {
				setTeam(teamResponce);
			}
		})();
	}, []);
	console.log(team);

	const arrow = useSpring({
		config: { duration: 300 },
		to: { top: -10 },
		from: { top: 0 },
		loop: { reverse: true },
	});
	const gradientStyles = useSpring({
		config: { duration: 3000 },
		loop: { reverse: true },
		from: {
			background: `linear-gradient(146deg, rgba(79, 57, 246,1) 0%, rgba(209,209,209,1) 69%)`,
		},

		to: {
			background: `linear-gradient(146deg, rgba(209,209,209,1) 0%, rgba(79, 57, 246,1) 69%)`,
		},
	});

	return (
		<>


			<Parallax
				ref={ref}
				pages={
					!isScreenSm
						? 4.5
						: !isScreenXl
							? 2.9
							: !isScreenMd
								? 4.1
								: !isScreenLg
									? 2.9
									: !isScreenSm
										? 4.8
										: 2.9
				}
				className="bg-white"
			>
				<Header refer={ref} />
				<ParallaxLayer
					speed={0.2}
					offset={0}
					className="bg-gray-900 mx-auto px-2 pt-7 lg:pt-14 lg:px-8"
				>

					<div style={{ width: '100%', height: '100vh', left: 0, position: 'absolute' }}>
						<Threads
							amplitude={1.6}
							distance={0.6}
							enableMouseInteraction={false}
						/>
					</div>

					<div className="flex justify-between  flex-col-reverse lg:flex-row  w-11/12 mx-auto   items-center">
						<div className=" max-w-3xl  py-10 sm:py-18 lg:py-32">
							<div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
							<div className="block mb-7">
								<DecryptedText
									text="Команда разработки Altergemu"
									speed={45}
									animateOn="view"
									maxIterations={20}
									characters="ALTERGEMU!?"
									className=" text-balance text-3xl  sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-green-400 revealed"
									parentClassName="all-letters "
									encryptedClassName="encrypted text-3xl  sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-green-400"
									sequential={true}
								/>
							</div>
							<div className="block">
								<DecryptedText
									text="Команда разработчиков-профессионалов, разрабатывающая широкий спектр продуктов, начиная от сайтов и игр, заканчивая системой контроля версий"
									speed={20}
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
						<div style={{zIndex:50, height: !isScreenLg ? "430px" : "650px" }}>
							{!isScreenLg ? (
								<Spline
									scene="https://prod.spline.design/RAZc0QtUoFzn8Qav/scene.splinecode"
									width={450}
									height={450}
								/>
							) : (
								<Spline
									scene="https://prod.spline.design/m4LY1JZtHyIpXq4g/scene.splinecode"
									width={750}
									height={750}
								/>
							)}
						</div>
					</div>
					<div className="mt-10 hidden lg:flex relative -bottom-10  items-center w-full justify-center gap-x-6">
						<animated.div
							style={{
								...arrow,
								position: "relative",
							}}
						>
							<a
								onClick={() => ref.current.scrollTo(0.5)}
								className=" uppercase font-semibold text-gray-900"
							>
								<span className="text-green-400 text-6xl font-extrabold" aria-hidden="true">
									↓
								</span>
							</a>
						</animated.div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					id="about"
					offset={0.999999}
					speed={1}
					factor={!isScreenLg ? 1.5 : 1}
					className="bg-gray-900 h-full mb-6  py-10"
				>
					<Fade damping={0.2} cascade>
					<div className="container   px-3 sm:py-4 lg:py-16 lg:px-36  mx-auto">
						<h2
							className="text-xl sm:text-2xl lg:text-4xl text-green-400">
							Команда Altergemu разрабатывает игры, платформы для тестирования, системы
							контроля версий и не только. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Voluptas repellat eius natus ab! Voluptatibus nisi labore
							deserunt quae, corrupti est? Aspernatur omnis quod reprehenderit eligendi
						</h2>
					</div>


						<div className="relative">
							<div
								style={{
									width: "94.4%",
									display: !isScreenLg ? "none" : "block",
								}}
								className="absolute top-14   h-full bg-gray-700 -z-10 bottom-0"
							></div>
							<div className="flex container bg-gray-700 py-4 px-1 my-4 lg:bg-inherit  lg:p-0 mx-auto flex-col lg:flex-row justify-between items-center">
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
								<img src=".././team.jpg" className="w-full lg:w-6/12 " alt="" />
							</div>
						</div>
					</Fade>
				</ParallaxLayer>
				<ParallaxLayer
					id="projects"
					offset={1}
					speed={1}
					factor={!isScreenLg ? 2.6 : 1}
					className="bg-gray-900  pt-10 lg:pt-20  mb-6   "
				>
					<h3 className="text-green-400 text-4xl mb-3 font-bold text-center">
						Наши Проекты
					</h3>
					<div className="w-full  lg:container mx-auto">
						<Carousel className="w-full ">
							<CarouselPrevious />
							<CarouselContent>
								{projects.map((project) => (
									<CarouselItem className="rounded-xl" key={project.name} >
										<div className="  px-3 lg:px-14   ">
											<Card className="bg-gray-900 border-gray-900">
												<CardContent className="  lg:p-6">
													<div className="relative md:px-14 space-x-2 lg:space-x-6 lg:p-10 lg:px-14 items-center flex flex-col lg:flex-row  w-full">
														<img
															src={project.img}
															alt="image 1"
															className={
																project.customSize
																	? "rounded-t-lg lg:rounded-xl w-full lg:w-6/12 object-cover" +
																		project.customSize
																	: "rounded-t-lg lg:rounded-xl w-full lg:w-6/12 object-cover"
															}
														/>
														<div className=" w-full lg:w-6/12   place-items-center ">
															<div className=" bg-gray-800 p-8 rounded-b-xl lg:rounded-xl text-center">
																<Typography
																	variant="h1"
																	color="white"
																	className="mb-6 text-2xl md:text-3xl lg:text-4xl"
																>
																	{project.name}
																</Typography>
																<Typography
																	variant="lead"
																	color="white"
																	className="mb-3 md:mb-8 lg:mb-13 text-left text-xl opacity-80"
																>
																	{project.description}
																</Typography>
																<div className="flex justify-center gap-2">
																	<Link href={project.projectUrl}>
																		<Button size="lg" variant="gradient" color="black">
																			Перейти на проект
																		</Button>
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</CardContent>
											</Card>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>

							<CarouselNext />
						</Carousel>
					</div>
				</ParallaxLayer>
				<ParallaxLayer
					id="team"
					offset={1.9}
					speed={1}
					factor={5}
					className=" bg-gray-900  mb-6"
				>
					<h3 className="text-green-400  text-4xl font-bold  text-center">
						Участники
					</h3>
					<div className="container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 mt-16 mx-4 gap-5">


						<Fade
							cascade
							damping={0.2}
							className=" pb-4 mx-3 lg:mx-0 text-center"
						>

							{team != undefined ? (
								team.map((item) => (
									<TiltedCard key={item.id}
										imageSrc={item.avatarUrl}
										altText={`${item.firstName} ${item.lastName}`}
										captionText={`${item.firstName} ${item.lastName}`}
										containerHeight="600px"
										containerWidth="400px"
										imageHeight="300px"
										imageWidth="400px"
										rotateAmplitude={12}
										scaleOnHover={1.2}
										showMobileWarning={false}
										showTooltip={true}
										displayOverlayContent={true}
										overlayContent={
											<div className="absolute rounded-xl top-[300px] bg-gray-800 w-[400px] p-6">
												<h2 className="text-2xl text-white font-bold mb-2">
													{item.firstName} {item.lastName}
												</h2>
												<p className="text-blue-400 mb-4">
													{item.devStatus ? item.devStatus.split(",").join(", ") : ""}
												</p>
												<p className="text-gray-300">{item.bio}</p>
											</div>
										}
									/>

								))
							) : (
								<Card className="text-center h-full bg-gray-600">
									<Skeleton
										height={500}
										width={"80%"}
										animation="wave"
										variant="rectangular"
									/>
									<Skeleton
										style={{ marginBottom: 6 }}
										height={100}
										width={"80%"}
										animation="wave"
										variant="rectangular"
									/>
									<Skeleton
										style={{ marginBottom: 6 }}
										height={100}
										width={"80%"}
										animation="wave"
										variant="rectangular"
									/>

									<Skeleton
										style={{ marginBottom: 6 }}
										height={250}
										width={"40%"}
										animation="wave"
										variant="rectangular"
									/>
								</Card>
							)}
						</Fade>
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}
