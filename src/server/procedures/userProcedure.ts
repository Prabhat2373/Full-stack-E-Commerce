import { User } from '../models/userModel';
import { procedure, userProcedure } from './../trpc';
import { z } from 'zod';
import cloudinary from 'cloudinary';

export const Register = userProcedure
  .input(
    z.object({
      name: z.string(),
      avatar: z.string(),
    })
  )
  .mutation(async (opts) => {
    const { input, ctx } = opts;
    const { avatar, name, email, password } = input;
    const myCloud = await cloudinary.v2.uploader.upload(avatar.tempFilePath, {
      folder: 'avatars',
      width: 150,
      crop: 'scale',
    });
    const RegisterUser = await User.create({
      name,
      avatar,
      email,
      password,
    });
    return {
      success: 1,
      payload: RegisterUser,
    };
  });
