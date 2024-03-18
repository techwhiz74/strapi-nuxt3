<template>
    <label :for="item.InputID" class="w-full my-4 items-center font-bold">{{item.Label}} <span v-if="item.Required">*</span></label>
    <p v-if="item.Help">{{ item.Help }}</p>
    <div class="rounded max-w-[300] mx-auto">
        <div class="flex flex-wrap gap-4">
            <input v-on:change="handleChange" type="file" :required="item.Required" :id="item.InputID">
            <button 
            ref="fileButton" 
            @click="onSubmit" 
            disabled 
            required
            class="disabled:opacity-60 disabled:bg-light-grey bg-white p-4 rounded-md">Upload file</button>
            <p  v-show="fileErrorMsg" class="text-coral w-full">Please only upload pdfs</p>
            <AtomsProgress class="w-full" :submitted="submitted" :percent="percent" />
        </div>
    </div>
</template>

<script setup>
defineProps(['item']);
</script>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fileErrorMsg: false,
      file: null,
      percent: 0,
      submitted: false
    }
  },
  methods: {
    handleChange(e) {
        this.submitted = false;
        if(e.target.files[0].type !== 'application/pdf') {
           this.fileErrorMsg = true;
        } else {
            this.$refs.fileButton.disabled = false;
            this.fileErrorMsg = false;
            this.file = e.target.files[0];
        }
    },
    async onSubmit(e) {
        e.preventDefault();
        this.submitted = true;

        const formData = new FormData();
        formData.append(`files`, this.file, this.file.name);

        const upload_res = await axios({
            method: 'post',
            url: import.meta.env.VITE_STRAPI_URL + 'api/upload',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                this.percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            }
        });
    },

    
  }
}
</script>
