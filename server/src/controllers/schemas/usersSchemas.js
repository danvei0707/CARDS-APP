import z from 'zod'

const userSchemas = 
// {};

// userSchemas.register =
 
z.object ({
    username: z.string().min(6).max(30),
    email: z.string().email(),
    password: z.string().min(8)
        // Regex:
        // At least 1 lowercase, 1 uppercase, 1 digit, 1 special character of the list (@$!%*?&])
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)

});

export default userSchemas;