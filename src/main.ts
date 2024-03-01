import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import PrimeVue from 'primevue/config'
import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/saga-blue/theme.css"

import AutoComplete from 'primevue/autocomplete'
import Button from "primevue/button"
import Calendar from "primevue/calendar"
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from "primevue/column"
import DataTable from "primevue/datatable"
import Dialog from "primevue/dialog"
import Divider from "primevue/divider"
import Dropdown from "primevue/dropdown"
import Fieldset from "primevue/fieldset"
import InlineMessage from "primevue/inlinemessage"
import InputMask from "primevue/inputmask"
import InputNumber from "primevue/inputnumber"
import InputText from "primevue/inputtext"
import Menubar from "primevue/menubar"
import Paginator from 'primevue/paginator'
import Panel from "primevue/panel"
import Password from "primevue/password"
import ProgressSpinner from "primevue/progressspinner"
import RadioButton from "primevue/radiobutton"
import Textarea from 'primevue/textarea'
import Tooltip from "primevue/tooltip"
import ClassCard from './components/componentPadrao/GlassCard.vue'
import ComponentConfigUtils from './components/configUtil/ComponentConfigUtil'
import { BR } from './components/configUtil/locale'


const app = createApp(App)

//PrimeVue
app.component("p-button", Button);
app.component("p-paginator", Paginator);
app.component("p-menuBar", Menubar);
app.component("p-panel", Panel);
app.component("p-inputtext", InputText);
app.component("p-textarea", Textarea);
app.component("p-inputNumber", InputNumber);
app.component("p-inputMask", InputMask);
app.component("p-fieldset", Fieldset);
app.component("p-divider", Divider);
app.component("p-progressSpinner", ProgressSpinner);
app.component("p-dropdown", Dropdown);
app.component("p-radioButton", RadioButton);
app.component("p-inlineMessage", InlineMessage);
app.component("p-dialog", Dialog);
app.component("p-dataTable", DataTable);
app.component("p-column", Column);
app.component("p-password", Password);
app.component("p-calendar", Calendar);
app.component("p-autocomplete", AutoComplete);
app.component("p-checkbox", Checkbox);
app.component("p-card", Card);

//Componentes Padrões

app.component("padrao-card", ClassCard);



app.directive("tooltip", Tooltip)
app.config.globalProperties.$setCursorPositionToStart = ComponentConfigUtils.setCursorPositionToStart;
// app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    locale: BR,
})

app.mount('#app')

export { }

