<template>
  <div class="menu-container">
    <a-menu
      :defaultSelectedKeys="['1']"
      :openKeys="openKeys"
      :defaultOpenKeys="['sub1', 'sub2', 'sub3', 'sub4']"
      mode="inline"
      class="scrollable-menu"
      @click="handleClick"
      @openChange="handleOpenChange"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>Organization</span>
        </template>
        <a-menu-item>General</a-menu-item>
        <a-menu-item>Schedules</a-menu-item>
        <a-menu-item>Positions</a-menu-item>
        <a-menu-item>Job Sites</a-menu-item>
        <a-menu-item>Messages</a-menu-item>
        <a-menu-item>Data Backup</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>Schedule</span>
        </template>
        <a-menu-item>Preferences</a-menu-item>
        <a-menu-item>Breaks</a-menu-item>
        <a-menu-item>Shift Templates</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span>Employees</span>
        </template>
        <a-menu-item>Access Levels</a-menu-item>
        <a-menu-item>Skills</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #title>
          <span>Time Off</span>
        </template>
        <a-menu-item>Preferences</a-menu-item>
        <a-menu-item>Time Off Types</a-menu-item>
        <a-menu-item>Blocked Days</a-menu-item>
        <a-menu-item>Holidays</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5">
        <template #title>
          <span>Time & Attendance</span>
        </template>
        <a-menu-item key="9">Time Clock</a-menu-item>
        <a-menu-item>Pay Rules</a-menu-item>
        <a-menu-item>Payroll</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { Menu } from "ant-design-vue";
import { ref } from "vue";
import {
  MailOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

const openKeys = ref(["sub1", "sub2", "sub3", "sub4", "sub5"]);
const handleClick = (e) => {
  console.log("click ", e);
};
const handleOpenChange = (keys) => {
  openKeys.value = keys;
};
</script>

<style scoped>
.menu-container {
  display: inline-flex;
  flex-direction: column;
  width: 25%;
  height: 100vh;
}

.scrollable-menu {
  flex: 1; /* Take up remaining space */
  overflow-y: auto;
}
</style>
