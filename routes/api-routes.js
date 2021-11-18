const router = require(`express`).Router();
const path = require('path');
const mongoose = require('mongoose');
const mongojs = require('mongojs');
const db = require(`../models`);

router.get(`/workouts`, (req, res) => {
	db.Workout.find({})
		.then((workout) => {
			console.log(workout);
			res.json(workout);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post(`/workouts`, (req, res) => {
	db.Workout.create({})
	  .then((newWorkout) => {
	    res.json(newWorkout);
	  })
	  .catch((err) => {
	    res.status(400).json(err);
	  });
    });

router.put(`/workouts/:id`, (req, res) => {
	const id = req.params.id;
	const body = req.body;
	db.Workout.findOneAndUpdate({_id: id}, {$push: {exercises: body}})
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});
    
router.put(`/workouts/:id`, (req, res) => {
	const id = req.params.id;
	const body = req.body;
    
	db.Workout.findOneAndUpdate(
	  { _id: id },
	  { $push: { exercises: body } },
	  { new: true, runValidators: true }
	)
	  .then((data) => {
	    res.json(data);
	  })
	  .catch((err) => {
	    res.status(400).json(err);
	  });
    });

router.get(`/workouts/range`, (req, res) => {
	db.Workout.find({})
	.sort({ date: -1 })
    .then((data) => {
    res.json(data);
    })
    .catch((err) => {
    res.status(400).json(err);
    });
});

module.exports = router;