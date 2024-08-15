import { StyleSheet } from "react-native";
import { Text, View } from "../ui/Themed";
import { Formik } from "formik";
import Button from "../ui/Button";
import { router } from "expo-router";
import { loginValidation } from "@/utils/validation";
import { EmailInput, PasswordInput } from "./AuthInputs";
import { calculateStatus } from "@/utils/helpers";

const initialValues = {
  email: "",
  password: "",
};

const LogInForm = () => {

  const onSubmitHandler = async (values: typeof initialValues) => {

  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidation}
      onSubmit={(values) => {
        onSubmitHandler(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome</Text>
          <EmailInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={errors.email}
            status={calculateStatus(errors.email, touched.email, values.email)}
          />
          <PasswordInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            status={calculateStatus(
              errors.password,
              touched.password,
              values.password
            )}
          />

          <View style={styles.buttonContainer}>
            <Button
              disabled={
                Object.keys(errors).length > 0 ||
                Object.keys(touched).length === 0
              }
              onPress={handleSubmit}
              title="Log In"
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    gap: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
