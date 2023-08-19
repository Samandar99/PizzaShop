import { createStore } from "vuex";

const store = createStore({
  state: {
    pizzaProducts1: [],
    postsSushi: null,
    beverages: null,
    snacks1: null,
    commboProducts: null,
    deserts: null,
    saucesDates: null,
    openShowModalProducts: false,
    modalCart: [],
    localCart: [],
    sum: 0,
    cardsFavoriet: [
      {
        title: "Картофель из печи",
        description: "Порция 95 г",
        img: require("@/assets/images/beverage1.png"),
      },
      {
        title: "Филадельфия крем-брюле",
        description: "Описание карточки",
        img: require("@/assets/images/lavash.png"),
      },
      {
        title: "Супер Филадельфия",
        description: "Описание карточки",
        img: require("@/assets/images/dessert.png"),
      },
      {
        title: "Тигр мама",
        description: "Описание карточки",
        img: require("@/assets/images/pizzass.png"),
      },
      {
        title: "Карточка",
        description: "Описание карточки",
        img: require("@/assets/images/Rectangle3.png"),
      },
      {
        title: "Карточка",
        description: "Описание карточки",
        img: require("@/assets/images/kfc.png"),
      },
      {
        title: "Карточка",
        description: "Описание карточки",
        img: require("@/assets/images/beverage1.png"),
      },
      {
        title: "Карточка",
        description: "Описание карточки 2",
        img: require("@/assets/images/beverage2.png"),
      },

      // Добавьте больше карточек по необходимости
    ],
  },
  mutations: {
    setLocalCart(state, cart) {
      state.localCart = cart;
    },
    productsQuantityPlus(state, productId) {
      // console.log(productId);
      const product = state.localCart.find((item) => item.id === productId);
      if (product && product.quantity > 0) {
        product.quantity++;
        product.totalPrice += product.price;

        if (product.originalPrice === undefined) {
          product.originalPrice = product.price;
        }

        localStorage.notes = JSON.stringify(state.localCart);
      }
    },

    productsQuantityMinus(state, productId) {
      const product = state.localCart.find((item) => item.id === productId);
      if (product && product.quantity > 0) {
        product.quantity--;
        product.totalPrice -= product.price;
        product.price = product.originalPrice;
        if (product.quantity === 0) {
          const index = state.localCart.findIndex(
            (item) => item.id === productId
          );
          if (index !== -1) {
            state.localCart.splice(index, 1);
          }
        }

        localStorage.notes = JSON.stringify(state.localCart);
      }
    },

    getPostsPizza(state, allPostsPizza) {
      state.pizzaProducts1 = allPostsPizza;
    },

    getPostsSushi(state, allPostsSushi) {
      state.postsSushi = allPostsSushi;
    },
    getBeverages(state, allPostsBeverages) {
      state.beverages = allPostsBeverages;
    },
    getSnacks(state, productsSnacks) {
      state.snacks1 = productsSnacks;
    },
    getCommbo(state, productsCommbo) {
      state.commboProducts = productsCommbo;
    },
    getDesert(state, allproductsDesert) {
      state.deserts = allproductsDesert;
    },
    getSauces(state, allproductsSauces) {
      state.saucesDates = allproductsSauces;
    },

    cartAddLocal(state, addCloseModal) {
      state.openShowModalProducts = addCloseModal;
      // console.log(state.localCart);
    },

    modalOpenProducts(state, { boolean, id, hom }) {
      const existingProduct = state.localCart.find(
        (item) => item.id === hom.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice += existingProduct.price;
      } else {
        state.localCart.push({ ...hom, quantity: 1, totalPrice: hom.price });
      }

      state.sum = 0; // Обнуляем сумму перед подсчетом
      for (let i = 0; i < state.localCart.length; i++) {
        state.sum += state.localCart[i].totalPrice;
      }

      state.openShowModalProducts = boolean;

      const productToAddToModalCart = state.pizzaProducts1.find(
        (item) => item.id === id
      );
      if (state.localCart && state.localCart.length > 0) {
        state.modalCart.push(productToAddToModalCart);
        localStorage.notes = JSON.stringify(state.localCart);
      } else {
        localStorage.removeItem("notes");
      }
    },
    closeModal(state, close) {
      state.openShowModalProducts = !close;
    },
  },
  actions: {
    restoreLocalCart({ commit }) {
      try {
        const localNotes = localStorage.getItem("notes");
        if (localNotes !== null) {
          commit("setLocalCart", JSON.parse(localNotes));
        } else {
          commit("setLocalCart", []);
        }
      } catch (error) {
        console.log("Error parsing or restoring local cart", error);
        commit("setLocalCart", []);
      }
    },

    modalOpenProducts({ commit }, { id, hom }) {
      commit("modalOpenProducts", { boolean: true, id: id, hom: hom });
      // console.log(hom);
    },

    closeModal({ commit }) {
      commit("closeModal", false);
    },

    async getSauces({ commit }) {
      try {
        const productsSauces = await fetch(
          "https://samandar99.github.io/bdsause/sauce.json"
        );
        const allproductsSauces = await productsSauces.json();
        commit("getSauces", allproductsSauces);
      } catch {
        console.log("error");
      }
    },

    async getDesert({ commit }) {
      try {
        const productsDesert = await fetch(
          "https://6469bfc503bb12ac2091ea5a.mockapi.io/desert"
        );
        const allproductsDesert = await productsDesert.json();
        console.log(allproductsDesert);
        commit("getDesert", allproductsDesert);
      } catch {
        console.log("error desert");
      }
    },

    async getCommbo({ commit }) {
      try {
        const productsCommbo = await fetch(
          "https://6469bfc503bb12ac2091ea5a.mockapi.io/combo"
        );
        const allProductsCommbo = await productsCommbo.json();
        console.log(allProductsCommbo);
        commit("getCommbo", allProductsCommbo);
      } catch {
        console.log("error commbo");
      }
    },
    async getSnacks({ commit }) {
      try {
        const productsSnacks = await fetch(
          "https://64673df12ea3cae8dc291cdb.mockapi.io/sncaks"
        );
        const allProductsSnacks = await productsSnacks.json();
        console.log(allProductsSnacks);
        commit("getSnacks", allProductsSnacks);
      } catch {
        console.log("error snacks");
      }
    },

    async getBeverages({ commit }) {
      try {
        const productsBeverages = await fetch(
          "https://64673df12ea3cae8dc291cdb.mockapi.io/beverages"
        );
        const allPostsBeverages = await productsBeverages.json();
        console.log(allPostsBeverages);
        commit("getBeverages", allPostsBeverages);
      } catch {
        console.log("error beverages");
      }
    },

    async getPostsSushi({ commit }) {
      try {
        const productsSushi = await fetch(
          "https://645d44a1250a246ae31c22ec.mockapi.io/sushi"
        );
        const allPostsSushi = await productsSushi.json();
        commit("getPostsSushi", allPostsSushi);
      } catch (error) {
        console.log("error");
      }
    },
    async getPostsPizza({ commit }) {
      try {
        const productsPizza = await fetch(
          "https://645d44a1250a246ae31c22ec.mockapi.io/pizzaItems"
        );
        const allPostsPizza = await productsPizza.json();
        console.log(allPostsPizza);
        commit("getPostsPizza", allPostsPizza);
      } catch {
        console.log("error");
      }
    },
  },
  getters: {
    getPizzaId(state) {
      return state.pizzaProducts1.find(
        (pizza) => pizza.id == this.currentPizaId
      );
    },
    getPizza(state) {
      return state.pizzaProducts1.find((item) => item.id == 2);
    },

    getNotes(state) {
      try {
        const localNotes = localStorage.getItem("notes");
        if (localNotes !== null) {
          state.localNotes = JSON.parse(localNotes);
        } else {
          state.localNotes = [];
        }
      } catch (error) {
        console.log("Error parsing or re", error);
        state.localNotes = [];
      }

      // let localNotes = localStorage.notes;
      // state.localCart = JSON.parse(localNotes) || [];
    },
  },
});

export default store;
