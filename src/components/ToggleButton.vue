<template>
  <button
    @click="toggle"
    class="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded"
  >
    Toggle Message
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["toggle"]);

const toggle = () => {
  emit("toggle");
};
</script>
