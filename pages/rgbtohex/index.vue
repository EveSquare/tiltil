<template>

    <div>
        <v-row>
            <v-col>
                <div class="margin-30"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">

            <v-col cols="6" sm="4" md="3">
                <v-text-field
                    label="R"
                    placeholder="red"
                    solo
                    type="tel"
                    v-model="form.red"
                ></v-text-field>
            </v-col>
            <v-col cols="6" sm="4" md="3">
                <v-slider
                    v-model="form.red"
                    color="red"
                    label="Red"
                    min="0"
                    max="255"
                    thumb-label
                ></v-slider>
            </v-col>

        </v-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                red: 0,
                green: 0,
                blue: 0,
            },
        }
    }
}
</script>

<style>

.margin-30 {
    margin: 30px;
}

</style>