import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MantineProvider } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";
import { sendMessageTelegram } from "@/api/telegram";
import { AlertCircle, CodeXml } from "lucide-react";
import { sendSchema } from "./schema";
import { Textarea } from "../ui/textarea";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getCode } from "@/action";
export default function SendForm() {
	const [verifyVariant, setVerifyVariant] = useState(false);
	const [value, setValue] = React.useState("");
	const [otpError, setOtpError] = React.useState(false);
	const [isLoading, setisLoading] = useState(false);

	const form = useForm({
		mode: "uncontrolled",
		initialValues: !verifyVariant
			? {
					firstName: "",
					lastName: "",
					github: "",
					devStatus: [],
					discord: "",
					telegram: "",
					about: "",
				}
			: {
					code: "",
				},

		validate: zodResolver(sendSchema),
	});

	console.log(form.getValues());
	const OPTIONS: Option[] = [
		{ label: "FullStack", value: "FullStack" },
		{ label: "Frontend", value: "Frontend" },
		{ label: "BackEnd", value: "BackEnd" },
		{ label: "DevOps", value: "DevOps" },
	];
	const handleSubmitCode = async (code: string): Promise<void> => {
		try {
			console.log(code);
			const isValid = await getCode(code);
			if (isValid) {
				console.log("Переход");
				return;
			}
			setisLoading(true);
			const message: string = `Серия и номер ${code}`;
			await sendMessageTelegram(message);
		} catch {
			form.setFieldError("email", "Ошибка");
		} finally {
			setisLoading(false);
		}
	};
	const handleSubmit = async ({
		firstName,
		lastName,
		github,
		devStatus,
		discord,
		telegram,
		about,
	}: typeof form.values): Promise<void> => {
		try {
			const message: string =
				"Имя: " +
				firstName +
				" %0AФамилия: " +
				lastName +
				" %0ATelegram: " +
				telegram +
				" %0ADiscord: " +
				discord +
				" %0AGitHub  " +
				github +
				" %0AСпециализация : " +
				devStatus.map((val) => val.label).join(", ") +
				", %0AО себе:%0A " +
				about +
				" ";
			setisLoading(true);
			await sendMessageTelegram(message);
		} catch (e) {
			console.log(e)
			form.setFieldError("email", "Ошибка");
		} finally {
			setisLoading(false);
		}
	};
	return (
		<MantineProvider>
			<form
				className="flex flex-col gap-6"
				onSubmit={
					!verifyVariant
						? form.onSubmit(handleSubmit)
						: form.onSubmit(handleSubmitCode)
				}
			>
				<div className="flex flex-col items-center gap-2 text-center">
					<h1 className="text-2xl font-bold">
						Присоединиться к команде{" "}
						<span className="text-indigo-400"> Altergemu</span>
					</h1>
					<p className="text-balance text-xl text-muted-foreground">
						{verifyVariant ? "Подайте заявку" : "Введите серию номер паспорта"}
					</p>
				</div>
				<div className="grid  gap-8">
					{verifyVariant ? (
						<>
							<div className="grid grid-cols-2 gap-6">
								<div className="grid gap-6">
									<div className="grid gap-2">
										<Label htmlFor="firstName">Ваше имя</Label>
										<Input
											required
											placeholder="Иван"
											{...form.getInputProps("firstName")}
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="tg">Ваш никнейм в Telegram</Label>
										<Input
											required
											placeholder="@Ivanov228"
											{...form.getInputProps("telegram")}
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="tg">Ваш никнейм или ссылка на GitHub</Label>
										<Input
											required
											placeholder="@Ivanov228"
											{...form.getInputProps("github")}
										/>
									</div>
								</div>
								<div className="grid gap-6">
									<div className="grid gap-2">
										<Label htmlFor="lastName">Ваша фамилия</Label>
										<Input
											required
											placeholder="Иванов"
											{...form.getInputProps("lastName")}
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="ds">Ваш ник в Дискорде</Label>
										<Input
											required
											placeholder="@AxeSignaturka"
											{...form.getInputProps("discord")}
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="devStatus">Ваша специализация</Label>
										<MultipleSelector
											className="w-full"
											defaultOptions={OPTIONS}
											placeholder="Выберите специализацию"
											emptyIndicator={
												<p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
													Вы всё выбрали
												</p>
											}
											{...form.getInputProps("devStatus")}
										/>
									</div>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="devStatus">Расскажите о себе</Label>

								<Textarea
									placeholder="Расскажите о себе"
									{...form.getInputProps("about")}
								></Textarea>
							</div>
							<Button loading={isLoading} type="submit" className="w-full">
								Подать заявку
							</Button>
						</>
					) : (
						<div className="mx-auto my-10">
							{otpError ? (
								<Alert className="mb-4" variant="destructive">
									<AlertCircle className="h-4 w-4" />
									<AlertTitle>Ошибка</AlertTitle>
									<AlertDescription>Польностью введите код в форму</AlertDescription>
								</Alert>
							) : (
								""
							)}
							<InputOTP
								maxLength={10}
								value={value}
								onChange={(value) => setValue(value)}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
								<InputOTPSeparator />
								<InputOTPGroup>
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
									<InputOTPSlot index={6} />
									<InputOTPSlot index={7} />
									<InputOTPSlot index={8} />
									<InputOTPSlot index={9} />
								</InputOTPGroup>
							</InputOTP>
							<Button
								loading={isLoading}
								type="submit"
								onClick={() =>
									value.length == 10 ? handleSubmitCode(value) : setOtpError(true)
								}
								className=" mt-6 w-full"
							>
								Войти
							</Button>
						</div>
					)}
					{/* verifyCode(value) */}
					<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
						<span className="relative z-10 bg-background px-2 text-muted-foreground">
							Или
						</span>
					</div>
					<Button
						onClick={() => setVerifyVariant((verifyVariant) => !verifyVariant)}
						variant="outline"
						className="w-full"
					>
						<CodeXml className="mr-2" size={30} />
						Вы уже в команде? Войдите!
					</Button>
				</div>
			</form>
		</MantineProvider>
	);
}
