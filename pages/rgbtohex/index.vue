<template>

    <div>
        <v-row>
            <v-col>
                <div class="margin-30">{{ title }}</div>
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

        <v-row justify="center" align="center">

            <v-col cols="6" sm="4" md="3">
                <v-text-field
                    label="G"
                    placeholder="green"
                    solo
                    type="tel"
                    v-model="form.green"
                ></v-text-field>
            </v-col>
            <v-col cols="6" sm="4" md="3">
                <v-slider
                    v-model="form.green"
                    color="green"
                    label="Green"
                    min="0"
                    max="255"
                    thumb-label
                ></v-slider>
            </v-col>

        </v-row>

        <v-row justify="center" align="center">

            <v-col cols="6" sm="4" md="3">
                <v-text-field
                    label="B"
                    placeholder="Blue"
                    solo
                    type="tel"
                    v-model="form.blue"
                ></v-text-field>
            </v-col>
            <v-col cols="6" sm="4" md="3">
                <v-slider
                    v-model="form.blue"
                    color="blue"
                    label="Blue"
                    min="0"
                    max="255"
                    thumb-label
                ></v-slider>
            </v-col>

        </v-row>


        <div 
            class="color-square"
            :style="{
                background: 'rgb('+form.red+', '+form.green+', '+form.blue+')'
            }"
            @click="set_clipboard()"
        >
            {{ get_hex }}
        </div>

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
        title: "RGB to HEX",
    },
    data() {
        return {
            title: "RGB to HEX",
            form: {
                red: 0,
                green: 0,
                blue: 0,
            },
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
        convert16(num) {
            return Number(num).toString(16).padStart(2, '0');
        }
    },
    computed: {
        get_hex() {
            const red = this.convert16(this.form.red);
            const green = this.convert16(this.form.green);
            const blue = this.convert16(this.form.blue);
            return `#${red}${green}${blue}`
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