<template>
  <div>
    <AppComment :newsId="id"></AppComment>
    {{id}}
  </div>
</template>
<script>
import AppComment from './AppComment'
export default {
  props: ['id'],
  components: {
    AppComment
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
</style>
