<template>
  <!-- <a href="#" @click="view('home')">Home</a>
  <a href="#" @click="view('counter')">Counter</a> -->
  <NuxtPage />
  <!-- <button @click="toggle">Toggle</button> -->
  <!-- <component :is="MyComponent" /> -->
  <!-- <LazyHomeWelcome v-if="page === 'home'" />
  <LazyCounter v-if="page === 'counter'"/> -->
</template>

<script setup>
  // const MyComponent = ref('counter');

  // const toggle =() => {
  //   MyComponent.value = "welcome";
  // }

  const page = ref('home');

  const view = (name) => {
    page.value = name;
  }
</script>
