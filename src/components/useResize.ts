"use client";
import { useState, useEffect } from "react";
const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
const SCREEN_XL = 1268;
const SCREEN_XXL = 1400;

export const useResize = () => {
	const [width, setWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0,
	);
	const [height, setHeight] = useState(
		typeof window !== "undefined" ? window.innerHeight : 0,
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth);
			setHeight(event.target.innerHeight);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return {
		width,
		height,
		isScreenSm: width >= SCREEN_SM,
		isScreenMd: width >= SCREEN_MD,
		isScreenLg: width >= SCREEN_LG,
		isScreenXl: width >= SCREEN_XL,
		isScreenXxl: width >= SCREEN_XXL,
	};
};
