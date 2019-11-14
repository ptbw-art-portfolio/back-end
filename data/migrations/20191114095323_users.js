exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', table => {
      table.increments();
      table.string('fullName', 255).notNullable();
      table.string('username', 255).unique().notNullable();
      table.string('email', 255).unique().notNullable();
      table.string('password').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('user');
  };