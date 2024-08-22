<template>
  <div class="container">
    <div class="thank-you-message">
      <p>
        Thank you for using the Bridge Sales Enablement Agency calculator. A
        representative will be in touch with you soon.
      </p>
      <transition name="fade" @after-enter="animationComplete">
        <button v-if="showButton" @click="restart" class="restart-button">
          Restart
        </button>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    restart() {
      localStorage.clear();
      this.$router.push("/");
    },
    animationComplete() {
    },
  },
  mounted() {
    setTimeout(() => {
      this.showButton = true;
    }, 1000);
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease-out, transform 3s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.85);
}

.restart-button {
  @apply px-6 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md;
  transition: background-color 0.3s ease;
}

.restart-button:hover {
  @apply bg-blue-600;
}
</style>