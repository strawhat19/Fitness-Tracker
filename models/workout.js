const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					trim: true,
					required: true,
				},
				name: {
					type: String,
					required: true,
				},
				duration: {
					type: Number,
					required: true,
				},
				weight: {
					type: Number,
				},
				reps: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				distance: {
					type: Number,
				},
			},
		],
	},
	{
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	} 
	);

workoutSchema.virtual(`totalDuration`).get(function () {
	return this.exercises.reduce((duration, singleExercise) => {
		return duration + singleExercise.duration;
	}, 0);
});

const Workout = mongoose.model(`Workout`, workoutSchema);

module.exports = Workout;