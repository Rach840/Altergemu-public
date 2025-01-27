"use server"

import { prisma } from "../prisma/prisma-client"



export interface Team{
id: number;
firstName:string;
lastName:string;
bio:string;
avatar:string;
devStatus:string;
}


export async function getAllTeam():Promise<Team[]> {
    try{
const team = await prisma.user.findMany({
    where:{
        role: {
            in: ["ADMIN", "USER"],
          },
    },
    select:{
        id:true,
        firstName:true,
        lastName:true,
        bio:true,
        avatar:true,
        devStatus:true,
    }
});
return team
    }
    catch(er){
return er
    }
}