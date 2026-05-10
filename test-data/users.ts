const PASSWORD = process.env.PASSWORD || 'secret_sauce';

export const users = {
  standard: {
    username: process.env.STANDARD_USER || 'standard_user',
    password: PASSWORD,
  },
  locked: {
    username: process.env.LOCKED_USER || 'locked_out_user',
    password: PASSWORD,
  },
  problem: {
    username: process.env.PROBLEM_USER || 'problem_user',
    password: PASSWORD,
  },
};
