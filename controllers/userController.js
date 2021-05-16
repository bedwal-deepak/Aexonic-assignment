const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(User.find(), req.query).paginate();
  const users = await features.query;
  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!!",
  });
};

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //return updated data
    runValidators: true, // if true then validate the update operation against the model's schema
  });

  if (!user) {
    //if no user found with given id
    return next(new AppError("No user found with that ID", 404));
  }

  res.status(200).json({
    status: "sucess",
    data: {
      user,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  var features;
  if (req.query.firstName) {
    features = new APIFeatures(
      User.find({ firstName: req.query.firstName }),
      req.query
    ).paginate();
  }
  if (req.query.lastName) {
    features = new APIFeatures(
      User.find({ lastName: req.query.lastName }),
      req.query
    ).paginate();
  }
  if (req.query.email) {
    features = new APIFeatures(
      User.find({ email: req.query.email }),
      req.query
    ).paginate();
  }
  if (req.query.mobile) {
    features = new APIFeatures(
      User.find({ mobile: req.query.mobile }),
      req.query
    ).paginate();
  }
  const user = await features.query;

  if (!user) {
    //if no user found with given id
    return next(new AppError("No user found with that Key", 404));
  }

  res.status(200).json({
    status: "success",
    results: user.length,
    data: {
      user,
    },
  });
});
