<template>
  <v-card flat>
    <div class="resource pa-2 mb-2">
      <div class="resource-img">
        <img :src="data.media ? data.media.mainImg : ''" width="85px"/>
      </div>
      <div class="resource-content pl-3">
        <div class="top">
          <div class="title"><a class="resource-title" @click="go(data.id)">{{ data.name }}</a></div>
          <div>{{ data.shortDesc }}</div>
        </div>
        <div class="bottom">
          <div class="tags">
            <v-chip
              label
              small
              v-for="(tag, idx) in data.tags"
              :key="idx"
              text-color
            >
              {{ tag }}
            </v-chip>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'
import { db } from '../main'

export default {
  name: 'ResourceCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: () => ({
  }),
  methods: {
    go (id) {
      this.$router.push({ name: 'Resource', params: { id } })
    },
    deleteResource () {
    },
    favResource () {
    },
    likeResource () {
    }
  }
}
</script>

<style scoped lang="stylus">
  .resource
    display flex
    position relative
    .resource-img
      display block
    .resource-content
      width 100%
      display flex
      flex-direction column
      justify-content space-between
      .bottom
        display flex
        flex-direction row
        justify-content space-between
  .resource-title
    color DarkSlateGray

</style>
