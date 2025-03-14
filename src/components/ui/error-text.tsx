import React from "react";
import { cn } from "@/lib/utils";

export const ErrorText = ({
	text,
	className,
}: {
	text: string;
	className?: string;
}) => {
	return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
};
