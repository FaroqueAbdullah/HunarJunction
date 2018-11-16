const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tokenSchema = new Schema({
    talentID: String,
    talentName: String,
    talentSkill: String,
    clientID: String,
    clientName: String,
    bookingDate: String,
    bookingTime: String,
    eventName: String,
    eventLocation : String,
    eventDate : String,
    eventDuration : String,
    contactOfClient: String,
    description : String
});

const Token = mongoose.model('token', tokenSchema);

module.exports = Token;
