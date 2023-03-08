<template>
  <img
    :src="imageLink"
    class="h-8 w-8 rounded-3xl object-contain"
    alt="User Profile image"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const imageLink = ref(
  "https://i.pinimg.com/736x/54/30/99/54309998768c5bbe5dfb114686aa0453.jpg"
);
</script>
