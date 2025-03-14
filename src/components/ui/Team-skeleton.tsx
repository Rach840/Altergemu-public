import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Card } from "@/components/ui/card";

const TeamSkeleton = () => {
	return (
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
	);
};

export default TeamSkeleton;
