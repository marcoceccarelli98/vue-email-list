"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      emailList: [],
    };
  },

  methods: {
    async apiCall() {
      try {
        const response = await axios.get(this.url);
        return response.data.response;
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed
        return null; // or throw the error, or any other error handling logic
      }
      //axios.get(this.url).then((response) => {
      //return response.data.response;
      //console.log(response.data.response);
    },

    async getEmails(num) {
      for (let i = 0; i < num; i++) {
        const email = await this.apiCall();
        if (email) {
          this.emailList.push(email);
        }
      }
    },
  },

  created() {
    this.getEmails(10);
    console.log(this.emailList);
  },
}).mount("#app");
