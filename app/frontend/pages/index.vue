<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <pet-card
        v-for="item, key in items"
        :key="key"
        :item="item"
      />
    </v-col>
  </v-row>
</template>

<script>
import ApiClient from '~/services/api-client'
import PetCard from '~/components/PetCard'

export
 default {
  name: 'IndexPage',
  created () {
    this.getPets()
  },
  components: {
    PetCard
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
