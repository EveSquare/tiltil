import Vuex from "vuex";


const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            items: [
                {
                    icon: 'mdi-apps',
                    to: "/",
                    title: "Home",
                    text: "",
                },
                {
                    icon: 'mdi-chart-bubble',
                    to: "rgbtohex",
                    title: 'RGB to HEX',
                    text: "ex. rgb(235, 25, 255) -> #ec19ff",
                },
                {
                    icon: 'mdi-chart-bubble',
                    to: "urlescaper",
                    title: 'URL escape',
                    text: "ex. %E3%81%82 -> あ",
                }
            ]
        }),
        mutations: {}
    })
}

export default createStore;
