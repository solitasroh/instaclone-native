import React, { useRef, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { gql, useMutation } from "@apollo/client";
import { isLoggedInVar, logUserIn } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(userName: $username, password: $password) {
      ok
      token
      error
    }
  }
`;
export default function Login({ route: { params } }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: params?.password,
      username: params?.username,
    },
  });
  const passwordRef = useRef();
  const onCompleted = async (data) => {
    console.log(data);
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      await logUserIn(token);
    }
  };
  const [logInMutation, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  useEffect(() => {
    register("username", { required: true });
    register("password", { required: true });
  }, [register]);

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    console.log(data);
    //console.log(`login id : ${userName}, password: ${password}`);
    console.log(logInMutation);
    if (!loading) {
      logInMutation({
        variables: {
          ...data,
        },
      });
    }
  };
  console.log(watch("username"));
  return (
    <AuthLayout>
      <TextInput
        value={watch("username")}
        placeholder="Name"
        returnKeyType="next"
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        value={watch("password")}
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
      />
      <AuthButton
        text="Log In"
        loading={loading}
        disabled={!watch("username") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
