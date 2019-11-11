'use strict';

const {UserFacingError} = require ('./0_baseClass');

class BadRequestError extends UserFacingError {
  getStatusCode(){
    return 400;
  }
}

class NotFoundError extends UserFacingError {
  getStatusCode(){
    return 404;
  }
}

module.exports = {
  BadRequestError, NotFoundError
}