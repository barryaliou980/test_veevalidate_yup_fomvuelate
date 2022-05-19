import { createApp } from "vue";
import App from "./App.vue";

import FormText from "./components/input-text.vue";
import FormSelect from "./components/input-select.vue";
import FormCheckbox from './components/input-checkbox.vue';
import { SchemaForm } from "formvuelate";
import './index.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'



const app = createApp(App).use(Quasar, quasarUserOptions);

app.component("FormCheckbox", FormCheckbox);
app.component("FormText", FormText);
app.component("FormSelect", FormSelect);
app.component("SchemaForm", SchemaForm);

app.mount("#app");
