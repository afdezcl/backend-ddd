import { knex, type Knex } from 'knex'

export class KnexDatabaseContext {
  private readonly client: Knex

  constructor() {
    this.client = knex({
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        port: 4005,
        user: 'askit',
        password: 'askit',
        database: 'courses'
      },
      searchPath: ['knex', 'public'],
      pool: { min: 1, max: 7, idleTimeoutMillis: 5000 }
    })
  }

  public getClient(): Knex {
    return this.client
  }

  public getTransaction(): Promise<Knex.Transaction> {
    return this.client.transaction()
  }
}

export const databaseContext = new KnexDatabaseContext()
