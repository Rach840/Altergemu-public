import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import FuzzyText from "@/components/ui/FuzzyText";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const ProjectCarousel = () => {
	const projects = [
		{
			img: ".././kvf-project.png",
			name: "Платформа тестрования КВФ",
			noImage: false,
			description:
				"Платформа тестирования для Агенства Социальных Инициатив. Платформа уже в релизе и доступна пользователя",
			projectUrl: "https://24kvf.ru/",
			customSize: "",
		},
		{
			img: "",
			noImage: true,
			name: "Хоррор игра Сhaos",
			description:
				"Хоррор игра в локациях старого нацисткого бункера, Главный герой решает отправиться на экскурсию в заброшанный нацисткий бункер который окутан загадкими и мрачной историей, по приезду он понимает что это совсем не экскурсия.\n" +
				"\n",
			projectUrl: "https://gitlab.altergemu.com/lon4ry/chaos",
			customSize: "",
		},
	];
	return (
		<div>
			<div className="w-full  lg:container mx-auto">
				<Carousel className="w-full ">
					<CarouselPrevious className="z-40 -left-22" />
					<CarouselContent>
						{projects.map((project) => (
							<CarouselItem className=" lg:mx-14 rounded-xl" key={project.name}>
								<div className="  px-3    ">
									<Card className="bg-opacity-0 border-0  shadow-none">
										<CardContent className="  lg:p-6">
											<div className="relative md:px-14 space-x-2 lg:space-x-6 lg:p-10 lg:px-14 items-center flex flex-col lg:flex-row  w-full">
												{!project.noImage ? (
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
												) : (
													<div className=" rounded-t-lg lg:rounded-xl w-full lg:w-6/12 object-cover ">
														<FuzzyText
															baseIntensity={0.2}
															hoverIntensity={0}
															enableHover={true}
														>
															404
														</FuzzyText>
													</div>
												)}
												<div className=" w-full lg:w-6/12   place-items-center ">
													<div className="  p-8 rounded-b-xl lg:rounded-xl text-center">
														<h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">
															{project.name}
														</h2>
														<h4 className="mb-3 md:mb-8 lg:mb-13 text-left text-xl opacity-80">
															{project.description}
														</h4>
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

					<CarouselNext
						style={{
							right: "1rem",
						}}
						className="z-40 "
					/>
				</Carousel>
			</div>
		</div>
	);
};

export default ProjectCarousel;
