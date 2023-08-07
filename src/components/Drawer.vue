<template>
  <div
    :class="openCarts == true ? 'overlay' : 'isActiveoverlay'"
    @click="closeCart(false)"
  >
    <div :class="openCarts == true ? 'drawer' : 'drawerActive'" @click.stop="">
      <div class="block-drawer">
        <div class="drawer__header">
          <h3 class="drawer-title">Ваш заказ</h3>
          <i class="bx bx-x-circle close" @click="closeCart(false)"></i>
        </div>
        <div class="drawer__cards">
          <div v-if="localCart.length > 0">
            <div class="drawer-card" v-for="local in localCart" :key="local.id">
              <img class="drawer-card__img" :src="local.img" alt="" />
              <div>
                <b>Чикен Сладкий Чили</b>
                <p class="drawer__name">Традиционное тесто, 23 см</p>
                <div class="options">
                  <div class="options__btns">
                    <button class="darwer-btn">-</button>
                    <button class="darwer-btn">{{ local.quantity }}</button>
                    <button class="darwer-btn">+</button>
                  </div>
                  <b>{{ local.price }} ₽</b>
                </div>
              </div>
            </div>
          </div>
          <h2 v-else>Корзинка пуста</h2>
        </div>
      </div>
      <div class="drawer-foot">
        <div class="draw-flex">
          <p class="total-price">Итого: {{ getTotalPrice }} ₽</p>
          <button class="send-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  props: {
    openCarts: {
      typeof: Boolean,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["localCart","sum"]),
    ...mapGetters(["getModalCart", "getPro"]),
    getTotalPrice(){
      return this.localCart.reduce((total,item) => total + item.totalPrice,0)
    }
     
  
  },

  methods: {
    closeCart(close) {
      this.$emit("closeCart", close);
    },
  },
  mounted() {
    const cartItemData = this.localCart;
    cartItemData.quantity = 1;
  },
};
</script>

<style></style>
