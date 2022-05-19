<template>
     <q-select 
         style="width: 425px"
        :error-message="errorMessage"
        :error="!!errorMessage"
         v-model="value"
         filled
         square
     />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useField } from "vee-validate";


export default defineComponent({
   props: {
      model: {
          required: true 
      },
   validation: {
         type: Object,
         default: () => ({}),
      },
   },
   setup(props) {
          const { errorMessage, value } = useField(props.model);
      return {
         errorMessage,
         value
      }
   }
});
</script>
