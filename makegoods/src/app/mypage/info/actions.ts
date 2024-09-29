"use server";

import { createClient } from "../../../../utils/supabase/server";

const supabase = createClient();

export const updatePhone = async (formData: FormData) => {
  const phoneNumber = formData.get("phoneNumber") as string;

  const { data, error } = await supabase.auth.updateUser({
    data: {
      phone: phoneNumber,
    },
  });

  if (error) {
    console.log(error);
  }

  return data;
};

export const changePassword = async (formData: FormData) => {
  const oldPassword = formData.get("oldpassword") as string;
  const newPassword = formData.get("newpassword") as string;
  const renewPassword = formData.get("renewpassword") as string;

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error("Failed to retrieve user data.");
  }

  const { data: loggedUser, error: loggedError } =
    await supabase.auth.signInWithPassword({
      email: user.email,
      password: oldPassword,
    });

  if (loggedError) {
    throw new Error(loggedError.code);
  }

  if (newPassword !== renewPassword) {
    throw new Error("새로운 비밀번호가 일치하지 않습니다.");
  }

  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    console.error("Error updating password:", error.message);
    return error;
  }

  return data;
};
