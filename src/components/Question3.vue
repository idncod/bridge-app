<template>
  <div class="container">
    <h2>CALCULATING YOUR TOTAL COSTS</h2>
    <div class="card">
      <button @click="question2"> < </button>
      <p>
        Approximately how many suppliers<br />are you using for industrial<br />supplies?
      </p>
      <input
        type="number"
        v-model="suppliers"
        @input="updateSuppliers"
        placeholder="30"
        data-test="question3-input"
      />
      <button @click="viewResults" data-test="continue3-button"> > </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question3",
  data() {
    return {
      suppliers: parseFloat(localStorage.getItem("question3")) || 30,
    };
  },
  methods: {
    updateSuppliers() {
      localStorage.setItem("question3", this.suppliers);
    },
    viewResults() {
      localStorage.setItem("question3", this.suppliers);

      this.$router.push("/dashboard");
    },
    question2() {
      localStorage.setItem("question3", this.suppliers);

      this.$router.push("/question2");
    },
  },
};
</script>

<style scoped>
* {
  display: flex;
  flex-flow: row wrap;
  align-items: center
}
</style>