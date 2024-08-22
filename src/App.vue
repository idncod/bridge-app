<template>
  <div class="global-bg">
    <div :style="backgroundImageStyle" class="blur-bg"></div>
    <div class="white-overlay"></div>
    <router-view v-slot="{ Component }">
      <transition
          name="fade"
          enter-active-class="transition-all duration-700 ease-in-out"
          leave-active-class="transition-all duration-700 ease-in-out"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90"
          mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import './assets/styles.css'
import homeBackground from "@/assets/home.png";

export default {
  name: "App",

  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(10px)",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }
    },
  }
};
</script>

<style>
.white-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: -1;
}
</style>
