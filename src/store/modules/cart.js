const state = {
    items: [],
};

const getters = {
    items: (state) => state.items,
};

const actions = {
    addToCart({
        commit
    }, item) {
        commit('addToCart', item);
    },

    removeFromCart({
        commit
    }, item) {
        commit('removeFromCart', item);
    },
};

const mutations = {
    addToCart: (state, item) => {
        state.items.push(item);
        console.log(state.items);
    },
    removeFromCart: (state, item) => {
        state.items.splice(state.items.findIndex((element) => {
            return element.id === item.id;
        }));
        console.log(state.items);

    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};