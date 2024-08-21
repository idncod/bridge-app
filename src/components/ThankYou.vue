<template>
  <div class="container">
    <div class="thank-you-message">
      <p>
        Thank you for using the Bridge Sales Enablement Agency calculator. A
        representative will be in touch with you soon.
      </p>
      <button @click="restart">Restart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  methods: {
    restart() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
