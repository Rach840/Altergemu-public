import React from "react";
import TiltedCard from "@/components/ui/TiltedCard";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { User } from "@/db/schema";
import { Fade } from "react-awesome-reveal";
import { useResize } from "@/components/useResize";

export default function Team({ team }: { team: User[] }) {
	const { isScreenMd, isScreenLg } = useResize();
	return (
		<Fade
			cascade
			damping={0.2}
			triggerOnce={true}
			className=" pb-4 w-[380px] sm:w-[440px] md:w-[340px] lg:w-[480px]  mx-3 lg:mx-0 text-center"
		>
			{team.map((item) => (
				<TiltedCard
					key={item.id}
					imageSrc={item.avatarUrl as string}
					altText={`${item.firstName} ${item.lastName}`}
					captionText={`${item.firstName} ${item.lastName}`}
					containerHeight={!isScreenMd ? "600px" : "500px"}
					containerWidth={!isScreenMd ? "400px" : !isScreenLg ? "300px" : "440px"}
					imageHeight={!isScreenMd ? "400px" : "300px"}
					imageWidth={!isScreenMd ? "400px" : !isScreenLg ? "300px" : "440px"}
					rotateAmplitude={8}
					scaleOnHover={1.05}
					showMobileWarning={false}
					showTooltip={true}
					displayOverlayContent={true}
					overlayContent={
						<SpotlightCard
							className="custom-spotlight-card absolute w-[400px] sm:w-[500px] top-[400px] md:top-[300px] md:w-[300px] lg:w-[435px] p-6"
							spotlightColor="rgba(0, 229, 255, 0.2)"
						>
							<h2 className="text-2xl text-white font-bold mb-2">
								{item.firstName} {item.lastName}
							</h2>
							<p className="text-blue-400 mb-4">
								{item.devStatus ? item.devStatus.split(",").join(", ") : ""}
							</p>
							<p className="text-gray-300">{item.bio}</p>
						</SpotlightCard>
					}
				/>
			))}
		</Fade>
	);
}
