module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'us-cdbr-east-06.cleardb.net'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'heroku_e817d0f5b374f3d'),
        username: env('DATABASE_USERNAME', 'bc9a102937a399'),
        password: env('DATABASE_PASSWORD', '1ba054c9'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
