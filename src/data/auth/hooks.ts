import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormSchema, signInFormSchema } from "./constants";

import {useSignUpMutation, useSignInMutation} from "../../redux/api"

export const useSignInForm = async () => {
  const [signInApi] = await useSignInMutation();

  const signInFormAction = useForm<any>({
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmitSignIn = signInFormAction.handleSubmit((data) => {
    try {
      signInApi(data)
    } catch (error) {
      console.log(error);
    }
  });

  return {
    signInFormAction,
    onSubmitSignIn,
  };
};

export const useSignUpForm = async () => {
  const [signUpApi] = await useSignUpMutation();

  const signUpFormAction = useForm<any>({
    resolver: yupResolver(signUpFormSchema),
  });
  const onSubmitSignUp = signUpFormAction.handleSubmit((data) => {
    try {
      signUpApi(data)
    } catch (error) {
      console.log(error);
    }
  });

  return {
    signUpFormAction,
    onSubmitSignUp,
  };
};
