'use server';

import {nanoid} from 'nanoid';
import { title } from 'process';
import { liveblocks } from '../liveblocks';
import { RoomAccesses, RoomData } from '@liveblocks/node';
import { revalidatePath } from 'next/cache';

type HeaderProps = {
    userId : string,
    email : string
}

export const createDocument = async({userId , email} : HeaderProps) => {
    const roomId = nanoid();

    try {
        const metadata = {
            creatorId : userId,
            email,
            title : "Untitled Document",
        }

        const userAccess : RoomAccesses = {
            [email] : ["room:write"]
        }

        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses : userAccess,
            defaultAccesses : []
            
          });
        revalidatePath(`/`);

        return parseStringify(room);
        
    } catch (error) {
        console.log("Error creating document", error);
    }
}

const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));