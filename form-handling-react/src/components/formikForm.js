import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <Card className="max-w-md mx-auto mt-10 shadow-lg rounded-2xl">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">User Registration (Formik)</h2>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form submitted:", values);
            alert("Registration successful!");
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Username */}
              <div>
                <Label htmlFor="username">Username</Label>
                <Field
                  as={Input}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email</Label>
                <Field
                  as={Input}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password">Password</Label>
                <Field
                  as={Input}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default FormikForm;
