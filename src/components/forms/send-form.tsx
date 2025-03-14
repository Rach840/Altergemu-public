import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MantineProvider } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";
import { sendMessageTelegram } from "@/api/telegram";
import { Button } from "@/components/ui/moving-border";
import { sendSchema } from "./schema";
import { Textarea } from "../ui/textarea";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import { ErrorText } from "@/components/ui/error-text";

export default function SendForm() {
	const [isLoading, setisLoading] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>();
	const form = useForm({
		mode: "uncontrolled",
		initialValues: {
			firstName: "",
			lastName: "",
			github: "",
			devStatus: [],
			discord: "",
			telegram: "",
			about: "",
		},

		validate: zodResolver(sendSchema),
	});

	const OPTIONS: Option[] = [
		{ label: "FullStack", value: "FullStack" },
		{ label: "Frontend", value: "Frontend" },
		{ label: "BackEnd", value: "BackEnd" },
		{ label: "DevOps", value: "DevOps" },
	];
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
				devStatus?.map((val) => val.label).join(", ") +
				", %0AО себе:%0A " +
				about +
				" ";
			setisLoading(true);
			await sendMessageTelegram(message).then(() => setOpen(false));
		} catch (e) {
			console.log(e);
			form.setFieldError("email", "Ошибка");
		} finally {
			setisLoading(false);
		}
	};
	return (
		<MantineProvider>
			<Dialog open={open}>
				<DialogTrigger className="" asChild>
					<Button
						borderRadius="1.35rem"
						className="  bg-gradient-to-r py-8 from-indigo-400 to-purple-700"
					>
						<ChevronRight className=" h-16 w-20" />
					</Button>
				</DialogTrigger>
				<DialogContent className=" w-full md:max-w-[625px]">
					<DialogHeader className="flex flex-col items-center gap-2 text-center">
						<DialogTitle className="text-2xl font-bold">
							Присоединиться к команде{" "}
						</DialogTitle>
						<DialogDescription className="text-balance text-xl text-muted-foreground">
							Подайте заявку <span className="text-indigo-400"> Altergemu</span>
						</DialogDescription>
					</DialogHeader>
					<form
						className="flex flex-col gap-6"
						onSubmit={form.onSubmit(handleSubmit)}
					>
						<div className="grid  gap-8">
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
											<ErrorText text={form.errors?.firstName as string} />
										</div>
										<div className="grid gap-2">
											<Label htmlFor="tg">Ваш никнейм в Telegram</Label>
											<Input
												required
												placeholder="@Ivanov228"
												{...form.getInputProps("telegram")}
											/>
											<ErrorText text={form.errors?.telegram as string} />
										</div>
										<div className="grid gap-2">
											<Label htmlFor="tg">Ваш никнейм или ссылка на GitHub</Label>
											<Input
												required
												placeholder="@Ivanov228"
												{...form.getInputProps("github")}
											/>
											<ErrorText text={form.errors?.github as string} />
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
											<ErrorText text={form.errors?.lastName as string} />
										</div>
										<div className="grid gap-2">
											<Label htmlFor="ds">Ваш ник в Дискорде</Label>
											<Input
												required
												placeholder="@AxeSignaturka"
												{...form.getInputProps("discord")}
											/>
											<ErrorText text={form.errors?.discord as string} />
										</div>
										<div className="grid  gap-2">
											<Label htmlFor="devStatus">Ваша специализация</Label>
											<MultipleSelector
												className="w-full"
												defaultOptions={OPTIONS}
												hidePlaceholderWhenSelected={true}
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
									<ErrorText text={form.errors?.about as string} />
								</div>
								<Button
									loading={isLoading}
									containerClassName="w-full"
									type="submit"
									className=" text-xl font-bold"
								>
									Подать заявку
								</Button>
							</>
						</div>
					</form>
				</DialogContent>
			</Dialog>
		</MantineProvider>
	);
}
