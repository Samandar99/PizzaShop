<template>
  <div class="block">
    <h2 class="block__title" v-if="localCart.length > 0">Ваш заказ</h2>
    <div class="block__cards" v-if="localCart.length > 0">
      <div
        class="block__card"
        v-for="productsOrder in localCart"
        :key="productsOrder.id"
      >
        <div class="block__card-left">
          <img class="card__img" :src="productsOrder.img" alt="" />
          <div class="block__card-left-txt">
            <h3 class="card__title">{{ productsOrder.title }}</h3>
            <p class="card__txt">{{ productsOrder.text }}</p>
          </div>
        </div>
        <div class="block__card-right">
          <div class="card__options">
            <button
              class="card__btn"
              @click="productsQuantityMinus(productsOrder.id)"
            >
              -
            </button>
            <span class="card__count">{{ productsOrder.quantity }}</span>
            <button
              class="card__btn"
              @click="productsQuantityPlus(productsOrder.id)"
            >
              +
            </button>
          </div>
          <p class="card__totalprice">{{ productsOrder.totalPrice }} ₽</p>
        </div>
      </div>

      <div class="block__order">
        <form action="" class="block__order-form">
          <input placeholder="Промокод" type="text" class="form__inp" />
          <button class="form__btn">
            <img src="@/assets/images/icons/send.svg" alt="" />
          </button>
        </form>
        <b class="block__total">Итого: 2 379 ₽</b>
      </div>
    </div>
    <h3 class="notorder" v-else>У вас нет заказов !!!</h3>
    <div class="block__carusel" v-if="localCart.length > 0">
      <div>
        <h2 class="block__carusel-title">Добавить к заказу?</h2>
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :autoplay="2000"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :breakpoints="{
            '480': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '640': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(cardsCrusel, index) in cardsFavoriet"
            :key="index"
          >
            <div class="card__slide">
              <img :src="cardsCrusel.img" alt="" class="card__slide-img" />
              <h3 class="card__slide-title">{{ cardsCrusel.title }}</h3>
              <p>{{ cardsCrusel.description }}</p>
              <button class="card__slide-btn">179 ₽</button>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div>
        <h2 class="block__carusel-title mt">Соусы</h2>
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :autoplay="2000"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :breakpoints="{
            '480': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '640': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(cardsCrusel, index) in saucesDates"
            :key="index"
          >
            <div class="card__slide heit">
              <img :src="cardsCrusel.img" alt="" class="card__slide-img" />
              <h3 class="card__slide-title">{{ cardsCrusel.title }}</h3>

              <button class="card__slide-btn">179 ₽</button>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="block__users" v-if="localCart.length > 0">
      <h2 class="block__users-title">О вас</h2>

      <form action="" class="block__form">
        <div>
          <label for="" class="user__name">Имя* </label>
          <input placeholder="Имя" class="user__inp" type="text" />
        </div>
        <div>
          <label for="" class="user__name">Номер телефона* </label>
          <input placeholder="Номер" class="user__inp" type="text" />
        </div>
        <div>
          <label for="" class="user__name">Почта </label>
          <input placeholder="Почта" class="user__inp" type="text" />
        </div>
      </form>

      <div class="users__order">
        <h3 class="order__title">Доставка</h3>
        <div class="order__btns">
          <button
            :class="btnColorDelivery ? 'order__btn-active' : 'order__btn'"
            @click="btnColorDelivery = true"
          >
            Доставка
          </button>
          <button
            @click="btnColorDelivery = false"
            :class="!btnColorDelivery ? 'order__btn-active' : 'order__btn'"
          >
            Самовывоз
          </button>
        </div>
      </div>
      <div class="users__commit">
        <h3 class="users__commit-title">Комментарий</h3>
        <form action="">
          <textarea
            class="users__text"
            placeholder="Есть уточнения?"
          ></textarea>

          <div class="users_t">
            <b class="users__order-total">Итого: 2 379 ₽</b>
            <button class="users__order-send">Оформить заказ</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { mapState, mapActions, mapMutations } from "vuex";

import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      btnColorDelivery: false,

      cardsCouse: [
        {
          title: "Сырный соус",
          img: require("@/assets/images/sauces.png"),
          price: 39,
        },
        {
          title: "Барбфекю",
          img: require("@/assets/images/sauces1.png"),
          price: 33,
        },
        {
          title: "Ранч",
          img: require("@/assets/images/sauces3.png"),
          price: 23,
        },
        {
          title: "Сырный соус",
          img: require("@/assets/images/sauces5.png"),
          price: 21,
        },
        {
          title: "Сгущёнка",
          img: require("@/assets/images/sauces.png"),
          price: 34,
        },

        {
          title: "Сырный соус",
          img: require("@/assets/images/sauces3.png"),
          price: 55,
        },
        {
          title: "Барбфекю",
          img: require("@/assets/images/sauces1.png"),
          price: 70,
        },
        {
          title: "Ранч",
          img: require("@/assets/images/sauces5.png"),
          price: 89,
        },
      ],
    };
  },

  computed: {
    ...mapState(["cardsFavoriet", "saucesDates", "localCart"]),
    chunkedCards() {
      const chunkSize = 4; // Количество карточек в одной "строке"
      const chunks = [];
      for (let i = 0; i < this.cards.length; i += chunkSize) {
        chunks.push(this.cards.slice(i, i + chunkSize));
      }
      return chunks;
    },
    cardsSause() {
      const saucesCount = 4;
      const souseBd = [];

      for (let i = 0; i < this.cardsCouse.length; i += saucesCount) {
        souseBd.push(this.cardsCouse.slice(i, i + saucesCount));
      }
      return souseBd;
    },
  },
  methods: {
    ...mapActions(["getSauces"]),
    ...mapMutations(["productsQuantityMinus", "productsQuantityPlus"]),
  },

  mounted() {
    this.getSauces();
  },
};
</script>

<style>
/*  */

.notorder {
  color: #ff7010;
  font-size: 40px;
  max-width: 400px;
  width: 100%;
  min-height: 400px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card__txt {
  max-width: 300px;
  width: 100%;
}
.heit {
  min-height: 300px !important;
}
.mt {
  margin-top: 30px;
}
.block {
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

.block__title {
  margin-bottom: 24px;
  color: #191919;
  font-size: 40px;
}

.block__card {
  display: flex;
  background: #fff;
  padding: 16px 24px 16px 16px;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card__img {
  max-width: 120px;
  width: 100%;
  object-fit: contain;
}

.block__card-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.card__title {
  margin-bottom: 8px;
}

.block__card-right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.card__options {
  width: 93px;
  /* width: 100%; */
  background-color: #ffeee2;
  padding: 8px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
}

.card__btn {
  color: rgba(255, 112, 16, 1);
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  cursor: pointer;
}

.card__count {
  font-size: 18px;
  color: #ff7010;
}

.card__totalprice {
  color: #ff7010;
  font-size: 20px;
  font-weight: 600;
}
.block__order {
  background-color: #fff;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
}
.block__order-form {
  width: 320px;
  height: 48px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
}

.form__inp {
  background: none;
  border: none;
  outline: none;
  padding-left: 16px;
  font-size: 16px;
  color: #a5a5a5;
}

.form__inp::placeholder {
  color: #a5a5a5;
}

.form__btn {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background-color: #ff7010;
}

.block__total {
  color: #ff7010;
}

.card-group {
  display: flex;
  gap: 30px;
}

.card__slide-souse {
  max-width: 190px;
  min-height: 300px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 16px 16px;
  text-align: center;
}

.card__slide {
  max-width: 190px;
  min-height: 350px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 16px 16px;
  text-align: center;
}

.card__slide-img {
  max-width: 190px;

  width: 100%;
}
.card__slide-btn {
  max-width: 158px;
  width: 100%;
  padding: 10px 0;
  border-radius: 6px;
  background: #ff7010;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
}

.card__slide-title {
  max-width: 130px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
}

.block__carusel {
  margin-top: 30px;
}

.block__carusel-title {
  margin-bottom: 24px;
}

@media (max-width: 576px) {
  .card__slide {
    max-width: 100%;
    min-height: 350px;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 16px 16px;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .block__card {
    flex-direction: column;
    row-gap: 40px;

    align-items: center;
  }

  .block__order {
    flex-direction: column;
    row-gap: 30px;
    align-items: flex-start;
  }

  .block__order-form {
    max-width: 300px;
    width: 100%;
  }
  .form__inp {
    width: 100%;
  }

  .card__title {
    font-size: 15px;
    margin-bottom: 20px;
  }
}

@media (max-width: 320px) {
  .block__card-right {
    width: 100%;
  }
}
</style>
