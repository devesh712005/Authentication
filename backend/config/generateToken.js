import jwt from "jsonwebtoken";
import { redisClient } from "../index.js";

export const generateToken = async (id, res) => {
  const accessToken = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1m", // min 15 min
  });

  const refreshToken = jwt.sign({ id }, process.env.REFRESH_SECRET, {
    expiresIn: "7d",
  });

  const refreshTokenKey = `refresh_token:${id}`;

  await redisClient.setEx(refreshToken, 7 * 24 * 60 * 60, refreshToken);

  res.cookie("accessToken", accessToken, {
    httpOnly: true, // only for backend accessible
    // secure: true, //work only for https
    sameSite: "strict", //no chance of crsf attack
    maxAge: 1 * 60 * 1000, //60 sec
  });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    // secure:true
  });
  return { accessToken, refreshToken };
};
