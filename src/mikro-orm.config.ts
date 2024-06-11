import { Migrator } from '@mikro-orm/migrations';
import { defineConfig } from '@mikro-orm/postgresql';

export default defineConfig({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '', 10) || 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB || 'nest-auth-server',
  strict: true,
  forceUtcTimezone: true,
  entities: ['dist/**/entities/*.js'],
  entitiesTs: ['src/**/entities/*.ts'],
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
    tableName: 'migrations',
    transactional: true,
  },
  extensions: [Migrator],
});
