<template>
  <p class="text-2xl mb-4 text-center">{{ message }}</p>
  <button @click="alma">Pussh me</button>
</template>

<script setup lang="ts">
const props = defineProps({
  message: String,
});

const alma = () => {
  console.log("asdasdasdasd");
};
</script>
