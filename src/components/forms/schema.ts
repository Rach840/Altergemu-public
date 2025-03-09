import { z } from "zod";

export const sendSchema = z.object({
	firstName: z.string().min(3, {
		message: "Имя должно содержать минимум 3 символа",
	}),
	lastName: z.string().min(3, {
		message: "Фамилия должна содержать минимум 3 символа",
	}),

	discord: z.string().refine((str) => /[@]+/.test(str), {
		message: "Введите корректный никнейм",
	}),
	telegram: z.string().refine((str) => /[@]+/.test(str), {
		message: "Введите корректный никнейм",
	}),
	github: z.string().refine((str) => /[@]+/.test(str), {
		message: "Введите корректный никнейм",
	}),

	about: z.string().min(1, {
		message: "Напишите что нибудь о себе",
	}),
});
// export const SendSchema = z.object({
// 	firstName: z.string().min(3, {
// 		message: "Имя пользователя должно содержать минимум 3 символа",
// 	}),
// 	lastName: z.string().min(3, {
// 		message: "Фамилия пользователя должна содержать минимум 3 символа",
// 	}),
// 	surName: z.string(),
// 	email: z.string().email({ message: "Введите корректную почту" }),
// 	telegram: z.string(),
// 	devStatus: z.string(),
//
// });
// export type TSendForm = z.infer<typeof TSendSchema>;
