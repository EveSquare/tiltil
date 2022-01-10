<template>
    <v-card
        :to="page.to"
        link=true
    >
        <v-card-title class="headline">
            {{ page.title }}
        </v-card-title>

        <v-card-text>
            <div>{{ page.text }}</div>
        </v-card-text>

    </v-card>
</template>


<script>

export default {
    props: {
        page: {
            to: String,
            title: String,
            text: String,
        }
    }
}

</script>