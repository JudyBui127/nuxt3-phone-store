<template>
  <nav class="bg-purple-900 p-3 text-white text-lg flex justify-between">
    <div class="flex">
      <NuxtLink class="mr-4" to="/">Home</NuxtLink>
      <NuxtLink class="mr-4" to="/iphone">Iphones</NuxtLink>
      <p class="mr-4">Cart ({{ cart && cart.length }})</p>
      <p>Total page visited: {{ pageVisitCount }}</p>
    </div>
    
    <div v-if="auth.isAuthenticated">
      <NuxtLink  to="/profile">Profile</NuxtLink>
      <button class="ml-4" @click="logout()">Logout</button>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </nav>
</template>
<script setup>
  const cart = useCart();
  const auth = useAuth();
  const logout = () => {
    auth.value.isAuthenticated = false;
    navigateTo("/login")
  };

  const pageVisitCount = ref(0);
  onMounted(() => {
    pageVisitCount.value = usePageVisitCount();
  });
</script>