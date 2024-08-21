<template>
  <div class="relative flex flex-col items-center justify-center min-h-screen text-center">
    <div :style="backgroundImageStyle" class="blur-bg"></div>
    <h1 class="text-red-600 text-2xl font-bold mb-4 relative z-10">CALCULATING YOUR TOTAL COSTS</h1>

    <div class="grid grid-cols-3 gap-4 bg-white p-8 rounded-lg shadow-lg relative z-10">
      <div v-for="(option, index) in options" :key="index" class="flex items-center space-x-2">
        <input
            type="checkbox"
            v-model="option.selected"
            @change="updateTotalCost"
            class="form-checkbox h-6 w-6 text-purple-600"
        />
        <label class="text-lg font-semibold text-purple-700">{{ option.name }}: £{{ option.cost.toFixed(2) }}</label>
      </div>
    </div>

    <p class="text-xl font-semibold text-red-600 mt-8 relative z-10">
      Total: £{{ totalCost.toFixed(2) }}
    </p>

    <button @click="goToQuestions" class="px-6 py-3 bg-red-500 text-white font-bold rounded-full mt-4 hover:bg-red-600 relative z-10">
      Continue
    </button>
  </div>
</template>

<script>
import homeBackground from "@/assets/home.png";

export default {
  data() {
    return {
      options: JSON.parse(localStorage.getItem("options")) || [
        { name: "Identify requirements", cost: 6.0, selected: false },
        { name: "Request a quotation", cost: 3.0, selected: false },
        { name: "Find products", cost: 16.0, selected: false },
        { name: "Raise an order", cost: 6.0, selected: false },
        { name: "Authorize sale", cost: 21.55, selected: false },
        { name: "Pay provider", cost: 13.0, selected: false },
        { name: "Deliver product", cost: 4.3, selected: false },
        { name: "Invoice check", cost: 6.0, selected: false },
        { name: "Place order", cost: 6.5, selected: false },
      ],
      totalCost: 0.0,
      question1: parseFloat(localStorage.getItem("question1")) || 50000.0,
      question2: parseFloat(localStorage.getItem("question2")) || 1300.0,
      question3: parseFloat(localStorage.getItem("question3")) || 30,
    };
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(10px)",
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      };
    },
  },
  methods: {
    updateTotalCost() {
      localStorage.setItem("options", JSON.stringify(this.options));

      const identifyRequirements = this.options[0].selected
          ? this.options[0].cost
          : 0;
      const requestQuotation = this.options[1].selected
          ? this.options[1].cost
          : 0;
      const findProducts = this.options[2].selected ? this.options[2].cost : 0;
      const raiseOrder = this.options[3].selected ? this.options[3].cost : 0;
      const authorizeSale = this.options[4].selected ? this.options[4].cost : 0;
      const payProvider = this.options[5].selected ? this.options[5].cost : 0;
      const deliverProduct = this.options[6].selected
          ? this.options[6].cost
          : 0;
      const invoiceCheck = this.options[7].selected ? this.options[7].cost : 0;
      const placeOrder = this.options[8].selected ? this.options[8].cost : 0;

      this.totalCost =
          (identifyRequirements + requestQuotation) * this.question2 +
          (findProducts + raiseOrder + authorizeSale + payProvider) *
          this.question2 +
          deliverProduct * this.question1 +
          invoiceCheck * this.question2 +
          placeOrder * this.question3;
    },
    goToQuestions() {
      localStorage.setItem("question1", this.question1);
      localStorage.setItem("question2", this.question2);
      localStorage.setItem("question3", this.question3);

      this.saveState();
      this.$router.push("/question1");
    },
    saveState() {
      localStorage.setItem("question1", this.question1);
      localStorage.setItem("question2", this.question2);
      localStorage.setItem("question3", this.question3);
      localStorage.setItem("options", JSON.stringify(this.options));
    },
    loadState() {
      const savedOptions = localStorage.getItem("options");
      if (savedOptions) {
        this.options = JSON.parse(savedOptions);
      }
    },
  },
  mounted() {
    this.loadState();
    this.updateTotalCost();
  },
};
</script>

<style>
.blur-bg {
  @apply absolute inset-0 bg-no-repeat bg-cover bg-center filter blur-lg;
  z-index: -1;
}
</style>
