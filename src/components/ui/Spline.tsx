import React from "react";
import Spline from "@splinetool/react-spline";

export default function SplineBlock({ isScreenLg }: { isScreenLg: boolean }) {
	return (
		<div
			onMouseMove={(e) => e.preventDefault()}
			style={{
				zIndex: 50,
				overflow: "hidden",
				height: isScreenLg ? "430px" : "650px",
			}}
		>
			{isScreenLg ? (
				<Spline
					scene="https://prod.spline.design/RAZc0QtUoFzn8Qav/scene.splinecode"
					style={{
						width: "450px",
						height: "450px",
					}}
					className="spline"
				/>
			) : (
				<Spline
					scene="https://prod.spline.design/m4LY1JZtHyIpXq4g/scene.splinecode"
					className="spline"
					style={{
						width: "750px",
						height: "750px",
					}}
				/>
			)}
			<style>{`
							.spline canvas{
							position:relative;
							}
							`}</style>
		</div>
	);
}
