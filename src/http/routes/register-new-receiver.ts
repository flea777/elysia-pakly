import { Elysia } from 'elysia';
import { db } from '../../db/connection';
import { receiver } from '../../db/schema/receiver';
import { ReceiverDTO } from '../dtos/receiver.dto';
import bcrypt from 'bcryptjs';

export const receiverRoute = new Elysia().post('/receivers',
  async ({ body, set }) => {
    const { name, email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newReceiver = await db
      .insert(receiver)
      .values({
        name,
        email,
        password: hashedPassword,
      })
      .returning();

    const { password: _, ...receiverData } = newReceiver[0];
    
    set.status = 201;
    return {
      message: 'Síndico cadastrado com sucesso!',
      data: receiverData,
    };
  },
  {
    body: ReceiverDTO,
  }
);