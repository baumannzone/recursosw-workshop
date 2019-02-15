<template>
  <v-form ref="form" class="full-width" lazy-validation>
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
                counter="100"
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
                required></v-select>
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
                @click="validateForm()"
                :disabled="isLoading"
                :loading="isLoading">Submit
              </v-btn>
            </div>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import rules from '@/utils/rules'

export default {
  created () {
    this.rules = rules
  },
  data: () => {
    return {
      isLoading: false,
      form: {
        name: 'Madeira',
        shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        fullDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        link: 'https://www.lipsum.com/',
        tags: ['Developer Tools',
          'Web Apps',
          'Productivity'
        ]
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
      console.log(ev)
      if (ev.target.files.length > 0) {
        const file = ev.target.files[ 0 ]
        this.form.imgName = file.name
        const reader = new FileReader()
        reader.addEventListener('load', () => {
          this.mainImg.name = file.name
          this.mainImg.size = file.size
          this.mainImg.type = file.type
          this.mainImg.base64 = reader.result
        }, false)
        reader.readAsDataURL(file)
      } else {
        this.clearImage()
      }
    },
    clearImage () {
      this.$refs.inputFile.value = ''
      this.mainImg.size = 0
      this.mainImg.name = ''
      this.mainImg.type = ''
      this.mainImg.base64 = ''
    },
    async submitForm () {
      this.isLoading = true
      const res = await this.$store.dispatch('createDocRef')
      const docId = res.id
      const promises = []
      const resourceData = {
        id: docId,
        ...this.form,
        createdAt: new Date(),
        media: {
          mainImg: ''
        },
        favsCount: 0,
        likesCount: 0
      }
      promises.push(this.$store.dispatch('createResource', resourceData))
      if (this.$refs.inputFile.files && this.$refs.inputFile.files[0]) {
        const imgData = {
          id: docId,
          file: this.$refs.inputFile.files[0]
        }
        promises.push(this.$store.dispatch('uploadResourceImg', imgData))
      }
      try {
        await Promise.all(promises)
      } catch (error) {
        console.log({ error })
      }
    },
    validateForm () {
      if (this.$refs.form.validate()) {
        this.submitForm()
      }
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
