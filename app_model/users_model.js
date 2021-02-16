"use strict";
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({

    name: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact_number: {
        type: Number,
        default: "",
        required: true
    },
    gender: {
        type: String,
        default: "",
        required: true
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    hobbies: {
        type: String,
        required: false
    },


}, { strict: true, timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });



module.exports = mongoose.model('User', UserSchema);
