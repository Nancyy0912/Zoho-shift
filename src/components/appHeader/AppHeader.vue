<script setup lang="ts">
import HeadMenu from "./HeadMenu.vue";
import "./_AppHeader.scss";
// import LogoMain from "@/components/SVG/LogoMain.vue";
// import LogoIcon from "@/components/SVG/LogoIcon.vue";
</script>

<template>
  <div class="AppHeaderWrap">
    <div class="AppHeader">
      <!-- <div class="Logo">
        <a href="/"><LogoMain whiteColor /> <LogoIcon /></a>
      </div> -->
      <div class="HeaderRight">
        <HeadMenu />
      </div>
    </div>
  </div>
</template>
