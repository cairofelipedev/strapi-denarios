module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'us-cdbr-east-05.cleardb.net'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'heroku_dc24631389b18d0'),
        username: env('DATABASE_USERNAME', 'b534be08b35824'),
        password: env('DATABASE_PASSWORD', 'fc9a2c62'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
