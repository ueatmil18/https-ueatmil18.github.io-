import { Question } from "../models/Question.js";
import { mod1dat1,mod2dat1,mod2dat2 } from "./data.js";

// Modulo 1, datos quiz 1
export const questM1D1 = mod1dat1.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);

// Modulo 2, datos quiz 1
export const questM2D1 = mod2dat1.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);

// Modulo 2, datos quiz 2
export const questM2D2 = mod2dat2.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
