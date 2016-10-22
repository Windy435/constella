exports.validateSchedule = {

	validator: function (schedule) {
		return schedule.depature < schedule.arrival
	},
	message: "Invalid schedule"
}

exports.validateSeats = {
	validator: function(seats) {
		return seats.length >= 1;
	},
	message: 'Invalid seats configuration'
}