import { eq } from 'drizzle-orm'
import { Elysia } from 'elysia'
import { db } from '../../db/connection'
import { condominium } from '../../db/schema/condominium'
import { receiver } from '../../db/schema/receiver'
import { CondominiumDTO } from '../dtos/condominium.dto'

export const condominiumsRoute = new Elysia().post(
  '/condominiums',
  async ({ body, set }) => {
    const { name, address, number, subscriptionStatus, receiverId } = body

    const newCondominium = await db
      .insert(condominium)
      .values({
        name,
        address,
        number,
        subscriptionStatus,
      })
      .returning()

    await db
      .update(receiver)
      .set({
        condominiumId: newCondominium[0].id,
      })
      .where(eq(receiver.id, receiverId))

    set.status = 201
    return {
      message: 'Condomínio e síndico associados com sucesso!',
      data: newCondominium[0],
    }
  },
  {
    body: CondominiumDTO,
  }
)
