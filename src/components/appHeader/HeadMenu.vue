<script setup lang="ts">
import { h, ref, watch } from "vue";
import type { MenuProps } from "ant-design-vue";
import { SettingOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const current = ref<string[]>([router.currentRoute.value.path]);

const items: MenuProps["items"] = [
  {
    key: "/",
    label: h(
      "a",
      { href: "/", onClick: (e: MouseEvent) => handleItemClick(e, "/") },
      "Dashboard11"
    ),
    title: "Dashboard",
  },
  {
    key: "/activities",
    label: h(
      "a",
      {
        href: "/activities",
        onClick: (e: MouseEvent) => handleItemClick(e, "/activities"),
      },
      "Activities"
    ),
    title: "Activities",
  },
];

const handleItemClick = (e: MouseEvent, path: string) => {
  e.preventDefault();
  router.push(path); // Redirect to the specified path
};
watch(
  () => router.currentRoute.value.path,
  (val) => {
    current.value = [val];
  }
);
</script>

<template>
  <div class="menu-wrapper">
    <a-menu
      v-model:selectedKeys="current"
      mode="horizontal"
      :items="items"
      class="menu"
    >
      <template #default="{ item }">
        <span>{{ item.label }}</span>
      </template>
    </a-menu>
    <a
      href="/settings"
      @click.prevent="handleItemClick($event, '/settings')"
      class="settings-link"
    >
      <SettingOutlined class="settings-icon" />
    </a>
  </div>
</template>
<style scoped>
.menu-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.menu {
  flex: 1;
}

.settings-link {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 0 16px;
}

.settings-icon {
  font-size: 24px;
  margin-left: 8px;
  color: black;
}
</style>
