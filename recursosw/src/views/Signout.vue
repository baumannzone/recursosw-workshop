<template>
  <span></span>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('userSignOut')
  }
}
</script>
