const db = require('../db/config');

const Places = {};

Places.findAll = () => {
  return db.query(`SELECT * FROM venues`);
};

Places.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM venues
    WHERE id = $1
  `,
    [id]
  );
};

Places.create = venues => {
  return db.one(
    `
    INSERT INTO venues
    (flavor, description, rating, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [icecream.flavor, icecream.description, icecream.rating, icecream.url]
  );
};

Places.update = (icecream, id) => {
  return db.one(
    `
    UPDATE icecream SET
      flavor = $1,
      description = $2,
      rating = $3,
      url = $4
    WHERE id = $5
    RETURNING *
  `,
    [icecream.flavor, icecream.description, icecream.rating, icecream.url, id]
  );
};

Places.destroy = id => {
  return db.none(
    `
    DELETE FROM icecream
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Icecream;
