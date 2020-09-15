const state = {
    items: [],
    cartStatus: false
};

const getters = {
    items: (state) => state.items,
    cartStatus: (state) => state.cartStatus
};

const actions = {
    // add item
    toggleCart({
        commit
    }, status) {
        commit('toggleCart', status);
    },

    // add item
    addToCart({
        commit
    }, item) {
        commit('addToCart', item);
    },

    // remove item
    removeFromCart({
        commit
    }, item) {
        commit('removeFromCart', item);
    },
};

const mutations = {
    toggleCart: (state, status) => {
        state.cartStatus = status;
        console.log(state.cartStatus)
    },

    addToCart: (state, item) => {
        const itemEqualToItem = element => element.id === item.id;

        if (!state.items.some(itemEqualToItem)) {
            state.items.push(item);
        }
    },

    removeFromCart: (state, item) => {
        state.items.splice(state.items.findIndex((element) => {
            return element.id === item.id;
        }), 1);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};