     
     import * as yup from "yup";

     export const schemaRules = yup.object({
      email: yup.string().required().email(),
      fullName: yup.string().required(),
      password: yup.string().required(),
      front:  yup.string().required(),
      is_human: yup.boolean().required()
        .isTrue("Cocher la case pour continuer")
        
    });