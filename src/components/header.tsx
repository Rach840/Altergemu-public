"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ButtonHero from "./button";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { CodeXml } from "lucide-react";
export default function Header({ refer = undefined }) {
	const navigation = [
		{ name: "Описание", href: 0.5 },
		{ name: "Проекты", href: 1 },
		{ name: "Участники", href: 1.4 },
	];

	const containerRef = React.useRef<HTMLDivElement>(null!);
	const headerAnimation = useSpring({
		config: { duration: 350 },
		from: {
			top: -120,
		},

		to: {
			top: 0,
		},
	});

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// className={scrollYProgress ? ' left-0 top-20 fixed  inset-x-0 top-0 z-50 bg-slate-900' : 'absolute inset-x-0 top-0 z-50'}
	return (
		<animated.div
			ref={containerRef}
			className=" top-0 inset-x-0 z-50"
			style={{ ...headerAnimation, position: "relative" }}
		>
			<header
				className={
					refer
						? " absolute inset-x-0 top-0 z-50"
						: " bg-gray-800 to-purple-600 absolute inset-x-0 top-0 z-50"
				}
			>
				<nav
					aria-label="Global"
					className="flex items-center justify-between p-6 lg:px-8"
				>
					<div className="flex lg:flex-1">
						<Link
							href="/"
							className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-500 text-4xl font-bold text-indigo-400 -m-1.5 p-1.5"
						>
							<CodeXml className=" mr-5" size={80} /> Altergemu
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Открыть меню</span>
							<Bars3Icon aria-hidden="true" className="size-12" />
						</button>
					</div>
					<div
						onClick={(event: React.SyntheticEvent) => {
							event.preventDefault();
							const target = event.target as HTMLAnchorElement;
							const id = target.getAttribute("href")?.replace("#", "");
							const element = document.getElementById(String(id));
							element?.scrollIntoView({
								behavior: "smooth",
							});
						}}
						className="hidden lg:flex lg:gap-x-12"
					>
						{refer ? (
							navigation.map((item) => (
								<a
									key={item.name}
									onClick={() => refer.current.scrollTo(item.href)}
									className="pointer-events-auto text-xl/6 font-semibold text-gray-900"
								>
									{item.name}
								</a>
							))
						) : (
							<Link
								href="/"
								className="pointer-events-auto text-xl/6 font-semibold text-gray-900"
							>
								Главная
							</Link>
						)}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">

							<Link className="rounded-md bg-gradient-to-r from-indigo-400 to-purple-600 px-3.5 py-2.5 text-lg font-semibold duration-200 text-white shadow-sm hover:bg-yellow-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="/authification">Стать участником</Link>{" "}

					</div>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden"
				>
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<div className="flex items-center text-4xl font-bold text-indigo-400 -m-1.5 p-1.5">
								<CodeXml className=" mr-5" size={80} /> Altergemu
							</div>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Закрыть меню</span>
								<XMarkIcon aria-hidden="true" className="size-12" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
								<div className="py-6">
									<ButtonHero>
										<Link href={`/authification`}>Стать участником</Link>{" "}
									</ButtonHero>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
		</animated.div>
	);
}
