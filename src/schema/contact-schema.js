import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  subject: yup.string().min(3, "Subject should be longer").required("Subject is Required"),
  name: yup.string().min(3, "Name must be a least 3 characters long").required("Name is Required"),
  email: yup.string().email("Please enter a valid email").required("Email is Required"),
  message: yup.string().min(20, "Please write more message").required("Message is Required"),
});