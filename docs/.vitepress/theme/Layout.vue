<script setup>
import { ref, onMounted } from "vue";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

// 表示したい画像のパス一覧（public フォルダからの相対パス）
const images = [
  "/sukusyo.png",
  "/sukusyo2.png",
  "/2026/jul_railway/laputa.webp",
  "/2026/jul_railway/mineland.webp",
];

const currentImage = ref("");

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * images.length);
  currentImage.value = images[randomIndex];
});
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <img
        v-if="currentImage"
        :src="currentImage"
        alt="ランダムに表示される画像"
        class="VPImage image-src"
      />
    </template>
  </Layout>
</template>

<style scoped>
.VPImage {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
