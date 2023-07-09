/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Connection, createConnection, getConnection } from 'typeorm'

export class TypeOrmClientFactory {
  static async createClient(contextName: string): Promise<Connection> {
    try {
      const connection = await createConnection({
        name: contextName,
        type: 'postgres',
        host: '127.0.0.1',
        port: 4005,
        username: 'askit',
        password: 'askit',
        database: 'courses',
        entities: [__dirname + `/../../../../${contextName}/infrastructure/persistence/*{.js,.ts}`],
        synchronize: true
      })

      return connection
    } catch (error) {
      return getConnection(contextName)
    }
  }
}
