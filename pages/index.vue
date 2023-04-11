<template>
  <div>Home</div>
  <button @click="moveToAbout">Take me to About page</button>
</template>

<script setup>
  const moveToAbout = () => {
    navigateTo("about");
  };

</script>