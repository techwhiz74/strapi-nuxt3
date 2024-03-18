<template>
    <h3 class="text-center mb-8 mx-auto">{{zone.form.data.attributes.Description}}</h3>
    <div class="rounded-lg lg:col-span-3 lg:p-12">
        <form v-on:submit="onSubmit" ref="el" action="" :class="'space-y-4 max-w-screen-3xl lg:w-1/2 lg:mx-auto plausible-event-name=Form+Submit-' + zone.form.data.attributes.FormFields.FormId" :key="zone.form.data.attributes.FormFields.FormId" :id="zone.form.data.attributes.FormFields.FormId">
        
        <div v-for="field in formFields" :key="field.InputID">
            <AtomsFormAtomsText v-if="validTypes.includes(field.Type)" :item="field" :type="field.Type" />
            <AtomsFormAtomsTextarea v-if="field.Type === 'textarea'" :item="field" />
            <AtomsFormAtomsSelect v-else-if="field.Type === 'select'" :item="field" :options="field.Options" />
            <AtomsFormAtomsCheckbox v-else-if="field.Type === 'checkbox'" :item="field" />
            <AtomsFormAtomsOptions v-else-if="field.Type === 'option'" :item="field" />
            <AtomsFormAtomsDate v-else-if="field.Type === 'date'" :item="field" />
            <AtomsFormAtomsRange v-else-if="field.Type === 'scale'" :item="field" :min="field.Min" :max="field.Max" />
            <AtomsFormAtomsFileUpload v-else-if="field.Type === 'file'" :item="field" />
        </div>

        <div class="mt-4">
            <button id="submit"
            type="submit"
            class="px-8 w-full md:w-auto rounded-full py-3 font-bold bg-secondary transition text-primaryAcc transition hover:ease-in hover:!bg-primaryLight">
            {{ zone.form.data.attributes.FormFields.ButtonLabel }}
            </button>
        </div>

        <div v-show="errorMsg" class="bg-red-100 p-4">
            <p>Sorry there seems to be a problem submitting the form, please make sure all fields are filled out and try again.</p>
        </div>
        </form>
    </div>
</template>

<script setup>
const props = defineProps({zone: Object});

const formFields = props.zone.form.data.attributes.FormFields.CustomInput;
</script>

<script>
import axios from 'axios';

export default {
data() {
return {
  errorMsg: false,
  validTypes: ['text', 'tel', 'email', 'url', 'number'],
}
},
methods: {
onSubmit(e) {
    e.preventDefault();
    console.log("onsubmit running");
    const el = document.getElementById(this.zone.form.data.attributes.FormFields.FormId);
    const formElements = Array.from(el.elements);
    const formObj = {};

    formElements.forEach(element => {
        if(element.type === 'submit') return;
        if (element.type === 'checkbox') {
            if (element.checked) {
                formObj[element.id] = element.value;
            }
        } 
        else if(element.type === 'file') {
            formObj[element.id] = element.files[0].name;
        }
        else if(element.type === 'radio') {
            if(element.checked) {
                formObj[element.name] = element.value;
            }
        }
        else {
            formObj[element.id] = element.value;
        }
    });

    const url = import.meta.env.VITE_STRAPI_URL + 'api/ezforms/submit';
    grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, {action: 'submit_form'})
    .then((token) => {
        const Json = JSON.stringify(formObj, null, 3);
        const JsonObj = JSON.parse(Json);
        axios.post(url, {token, formName: this.zone.form.data.attributes.FormFields.FormId, formData: JsonObj})
            .then(() => {
                this.$router.push("/thankyou");
                this.errorMsg = false;
            })
            .catch((error) => {
                console.log(error.response.status);
                console.log(error.code);
                console.log('request url', url);
                this.errorMsg = true;
                plausible('Form Error ' + this.zone.form.data.attributes.FormFields.FormId);
            });
    });
},
}
}
</script>