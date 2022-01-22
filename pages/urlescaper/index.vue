<template>

    <div>
        <v-row>
            <v-col>
                <div class="margin-30">{{ title }}</div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">

            <v-col cols="6" sm="4" md="3">
              <v-textarea
                filled
                name="input"
                label="input"
                v-model="input"
              ></v-textarea>
            </v-col>

            　->　

            <v-col cols="6" sm="4" md="3">
              <v-textarea
                filled
                name="output"
                label="output"
                readonly="true"
                :value="output"
                @click="set_clipboard()"
              ></v-textarea>
            </v-col>


        </v-row>

        <v-snackbar
            v-model="snackbar"
        >
            Clipboard copied!

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="success"
                    text
                    outlined
                    right
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>
  </div>
</template>

<script>
export default {
    head: {
        title: "URL escape",
    },
    data() {
        return {
            title: "URL escape",
            input: "",
            snackbar: false,
        }
    },
    methods: {
        set_clipboard() {
            navigator.clipboard.writeText(this.get_hex)
                .then(() => {
                    this.snackbar = true;
                });
        },
    },
    computed: {
      output: function() {
        return decodeURI(this.input)
      }
    }
}
</script>

<style>

.margin-30 {
    margin: 30px;
}

.color-square {
    width: 100%;
    height: 100px;
    text-align: center;
    align-items: center;
}

</style>
