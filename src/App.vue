<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="fas fa-bars"
        />
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
     <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
   <Form
        :initial-values="formData"
        :validation-schema="schemaRules"
        @submit="onSubmit"
      >
     <SchemaForm
          :schema="parsedSchema"
      >
        <template v-slot:afterForm>

        </template>
      </SchemaForm>
                   <q-btn class="q-mt-md" color="primary" type="submit" label="Submit" />
      </Form>
      </div>
    </q-page-container>
  </q-layout>
</template>


<script lang="ts">
import { ref,  reactive } from "vue";
import { useSchemaForm } from "formvuelate";
import {schemaRules} from './type/type'
import { Field, Form ,useForm} from "vee-validate";

    const objSchema ={
          fullName: {
              component: "FormText",
              label: "Full Name",
              model:"fullName",
              validation:{},
            },
            email: {
              component: "FormText",
              label: "Email",
              required: true,
              type: "email",
              model:"email",
              config: {},
              validation:{}
            },
            front: {
              component: "FormSelect",
              label: "Votre Framework Front",
              required: true,
              model:"front",
              options: ["VueJS", "ReactJS", "AngularJS"],
              validation:{}
            },
               is_human: {
              component: "FormCheckbox",
              label: "Etes vous un human",
              model:"is_human",
              validation:{}
            },
      }
export default {

    components:{
      Field,
        Form,
        },
    
    setup() {
        const schema = ref(JSON.stringify(objSchema, null, 2));
        const currentSchemaType = ref("object");
        const formData = ref({
          is_human: false,
          email:"",
          front:"",
          fullName:""
        });
  
        useSchemaForm(formData);
        const options = reactive({
            preventModelCleanupOnSchemaChange: false,
        });
        const parsedSchema = ref(JSON.parse(schema.value));
        const  onSubmit = () => {
          console.log("OK!");
        }
        return {
            schema,
            parsedSchema,
            formData,
            options,
            schemaRules,
            currentSchemaType,
            onSubmit
        };
    },
};
</script>