//1st way
// Here asyncHandler is wrapper
/*The asyncHandler function is used to simplify error handling in Express routes. Without asyncHandler, you would need to use try...catch blocks in every asynchronous route handler to catch errors and pass them to the next middleware. By using asyncHandler, you can avoid repetitive error-handling code and ensure that all errors are handled consistently.*/

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//2nd way
//higher order function is a function that accepts functions as parameters and/or returns a function.
// Breakdown
// const asyncHandler = () => {}
// const asyncHandler = (fun) => {() => {}}
// const asyncHandler = (fun) => async() => {}
/*

below is a wrapper which takes execute function and catch error if any
const asyncHandler = (fnc) => async (req, res, next) => {
  try {
    await fnc(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};
*/
