<template>
  <h1 class="text-3xl font-bold underline">
    Hello {{ msg }}!
  </h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>
