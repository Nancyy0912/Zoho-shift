<script setup lang="ts">
import AppHeader from "../appHeader/AppHeader.vue";
</script>

<template>
  <div class="AppLayout">
    <AppHeader />
    <div class="AppContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLayout',
});
</script>
