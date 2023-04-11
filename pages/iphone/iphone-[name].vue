<template>
  <Head>
    <Title>Nuxt 3 - Iphone {{ name }}</Title>
  </Head>
  <div class="flex justify-center w-full mt-20">
      <div class="grid grid-cols-2">
        <div>
          <img :src="`/images/iphone-${route.params.name}.webp`" />
        </div>
        <div class="text-center">
          <h1 class="text-3xl">Iphone {{ name }}</h1>
          <button
            @click="addToCart"
            class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48"
          >
            <span v-if="isInCart()">Remove from Cart </span>
            <span v-else>Buy Now </span>
          </button>
        </div>
      </div>
    </div>
</template>

<script setup>
  const route = useRoute();
  const name = computed(() => {
    return route.params.name.replaceAll('-', " ");
  });

  const ogName = computed(() => {
    return `iphone-${route.params.name}`;
  });

  const cart = useCart();
  const addToCart = () => {
    const found = cart.value.find(ip => ip.name === ogName.value);
    if (!found) {
      cart.value.push({
        name: ogName
      })
    } else {
      cart.value = cart.value.filter(ip => ip.name !== ogName.value);
    }
  };

  const isInCart = () => {
    return !!cart.value.find(ip => ip.name === ogName.value);
  };

  // useHead({
  //   title: `Iphone ${route.params.name.replaceAll('-', " ")}`
  // })
</script>