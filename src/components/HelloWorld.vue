<script setup>
import { show } from '@/utils/show'

const msg = $ref('hello world')
show(msg)
</script>

<template>
  <div text-violet-800>
    {{ msg }}
  </div>
</template>
