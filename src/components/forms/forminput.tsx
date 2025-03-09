"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { ErrorText } from "../error-text";
import { RequiredSymbol } from "../required-symbol";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	required?: boolean;
	className?: string;
	defaultValue?: string;
}

export const FormInput: React.FC<Props> = ({
	className,
	name,
	label,
	required,
	defaultValue,
	...props
}) => {
	const {
		register,
	} = useFormContext();


	return (
		<div className={className}>
			{label && (
				<p className="font-medium mb-2">
					{label} {required && <RequiredSymbol />}
				</p>
			)}

			<div className="relative">
				<Input
					defaultValue={defaultValue ? defaultValue : ""}
					className="h-12 text-md"
					{...register(name)}
					{...props}
				/>
			</div>

			{errorText && <ErrorText text={errorText} className="mt-2" />}
		</div>
	);
};
