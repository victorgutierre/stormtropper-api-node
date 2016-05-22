'use strict';

let db = require('../db/mongoose');
let schema = require('../schemas/StormtropperSchema');

let StormtropperModel = {
	query: function(query, callback) {
		schema.find(query).exec(callback);
		// db.collection('stormtroppers').find(query, callback);
	},
	findOne: function(query, callback) {
		schema.findOne(query).exec(callback);
		// db.collection('stormtroppers').findOne(query, callback);
	},
	create: function(data, callback) {
		db.collection('stormtroppers').insert(data, callback);
	},
	update: function(query, data, callback) {
		if(query._id) {
			query._id = db.ObjectId(query._id);
		}
		db.collection('stormtroppers').update(query, {$set: data}, callback);
	},
	delete: function(query, callback) {
		if(query._id) {
			query._id = db.ObjectId(query._id);
		}

		db.collection('stormtroppers').remove(query, callback);
	}
};

module.exports = StormtropperModel;