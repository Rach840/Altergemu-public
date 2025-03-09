-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `post` (
	`id` varchar(25) NOT NULL,
	`name` varchar(256) NOT NULL,
	`content` json NOT NULL,
	`authorId` varchar(25),
	`createdAt` timestamp DEFAULT (now()),
	`postStatus` varchar(16) NOT NULL DEFAULT 'EXPECTATION',
	CONSTRAINT `post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` varchar(25) NOT NULL,
	`name` varchar(256) NOT NULL,
	`content` json NOT NULL,
	`authorId` varchar(25),
	`projectStatus` varchar(16) NOT NULL DEFAULT 'DEVELOPMENT',
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `project_id` PRIMARY KEY(`id`),
	CONSTRAINT `project_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `task` (
	`id` varchar(25) NOT NULL,
	`title` varchar(256) NOT NULL,
	`description` text NOT NULL,
	`authorId` varchar(25),
	`performers` json NOT NULL,
	`image` varchar(256) NOT NULL DEFAULT '',
	`taskStatus` varchar(16) DEFAULT 'ISSUED',
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deadline` timestamp NOT NULL,
	`projectId` varchar(25) NOT NULL,
	CONSTRAINT `task_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `third_party_tokens` (
	`id` varchar(25) NOT NULL,
	`service` varchar(256) NOT NULL,
	`accessToken` varchar(256) NOT NULL,
	`refreshToken` varchar(256) NOT NULL,
	CONSTRAINT `third_party_tokens_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(256) NOT NULL,
	`firstName` varchar(20) NOT NULL,
	`lastName` varchar(20) NOT NULL,
	`bio` text DEFAULT (_utf8mb4\'\'),
	`devStatus` varchar(256) NOT NULL DEFAULT '',
	`isPublic` tinyint(1) DEFAULT 0,
	`email` varchar(127) NOT NULL,
	`password_hash` varchar(127) NOT NULL,
	`avatar_url` varchar(256),
	`role` varchar(16) NOT NULL DEFAULT 'UNVERIFIED',
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`contacts` json NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `post` ADD CONSTRAINT `post_authorId_user_id_fk` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `project` ADD CONSTRAINT `project_authorId_user_id_fk` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `task` ADD CONSTRAINT `task_authorId_user_id_fk` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `task` ADD CONSTRAINT `task_projectId_project_id_fk` FOREIGN KEY (`projectId`) REFERENCES `project`(`id`) ON DELETE cascade ON UPDATE no action;
*/