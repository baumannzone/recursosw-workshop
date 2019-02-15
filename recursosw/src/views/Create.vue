<template>
  <form ref="form" class="full-width">
    <v-container grid-list-md>
      <v-card flat>
        <v-card-title primary-title>
          <v-flex xs12>
            <div>
              <h2 class="headline">Publica un nuevo recurso</h2>
              <span class="grey--text">My super duper new resource</span>
            </div>
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex sm12>
              <h4>Info</h4>
            </v-flex>
            <!--Name-->
            <v-flex sm6 xs12>
              <v-text-field
                v-model="form.name"
                :rules="[rules.required]"
                label="Name"
                placeholder="Name"
                required></v-text-field>
            </v-flex>

            <!--Short desc-->
            <v-flex sm6 xs12>
              <v-text-field
                v-model="form.shortDesc"
                :rules="[rules.required]"
                label="Short description"
                counter="60"
                placeholder="Description"
                required></v-text-field>
            </v-flex>

            <!--Link-->
            <v-flex sm6 xs12>
              <v-text-field
                v-model="form.link"
                :rules="[rules.required]"
                label="Link"
                placeholder="https://medium.com/"
                required></v-text-field>
            </v-flex>

            <v-flex sm6 xs12>
              <v-select
                v-model="form.tags"
                :rules="[rules.required]"
                :items="tagList"
                placeholder="Tags"
                multiple
                label="Tags"
              ></v-select>
            </v-flex>

            <v-flex xs12>
              <v-textarea
                label="Full description"
                :rules="[rules.required]"
                v-model="form.fullDesc"
                placeholder="Full description"
                rows="4"
              ></v-textarea>
            </v-flex>

            <v-flex xs12>
              <h4>Media</h4>
            </v-flex>

            <v-flex sm6 xs12>
              <v-text-field
                v-model="form.imgName"
                :rules="[rules.required]"
                label="Thumbnail"
                readonly
                append-icon="add_a_photo"
                clearable
                @click="$refs.inputFile.click()"
                @click:clear="clearImage"
                placeholder="Select image"
                required></v-text-field>
              <input
                type="file"
                ref="inputFile"
                class="input-file"
                @input="changeFile"
                accept="image/*">
            </v-flex>

            <v-flex sm6 xs12>
              <template v-if="mainImg.base64">
                <img :src="mainImg.base64" class="main-img-preview" alt="Main resource Image">
              </template>
            </v-flex>

            <div class="form-buttons">
              <v-btn
                color="primary"
                @click="submitForm('form')"
                :disabled="isLoading"
                :loading="isLoading">Submit
              </v-btn>
            </div>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
  </form>
</template>

<script>
import rules from '@/utils/rules'

export default {
  data: () => {
    return {
      rules,
      isLoading: false,
      form: {
        name: '',
        shortDesc: '',
        fullDesc: '',
        link: '',
        tags: []
      },
      valid: true,
      mainImg: {
        size: 0,
        name: '',
        type: '',
        base64: ''
      },
      tagList: [
        'Developer Tools',
        'Web Apps',
        'Productivity',
        'IoT',
        'Marketing',
        'Hacking',
        'Books'
      ]
    }
  },
  methods: {
    changeFile (ev) {
      console.log('File change')
    },
    clearImage () {
      console.log('Clear img')
    },
    submitForm () {
      console.log('Submit Form')
    }
  }
}

</script>

<style scoped lang="stylus">
  .full-width
    width 100%

  .input-file
    display none

  .main-img-preview
    width 150px
    max-height 200px

  .form-buttons
    width 100%
    display flex
    justify-content flex-end
</style>
