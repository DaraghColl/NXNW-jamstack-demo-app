const state = {
    items: [],
    cartStatus: false,
    cartPosition: {
        x: 0,
        y: 0
    },
    cartAmount: 0
};

const getters = {
    items: (state) => state.items,
    cartStatus: (state) => state.cartStatus,
    cartPosition: (state) => state.cartPosition,
    cartAmount: (state) => state.cartAmount
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

    // clear cart
    clearCart({
        commit
    }) {
        commit('clearCart')
    },

    // calculate Cart Amount
    calculateCartAmount({
        commit
    }) {
        commit('calculateCartAmount')
    },

    // cart position
    setCartPosition({
        commit
    }, position) {
        commit('setCartPosition', position);
    }
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
    },

    clearCart: (state) => {
        state.items = [];
    },

    calculateCartAmount: (state) => {
        if (state.items.length) {
            state.cartAmount = state.items
                .map(item => {
                    return item.price;
                })
                .reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                });
        } else {
            state.cartAmount = 0;
        }
    },



    setCartPosition: (state, position) => {
        state.positio = position;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};