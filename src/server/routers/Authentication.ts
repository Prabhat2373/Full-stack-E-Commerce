import { z } from 'zod';
import { procedure, router } from '../trpc';

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
});

// export type definition of API

