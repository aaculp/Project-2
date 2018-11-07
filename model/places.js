const db = require('../db/config');

const Places = {};

Places.findAll = () => {
  return db.query(`SELECT * FROM fav`);
};

Places.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM fav
    WHERE id = $1
  `,
    [id]
  );
};

Places.create = fav => {
  return db.one(
    `
    INSERT INTO fav
    (venue_name, venue_address, reviews, rating)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [fav.venue_name, fav.venue_address, fav.reviews, fav.rating]
  );
};

Places.update = (fav, id) => {
  return db.one(
    `
    UPDATE fav SET
      venue_name = $1,
      venue_address = $2,
      reviews = $3,
      rating = $4
    WHERE id = $5
    RETURNING *
  `,
    [fav.venue_name, fav.venue_address, fav.reviews, fav.rating, id]
  );
};

Places.destroy = id => {
  return db.none(
    `
    DELETE FROM fav
    WHERE id = $1
  `,
    [id]
  );
};

Places.findAllUsers = () => {
  return db.query(`SELECT * FROM users`);
};

Places.loginCreate = users => {
  return db.one(
    `
    INSERT INTO users
    (username, password)
    VALUES ($1, $2)
    RETURNING *
  `,
    [users.username, users.password]
  );
};

module.exports = Places;
