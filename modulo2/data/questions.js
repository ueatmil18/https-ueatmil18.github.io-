import { Question } from "../models/Question.js";
import { data,data2 } from "./data.js";

export const questions1 = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);

export const questions2 = data2.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
