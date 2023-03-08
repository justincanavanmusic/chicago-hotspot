const Attractions = require('./attractions');
const Users = require('./users');
const Reviews = require('./reviews');

Users.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Reviews.belongsTo(Users, {
    foreignKey: 'user_id',
});

Attractions.hasMany(Reviews, {
    foreignKey: 'attraction_id',
    onDelete: 'CASCADE'
});

Reviews.belongsTo(Attractions, {
    foreignKey: 'attraction_id'
});

module.exports = { Attractions, Users, Reviews };

