<template>
  <div class="container flex flex-col items-center p-8">
    <h2 class="text-gray-800 text-xl font-bold mb-8">CALCULATING YOUR TOTAL COSTS - YOUR RESULTS</h2>
    <div class="dashboard-card bg-white bg-opacity-80 shadow-card rounded-lg p-6 backdrop-blur-md w-full max-w-3xl">
      <div class="calculator organisations text text-gray-700 mb-6">
        <p class="mb-4 leading-6">
          By utilising the Bridge Sales Enablement Agency<br />calculator organisations can simplify the<br />processes associated with indirect procurement<br />and unlock significant typical savings of up to<br />60% of process costs.
        </p>
        <p class="leading-6">
          Based on what you have told us about your process, we can estimate that<br />the following costs are being incurred within your procurement processes.
        </p>
        <button class="btn-primary mt-6" @click="goBack">Go back</button>
      </div>
      <section class="entries-cost text-gray-800">
        <p>Supplier & product: £{{ supplierProductCost.toFixed(2) }}</p>
        <p>Quotation to order process: £{{ quotationOrderCost.toFixed(2) }}</p>
        <p>Expediting & receiving orders: £{{ expeditingCost.toFixed(2) }}</p>
        <p>Processing invoices: £{{ processingCost.toFixed(2) }}</p>
        <p>Paying suppliers: £{{ payingCost.toFixed(2) }}</p>
        <p class="total-cost font-bold text-purple-500 mt-4">
          Total Process Costs (year): £{{ totalCost.toFixed(2) }}
        </p>
        <button class="btn-secondary mt-6" @click="sendReport">Send me this report</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      supplierProductCost: 0,
      quotationOrderCost: 0,
      expeditingCost: 0,
      processingCost: 0,
      payingCost: 0,
      totalCost: 0,
      question1: parseFloat(localStorage.getItem("question1")) || 50000,
      question2: parseFloat(localStorage.getItem("question2")) || 1300,
      question3: parseFloat(localStorage.getItem("question3")) || 30,
      options: JSON.parse(localStorage.getItem("options")) || [],
    };
  },
  mounted() {
    this.calculateCosts();
  },
  methods: {
    sendReport() {
      this.$router.push("/thank-you");
    },
    goBack() {
      this.$router.push("/question3");
    },
    calculateCosts() {
      const identifyRequirements = this.options[0]?.selected
          ? this.options[0].cost
          : 0;
      const requestQuotation = this.options[1]?.selected
          ? this.options[1].cost
          : 0;
      const findProducts = this.options[2]?.selected ? this.options[2].cost : 0;
      const raiseOrder = this.options[3]?.selected ? this.options[3].cost : 0;
      const authorizeSale = this.options[4]?.selected
          ? this.options[4].cost
          : 0;
      const payProvider = this.options[5]?.selected ? this.options[5].cost : 0;
      const deliverProduct = this.options[6]?.selected
          ? this.options[6].cost
          : 0;
      const invoiceCheck = this.options[7]?.selected ? this.options[7].cost : 0;
      const placeOrder = this.options[8]?.selected ? this.options[8].cost : 0;

      this.supplierProductCost =
          (identifyRequirements + requestQuotation) * this.question2;
      this.quotationOrderCost =
          (findProducts + raiseOrder + authorizeSale + payProvider) *
          this.question2;
      this.expeditingCost = deliverProduct * this.question1;
      this.processingCost = invoiceCheck * this.question2;
      this.payingCost = placeOrder * this.question3;

      this.totalCost =
          this.supplierProductCost +
          this.quotationOrderCost +
          this.expeditingCost +
          this.processingCost +
          this.payingCost;
    },
  },
};
</script>
