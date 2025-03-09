import {
	mysqlTable,
	primaryKey,
	varchar,
	json,
	timestamp,
	unique,
	text,
	tinyint,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const post = mysqlTable(
	"post",
	{
		id: varchar({ length: 25 }).notNull(),
		name: varchar({ length: 256 }).notNull(),
		content: json().notNull(),
		authorId: varchar({ length: 25 }).references(() => user.id, {
			onDelete: "set null",
		}),
		createdAt: timestamp({ mode: "string" }).default(sql`(now())`),
		postStatus: varchar({ length: 16 }).default("EXPECTATION").notNull(),
	},
	(table) => [primaryKey({ columns: [table.id], name: "post_id" })],
);

export const project = mysqlTable(
	"project",
	{
		id: varchar({ length: 25 }).notNull(),
		name: varchar({ length: 256 }).notNull(),
		content: json().notNull(),
		authorId: varchar({ length: 25 }).references(() => user.id, {
			onDelete: "set null",
		}),
		projectStatus: varchar({ length: 16 }).default("DEVELOPMENT").notNull(),
		createdAt: timestamp({ mode: "string" }).default(sql`(now())`),
	},
	(table) => [
		primaryKey({ columns: [table.id], name: "project_id" }),
		unique("project_name_unique").on(table.name),
	],
);

export const task = mysqlTable(
	"task",
	{
		id: varchar({ length: 25 }).notNull(),
		title: varchar({ length: 256 }).notNull(),
		description: text().notNull(),
		authorId: varchar({ length: 25 }).references(() => user.id, {
			onDelete: "set null",
		}),
		performers: json().notNull(),
		image: varchar({ length: 256 }).default("").notNull(),
		taskStatus: varchar({ length: 16 }).default("ISSUED"),
		createdAt: timestamp({ mode: "string" }).default(sql`(now())`),
		updatedAt: timestamp({ mode: "string" })
			.default(sql`(now())`)
			.onUpdateNow(),
		deadline: timestamp({ mode: "string" }).notNull(),
		projectId: varchar({ length: 25 })
			.notNull()
			.references(() => project.id, { onDelete: "cascade" }),
	},
	(table) => [primaryKey({ columns: [table.id], name: "task_id" })],
);

export const thirdPartyTokens = mysqlTable(
	"third_party_tokens",
	{
		id: varchar({ length: 25 }).notNull(),
		service: varchar({ length: 256 }).notNull(),
		accessToken: varchar({ length: 256 }).notNull(),
		refreshToken: varchar({ length: 256 }).notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.id], name: "third_party_tokens_id" }),
	],
);

export const user = mysqlTable(
	"user",
	{
		id: varchar({ length: 256 }).notNull(),
		firstName: varchar({ length: 20 }).notNull(),
		lastName: varchar({ length: 20 }).notNull(),
		bio: text().default(sql`(_utf8mb4\'\')`),
		devStatus: varchar({ length: 256 }).default("").notNull(),
		isPublic: tinyint().default(0),
		email: varchar({ length: 127 }).notNull(),
		passwordHash: varchar("password_hash", { length: 127 }).notNull(),
		avatarUrl: varchar("avatar_url", { length: 256 }),
		role: varchar({ length: 16 }).default("UNVERIFIED").notNull(),
		createdAt: timestamp({ mode: "string" }).default(sql`(now())`),
		updatedAt: timestamp({ mode: "string" })
			.default(sql`(now())`)
			.onUpdateNow(),
		contacts: json().notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.id], name: "user_id" }),
		unique("user_email_unique").on(table.email),
	],
);

export const User = typeof user.$inferInsert;
