<template>
  <a-card>
    <a-card>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="Time Clock">No Records Found</a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Pending Approvals">No Records Found</a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Who's Working?">No Records Found</a-card>
        </a-col>
      </a-row>
      <a-row :gutter="16" style="margin-top: 16px">
        <a-col :span="8">
          <a-card title="My Upcoming Shifts">No Records Found</a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="My Recent Time Entries">No Records Found</a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="No Show">No Records Found</a-card>
        </a-col>
      </a-row>
    </a-card>
  </a-card>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// const tab = ref<string | null>("Dashboard");
// const items = ref<string[]>(['Dashboard', 'Activities']);
// const text = ref<string>(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
// );
</script>

<style>
/* Add any additional styles here */
</style>
