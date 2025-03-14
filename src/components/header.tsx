"use client";
import React from "react";
export default function Header() {
	return (
		<header className=" absolute inset-x-0 top-0 z-50">
			<nav
				aria-label="Global"
				className="flex items-center justify-between p-6 lg:px-8"
			>
				<div className="flex items-center justify-center space-x-2">
					<img src="https://img.icons8.com/?size=64&id=79043&format=png" alt="" />
					<h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-500">
						Altergemu
					</h1>
				</div>
			</nav>
		</header>
	);
}
