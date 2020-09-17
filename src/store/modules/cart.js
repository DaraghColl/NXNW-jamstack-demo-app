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
        const itemEqualToItem = element => element.id === item.id;

        // if item does / doesnt exist in cart
        if (!state.items.some(itemEqualToItem)) {
            commit('addToCart', item);
            return new Promise((resolve, reject) => {
                resolve(true)
            })
        } else {
            return new Promise((resolve, reject) => {
                resolve(false)
            })
        }
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
    },

    addToCart: (state, item) => {
        state.items.push(item);
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