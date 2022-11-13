import { Question } from "../models/Question.js";
import { mod1dat1,mod1dat2 } from "./data.js";

export const questM1D1 = mod1dat1.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);

export const questM1D2 = mod1dat2.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
