<template>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Пицца</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <template v-if="pizzaProducts1.length > 0">
        <div class="card" v-for="hom in pizzaProducts1" :key="hom.id">
          <div class="news">NEW</div>

          <router-link :to="/pizza/ + hom.id" class="card">
            <img :src="hom.img" alt="" />
          </router-link>

          <div class="card__text">
            <b class="card-n">{{ hom.title }}</b>
            <p class="card-name__info">
              {{ hom.text }}
            </p>
          </div>
          <div class="card-buy">
            <button
              class="card-btn"
              @click="modalOpenProducts({ id: hom.id, hom: hom })"
            >
              Выбрать
            </button>
            <span class="card__price">от {{ hom.price }} ₽</span>
          </div>
        </div>
      </template>

      <Blockskeleton
        class="card py"
        v-for="(loading, index) in loadingLength"
        :key="index"
        v-else
      />
    </div>
  </section>

  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Суши</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <template v-if="postsSushi">
        <div class="card" v-for="hom in postsSushi" :key="hom.id">
          <div class="news">NEW</div>
          <router-link :to="/sushi/ + hom.id">
            <img :src="hom.img" alt="" />
          </router-link>
          <div class="card__text">
            <b class="card-n">{{ hom.title }}</b>
            <p class="card-name__info">
              {{ hom.text }}
            </p>
          </div>
          <div class="card-buy">
            <button
              class="card-btn"
              @click="modalOpenProducts({ id: hom.id, hom: hom })"
            >
              Выбрать
            </button>
            <span class="card__price">от {{ hom.price }} ₽</span>
          </div>
        </div>
      </template>
      <Blockskeleton
        class="card py"
        v-for="(loading, index) in loadingLength"
        :key="index"
        v-else
      />
    </div>
  </section>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Закуски</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <template v-if="snacks1">
        <div class="card" v-for="hom in snacks1" :key="hom.id">
          <div class="news">NEW</div>
          <router-link :to="/snacks/ + hom.id">
            <img :src="hom.img" alt="" />
          </router-link>

          <div class="card__text">
            <b class="card-n">{{ hom.title }}</b>
            <p class="card-name__info">
              {{ hom.text }}
            </p>
          </div>
          <div class="card-buy">
            <button
              class="card-btn"
              @click="modalOpenProducts({ id: hom.id, hom: hom })"
            >
              Выбрать
            </button>
            <span class="card__price">от {{ hom.price }} ₽</span>
          </div>
        </div>
      </template>
      <Blockskeleton
        class="card py"
        v-for="(loading, index) in loadingLength"
        :key="index"
        v-else
      />
    </div>
  </section>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Десерты</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <template v-if="deserts">
        <div class="card" v-for="hom in deserts" :key="hom.id">
          <div class="news">NEW</div>
          <router-link :to="/desert/ + hom.id">
            <img :src="hom.img" alt="" />
          </router-link>
          <div class="card__text">
            <b class="card-n">{{ hom.title }}</b>
            <p class="card-name__info">
              {{ hom.text }}
            </p>
          </div>
          <div class="card-buy">
            <button
              class="card-btn"
              @click="modalOpenProducts({ id: hom.id, hom: hom })"
            >
              Выбрать
            </button>
            <span class="card__price">от {{ hom.price }} ₽</span>
          </div>
        </div>
      </template>
      <Blockskeleton
        class="card py"
        v-for="(itemLoadings, index) in loadingLength"
        :key="index"
        v-else
      />
    </div>
  </section>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Напитки</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <template v-if="beverages">
        <div class="card" v-for="hom in beverages" :key="hom.id">
          <div class="news">NEW</div>
          <router-link :to="/beverages/ + hom.id">
            <img :src="hom.img" alt="" />
          </router-link>
          <div class="card__text">
            <b class="card-n">{{ hom.title }}</b>
            <p class="card-name__info">
              {{ hom.text }}
            </p>
          </div>
          <div class="card-buy">
            <button
              class="card-btn"
              @click="modalOpenProducts({ id: hom.id, hom: hom })"
            >
              Выбрать
            </button>
            <span class="card__price">от {{ hom.price }} ₽</span>
          </div>
        </div>
      </template>
      <Blockskeleton
        class="card py"
        v-for="(loading, index) in loadingLength"
        v-else
        :key="index"
      />
    </div>
  </section>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Соусы</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <template v-if="saucesDates">
        <div class="card" v-for="hom in saucesDates" :key="hom.id">
          <div class="news">NEW</div>
          <router-link :to="/sauce/ + hom.id">
            <img :src="hom.img" alt="" />
          </router-link>

          <div class="card__text">
            <b class="card-n">{{ hom.title }}</b>
            <p class="card-name__info">
              {{ hom.text }}
            </p>
          </div>
          <div class="card-buy">
            <button
              class="card-btn"
              @click="modalOpenProducts({ id: hom.id, hom: hom })"
            >
              Выбрать
            </button>
            <span class="card__price">от {{ hom.price }} ₽</span>
          </div>
        </div>
      </template>
      <Blockskeleton
        class="card py"
        v-for="(itemSauseLength, index) in SauseLength"
        :key="index"
        v-else
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import Blockskeleton from "@/components/ProductsBlock/Blockskeleton.vue";

export default {
  components: {
    Blockskeleton,
  },

  data() {
    return {
      loadingLength: 8,
      SauseLength: 8,
    };
  },
  computed: {
    ...mapState([
      "pizzaProducts1",
      "postsSushi",
      "snacks1",
      "deserts",
      "beverages",
      "saucesDates",
    ]),
    ...mapState(["openShowModalProducts"]),
    ...mapState(["modalCart"]),
    ...mapGetters(["getNotes"]),

    // ...mapGetters(["getPizza"])
  },
  methods: {
    ...mapActions([
      "getPostsPizza",
      "modalOpenProducts",
      "getSnacks",
      "getDesert",
      "getBeverages",
      "getSauces",
    ]),
    ...mapMutations(["modalOpenProducts"]),
    ...mapActions(["getPostsSushi"]),
  },

  mounted() {
    this.getSnacks();
    this.getPostsSushi();
    this.getPostsPizza();
    this.getDesert();
    this.getBeverages();
    this.getSauces();
    this.getNotes;
  },
};
</script>

<style scoped>
.card-n {
  color: #191919;
}

.card-name__info {
  color: #191919;
}

.py {
  padding-left: 17px;
}
</style>
