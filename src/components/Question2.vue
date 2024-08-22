<template>
  <div class="container">
    <h2>CALCULATING YOUR TOTAL COSTS</h2>
    <div class="card">
      <button @click="question1"> < </button>
      <p>
        Approximately how many unique<br />purchase orders are raised per<br />annum
        for these items?
      </p>
      <input
        type="number"
        v-model="purchaseOrders"
        @input="updatePurchaseOrders"
        placeholder="1,300"
        data-test="question2-input"
      />
      <button @click="nextQuestion" data-test="continue2-button"> > </button>
    </div>
  </div>
</template>

<script>
import Question1 from "@/components/Question1.vue";

export default {
  name: "Question2",
  computed: {
    Question1() {
      return Question1
    }
  },
  data() {
    return {
      purchaseOrders: parseFloat(localStorage.getItem("question2")) || 1300,
    };
  },
  methods: {
    updatePurchaseOrders() {
      localStorage.setItem("question2", this.purchaseOrders);
    },
    nextQuestion() {
      localStorage.setItem("question2", this.purchaseOrders);

      this.$router.push("/question3");
    },
    question1() {
      localStorage.setItem("question2", this.purchaseOrders);

      this.$router.push("/question1");
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