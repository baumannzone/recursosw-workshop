<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <template v-for="resource in resources">
          <ResourceCard :data="resource" :key="resource.id"/>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ResourceCard from './ResourceCard'
import { db } from '../config'
const PAGE = 10
export default {
  components: { ResourceCard },
  data: () => ({
    resources: [],
    loadMore: true
  }),
  firestore: {
    resources: db.collection('resources').limit(PAGE)
  }
}
</script>
