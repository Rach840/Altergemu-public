"use server";

import { User, user } from "./db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";

export type Error = {
	success: boolean;
};

export async function getAllTeam(): Promise<User[] | Error> {
	try {
		const team = await db
			.select()
			.from(user)
			.where(eq(user.role, "USER") && eq(user.isPublic, 1));
		return team;
	} catch {
		return { success: false };
	}
}
