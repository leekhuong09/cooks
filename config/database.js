const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      // filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      host: env("DATABASE_HOST", "ec2-54-86-214-124.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "dbos6f82enl4jf"),
      user: env("DATABASE_USERNAME", "woxmcfvauqocbl"),
      password: env(
        "DATABASE_PASSWORD",
        "ed7552fbe99bd185b7af0567a972f7c3882b28cda5b3b10c2d5370539ee2bf2f"
      ),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    // useNullAsDefault: true,
    debug: false,
  },
});
