
<template>
  <q-field
     style="width: 425px"
    :borderless="true"
    :error="!!errorMessage"
    :error-message="errorMessage"
  >
    <q-checkbox 
     indeterminate-value="maybe"
      v-model="value"
     :label="label" 
    />
  </q-field>
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: {
    model: {
        type: [String, Number],
    },
    label: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { errorMessage, value } = useField(props.model);
    return {
      errorMessage,
      value,
    };
  },
};
</script>
