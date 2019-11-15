exports.up = function(knex, Promise) {
    return knex.schema.createTable('post', table => {
      table.increments();
      table.string('title', 255).notNullable();
      table.string('medium', 255).notNullable();
      table.text('image_url').notNullable();
      table.text('description').notNullable();
      table.integer('likes').defaultTo(0)
      table.timestamps(true, true);
      table.integer('user_id').notNullable().references('id').inTable('user').onDelete('CASCADE').index();
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('post');
  };