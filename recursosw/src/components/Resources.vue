<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-list two-line>
          <template v-for="resource in resources">
            <h1>{{resource.name}}</h1>
            <p>{{resource.shortDesc}}</p>
            <v-chip label v-for="tag in resource.tags">{{tag}}</v-chip>
            <hr/>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { db } from '../config'
const PAGE = 10
export default {
  data: () => ({
    resources: [],
    loadMore: true
  }),
  firestore: {
    resources: db.collection('resources').limit(PAGE)
  }
}
</script>
