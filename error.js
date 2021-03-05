/*
 * Copyright (c) 2020 RethinkDNS and its authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
 
class CustomError extends Error {
  constructor(name,message) {
    super(message);
    this.name = name
  }
}

function CreateError(name,message){
  throw new CustomError(name,message)
}

module.exports.CreateError = CreateError