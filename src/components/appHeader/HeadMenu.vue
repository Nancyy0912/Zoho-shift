<script setup lang="ts">
import { h, ref, watch } from "vue";
import type { MenuProps } from "ant-design-vue";
import { SettingOutlined} from '@ant-design/icons-vue';
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
  {
    key: "/settings",
    label: h(
      "a",
      {
        href: "/settings",
        onClick: (e: MouseEvent) => handleItemClick(e, "/settings"),
      },
      [
        "Settings",
        h(SettingOutlined, {
          style: { marginLeft: "8px" },
        }),
      ]
    ),
    title: "Settings",
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
  <a-menu mode="horizontal" :selectedKeys="current" :items="items">
    <!-- <template #default="{ item }">
      <span v-if="item.key !== '/settings'">{{ item.label }}www</span>
      <span v-else style="margin-left: auto">{{ item.label }}111122</span>
    </template> -->
  </a-menu>
</template>

