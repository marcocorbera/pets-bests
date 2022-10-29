<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        v-for="item,key in items"
        :key="key"
        :width="{
          '100%': $vuetify.breakpoint.smAndDown,
          '50%': $vuetify.breakpoint.mdAndUp
        }"
        class="d-flex flex-column my-3"
      >
        <v-img
          :src="item.photo"
          class="white--text align-end"
          width="100%"
          height="150"
        >
          <v-card-title>
            {{ item.name }}
          </v-card-title>
        </v-img>
        <v-card-actions
         class="justify-center"
        >
          <v-btn
            color="primary"
            text
          >
            <v-icon>
              mdi-heart
            </v-icon>
            Salud
          </v-btn>
          <v-btn
            color="primary"
            text
          >
            <v-icon>
              mdi-pencil
            </v-icon>
            Editar
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ApiClient from '~/services/api-client'
export
 default {
  name: 'IndexPage',
  created () {
    this.getPets()
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    getPets () {
      const data = [{
          photo: `${require(`~/static/images/chachito1.jpg`)}`,
          name: 'Hueson',
          to: '/'
        },
        {
          photo: `${require(`~/static/images/chachito2.jpg`)}`,
          name: 'El chueco',
          to: '/'
        }]
      ApiClient.symulateApiConnection(data)
        .then((response) => {
          this.items = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
