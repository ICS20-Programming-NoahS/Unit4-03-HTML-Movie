// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: Apr 2023
// This file contains the JS functions for index.html


"use strict";

/**
 * This function determines what movie the user is allowed to watch based on their age
 */
function UserAge() {
  //get age of user
  let result = "";
  let age = parseInt(document.getElementById("user-age").value);
  
  // Tells user to enter a positive age
  if (age < 0) {
    result = "Enter a valid age!";
  }

  // Tells user that they can watch R rated movies
  else if (age > 17) {
    result = "You can watch R rated movies by yourself.";
  }

  // Tells user that they can watch PG-13 movies
  else if (age > 12) {
    result = "You can watch PG-13 rated movies by yourself.";
  }

  // Tells user that they can watch PG or G rated movies
  else if (age >= 5 ) {
    result = "You can watch PG or G rated movies by yourself.";
  }

  // Tells user that they cannot watch a movie alone
  else if (age < 5) {
    result = "You should not watch a movie alone.";
  }

  // Tells user to enter their age instead of leaving it blank
  else {
    result = "Enter a valid age!";
  }
  
  // Displays what movie they can watch back to the user
  document.getElementById("result").innerHTML = result;
}