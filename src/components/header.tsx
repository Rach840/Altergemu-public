'use client'
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ButtonHero from "./button";
import { animated, useInView, useSpring } from '@react-spring/web'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
	const navigation = [
		{ name: 'Описание', href: 'about' },
		{ name: 'Проекты', href: 'projects' },
		{ name: 'Участники', href: 'team' },
	]
	const [ref, springs] = useInView(
		() => ({

			from: {
				background: "none",
				position: 'relative'
			},
			to: {
				background: "rgba(255,171,0,1)",
				position: 'fixed',
			},
		}),
		{
			rootMargin: '-40% 0%',
		}
	)
	const headerAnimation = useSpring({
		config: { duration: 350 },
		from: {
			top: -120,
		},

		to: {
			top: 0,
		}
	})
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	return (
		<animated.div ref={ref} style={{ ...springs, ...headerAnimation, position: 'relative' }}>
			<header className="absolute inset-x-0 top-0 z-50">
				<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">

							<img
								alt=""
								src="../atergemu-logo.png"

							/>
						</a>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Открыть меню</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div onClick={(event: React.SyntheticEvent) => {
						event.preventDefault();
						const target = event.target as HTMLAnchorElement;
						const id = target.getAttribute('href')?.replace("#", '');
						const element = document.getElementById(String(id));
						element?.scrollIntoView({
							behavior: 'smooth'
						});
					}} className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a key={item.name} href={item.href} className="text-lg/6 font-semibold text-gray-900">
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<ButtonHero>  Стать участником </ButtonHero>
					</div>
				</nav>
				<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link href="../" className="-m-1.5 p-1.5">

								<img
									alt=""
									src="../atergemu-logo.png"
									className="h-8 w-auto"
								/>
							</Link>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Закрыть меню</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
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
									<ButtonHero>  Стать участником </ButtonHero>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>

		</animated.div>

	)
}