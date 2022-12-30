const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      // filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      host: env(
        "DATABASE_HOST",
        "ep-young-block-056015.us-east-2.aws.neon.tech"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "naumongi"),
      user: env("DATABASE_USERNAME", "leekhuong09"),
      password: env("DATABASE_PASSWORD", "1Gzji9gmXYpk"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    // useNullAsDefault: true,
    debug: false,
  },
});
