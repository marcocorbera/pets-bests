<template>
    <v-card
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
</template>
<script>
export default {
    name: 'PetCard',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>