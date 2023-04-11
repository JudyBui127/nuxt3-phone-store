<template>
  <div class="user-layout bg-gray-200">
    <article class="sidebar">
      <p>Dashboard</p>
      <p>Setting</p>
    </article>
    <slot></slot>
  </div>
 
</template>
<style>
  .sidebar {
    display: flex;
    flex-direction: column;
  }
  .user-layout{
    display: flex;
  }
</style>