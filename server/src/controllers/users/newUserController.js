import { validateSchemaUtil } from "../../utils/validationFunction.js";
import userSchemas from "../schemas/usersSchemas.js";


export async function newUserController (req, res, next) {
    try {
        
        const {username, email, password } = req.body;

        // await validateSchemaUtil(userSchemas.register, req.body);
        const validation = await userSchemas.parse(req.body);

        console.log(validation);



        const registrationCode = crypto.randomUUID();

        // await insertDbFunction(username, email, password, registrationCode);

        //* If the process has been succesful:
        res.status(200).send({
            status: "ok",
            message: {
                username,
                email,
                password,
                registrationCode
            }

            //! ¿Por qué manda el registration code?
            // data: { registrationCode },
        })

    } catch (error) {
        next(error);
    }
}