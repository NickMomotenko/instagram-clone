import React from "react";

export const useDate = () => {
  const date = new Date();

  const splitArrayFromDate = date.toString().split(" ");

  const dayNumber = date.getDate();
  const monthName = splitArrayFromDate[1];
  const weekName = splitArrayFromDate[0];
  const year = date.getFullYear();

  return { dayNumber, weekName, monthName, year };
};
