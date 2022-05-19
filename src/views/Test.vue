<template>
  <div class=" ml-8 q-pl-md">
    <h1 class="text-h4 text-weight-bold">Test veeValidate Quasar Yup and VueFormLate</h1>
    <div class="q-mt-md q-gutter-md" style="max-width: 300px">
      <Form
        :initial-values="initialValues"
        :validation-schema="schema"
        @submit="onSubmit"
      >
        <FormText
          name="fullName"
          label="Full name"
          placeholder="John Doe"
        />
        <FormText
          label="Password"
          name="password"
          placeholder="p@$$vv0Rd"
        />
        <FormCheckbox 
           name="is_human"
           label="Are you a human ?"
        />
        <q-btn class="q-mt-md" color="primary" type="submit" label="Submit" />
      </Form>
    </div>
  </div>
</template>

<script>
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import QInputWithValidation from "../components/QInputWithValidation.vue";
import QCheckboxWithValidation from "../components/QCheckboxWithValidation.vue";

export default {
  name: "App",
  components: {
    Field,
    Form,
    QInputWithValidation,
    QCheckboxWithValidation,
  },
  setup() {
    const schema = yup.object({
      email: yup.string().required().email().label("Email address"),
      fullName: yup.string().required().label("Full name"),
      password: yup.string().required().min(6).label("Password"),
      is_human: yup
        .boolean()
        .required()
        .isTrue("Vous devez accepter tou ")
        .label("terms agreement"),
        
    });
    const initialValues = {
      terms: false,
      subscribed: false,
    };

    function onSubmit(values, actions) {
      console.log(JSON.stringify(values, null, 2));
      actions.resetForm();
    }

    return {
      onSubmit,
      schema,
      initialValues,
    };
  },
};
</script>
