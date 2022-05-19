
<template>
  <q-input
      style="width: 425px"
      filled
      square
      :label="label"
      v-model="value"
      :error-message="errorMessage"
      :error="!!errorMessage"
  />
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: {
  model: { 
    type:String,
    required: true },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
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
