// mimic auth
const isAuthenticated = (req, res, next) => {
  const login = false;
  if (login) {
    next();
  } else {
    res.json({
      message: "user not authenticated",
    });
  }
};

module.exports = isAuthenticated;
