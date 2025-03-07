'use server'

import { JsonValue } from "@prisma/client/runtime/library";
import { user } from "../drizzle/schema";




export interface Team {
  id: number;
  firstName: string;
  lastName: string;
  bio: string;
  avatar: string;
  devStatus: string;
  contacts: JsonValue;
}

export async function getAllTeam(): Promise<Team[]> {
  try {
    const team = await prisma.user.findMany({
      where: {
        role: {
          in: ["ADMIN", "USER"],
        },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        bio: true,
        avatar: true, 
        devStatus: true,
        contacts: true
      }
    });
const team = await db.select().from(user).
    console.log(team)
    return team;
  }
  catch (er) {
    return er;
  }
}
export async function getMember(id: number): Promise<Team> {
  try {
    const member = await prisma.user.findFirst({
      where: {
        id: id
      }
    })
    return member

  } catch (er) {
    return er;
  }
}