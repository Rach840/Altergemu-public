import { relations } from "drizzle-orm/relations";
import { user, post, project, task } from "./schema";

export const postRelations = relations(post, ({one}) => ({
	user: one(user, {
		fields: [post.authorId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	posts: many(post),
	projects: many(project),
	tasks: many(task),
}));

export const projectRelations = relations(project, ({one, many}) => ({
	user: one(user, {
		fields: [project.authorId],
		references: [user.id]
	}),
	tasks: many(task),
}));

export const taskRelations = relations(task, ({one}) => ({
	user: one(user, {
		fields: [task.authorId],
		references: [user.id]
	}),
	project: one(project, {
		fields: [task.projectId],
		references: [project.id]
	}),
}));