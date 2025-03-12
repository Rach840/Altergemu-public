"use server";

import { User, user } from "./db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import {compare} from "bcryptjs";

type Error = {
	success: boolean;
};

export async function getAllTeam(): Promise<User[] | Error> {
	try {
		const team = await db
			.select()
			.from(user)
			.where(eq(user.role, "USER") && eq(user.isPublic, true));
		console.log(team);
		return team;
	} catch (error) {
		console.log(error.message);
		return { success: false };
	}
}
export async function getCode(codeInp: string) {
	const code = '$2a$12$DXJO.5Xjcd0XkfUIeAv8Q.doFjw8hv0pmPSAlFYu0bdXt4jXekkEi';
	const isCodeValid = await compare(
		code,
		codeInp
	);
	return isCodeValid
}