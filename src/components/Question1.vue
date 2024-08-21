<template>
  <div class="container">
    <h2>CALCULATING YOUR TOTAL COSTS</h2>
    <div class="card">
      <button @click="Home"> < </button>
      <p>
        What is your approximate annual
        <br />
        Spend on industrial items?
      </p>
      <input
        type="number"
        v-model="question1"
        @input="updateTotalSpend"
        placeholder="50000"
      />
      <button @click="nextQuestion"> > </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question1",
  data() {
    return {
      question1: parseFloat(localStorage.getItem("question1")) || 50000,
    };
  },
  methods: {
    updateTotalSpend() {
      localStorage.setItem("question1", this.question1);
    },
    nextQuestion() {
      this.$router.push("/question2");
    },
    Home() {
      this.$router.push("/");
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