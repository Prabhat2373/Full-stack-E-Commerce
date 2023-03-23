import { z } from 'zod';
import { procedure, router, userProcedure } from '../trpc';
import { Register } from '../procedures/userProcedure';

export const authRouter = router({
  login: procedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .output(
      z.object({
        success: z.number(),
        user: z.object({
          email: z.string(),
          password: z.string(),
        }),
      })
    )
    .mutation((opts) => {
      const { ctx, input } = opts;
      return {
        success: 1,
        user: {
          email: input.email,
          password: input.password,
        },
      };
    }),
  register: Register,
});
