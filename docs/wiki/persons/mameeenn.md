---
layout: doc
title: まめーん
...
---

<script setup>
import { ref } from 'vue'

const html = ref(`
<h1>Hello, World!
</h1>
`)
</script>

<div v-html="html"></div>