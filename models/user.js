const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	membership_status: {
		type: Boolean,
		required: true
	},
	admin_status: {
		type: Boolean,
		required: false
	}
});

UserSchema.virtual('name').get(function () {
	return this.first_name + this.last_name;
});

module.exports = mongoose.model('User', UserSchema);
