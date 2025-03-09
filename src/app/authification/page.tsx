"use client";
import SendForm from "@/components/forms/send-form";
import { animated, useSpring } from "@react-spring/web";
import { CodeXml } from "lucide-react";
import Link from "next/link";

export default function Register() {
	const gradientStyles = useSpring({
		config: { duration: 3000 },
		loop: { reverse: true },
		from: {
			background: `linear-gradient(146deg, rgba(79, 57, 246,0.48) 0%, rgba(209,209,209,0.48) 69%)`,
		},

		to: {
			background: `linear-gradient(146deg, rgba(209,209,209,0.48) 0%, rgba(79, 57, 246,0.48) 69%)`,
		},
	});

	return (
		<>
			<div className="grid min-h-svh lg:grid-cols-2">
				<div className="flex flex-col gap-4 p-6 md:p-10">
					<div className="flex justify-center gap-2 md:justify-start">
						<Link
							href="/"
							className="flex items-center text-4xl font-bold text-indigo-400 -m-1.5 p-1.5"
						>
							<CodeXml className=" mr-5" size={80} /> Altergemu
						</Link>
					</div>
					<div className="flex flex-1 items-center justify-center">
						<div className="w-full max-w-2xl">
							<SendForm />
						</div>
					</div>
				</div>

				<animated.div
					className="relative  justify-center items-center hidden lg:flex "
					style={{
						...gradientStyles,
						width: "100%",
						height: "100vh",
						top: 0,
						left: 0,
					}}
				>
					<h3
						style={{
							transform: "rotate(45deg)",
						}}
						className=" text-green-600 flex items-center relative  text-9xl font-bold text-black  "
					>
						<CodeXml className=" mr-5" size={150} /> Altergemu
					</h3>
				</animated.div>
			</div>
		</>
	);
}
