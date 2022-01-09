<template>
  <v-row justify="center" align="center">

    <template v-for="(item, _) in items">
      <v-col cols="12" sm="8" md="6">
        <Card 
          :page="item"
        />
      </v-col>
    </template>
  </v-row>
</template>

<script>
import Card from "~/components/Card.vue";
import { mapState } from "vuex";

export default {
  components: {
    Card: Card
  },
  name: 'IndexPage',
  data() {
    return {}
  },
  computed: {
    ...mapState(["items"])
  }
}
</script>
