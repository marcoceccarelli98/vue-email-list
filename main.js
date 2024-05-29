"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
      num: 10,
    };
  },

  methods: {
    apiCall() {
      return axios
        .get(this.url)
        .then((response) => this.emails.push(response.data.response))
        .catch((error) => console.log(error));
    },

    getEmails(num) {
      for (let i = 0; i < num; i++) {
        this.apiCall();
      }
    },
  },

  created() {
    this.getEmails(this.num);
  },
}).mount("#app");
