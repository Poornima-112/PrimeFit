const { z } = require("zod");

const loginSchema = z.object({

    email: z
        .string({ require_error: "EmailId is required" })
        .trim()
        .min(3, { message: "EmailId must be atleast of 3 characters" })
        .max(255, { message: "EmailId must not exceed 255 characters" })
        .email({ message: "Invalid email format" }),

    password: z
        .string({ require_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must be atleast of 8 characters" })
        .max(255, { message: "Password must not exceed 255 characters" })

})


//create object schema
const signupSchema = loginSchema.extend({
    username: z
        .string({ require_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 characters" })
        .max(255, { message: "Name must not exceed 255 characters" }),

    phone: z
        .string({ required_error: "Phone no. is required" })
        .trim()
        .length(10, { message: "Phone no. must be exactly 10 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" }),


});

module.exports = { signupSchema, loginSchema };
