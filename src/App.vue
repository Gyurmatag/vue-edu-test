<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <MessageDisplay :message="message" />
      <ToggleButton @toggle="toggleMessage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MessageDisplay from "./components/MessageDisplay.vue";
import ToggleButton from "./components/ToggleButton.vue";

const message = ref("Hello!");

const toggleMessage = () => {
  message.value = message.value === "Hello!" ? "Goodbye!" : "Hello!";
};
</script>
