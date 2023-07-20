/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table)=>{
        table.uuid('session_id').after('id').index
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table)=>{
    table.dropColumn('session_id')
})}
