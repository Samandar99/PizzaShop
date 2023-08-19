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
      <div
        class="card"
        v-for="sush in postsSushi"
        :key="sush.id"
        v-if="postsSushi"
      >
        <div class="news">NEW</div>
        <router-link :to="/sushi/ + sush.id">
          <img :src="sush.img" alt="" />
        </router-link>
        <div class="card__text">
          <b class="card-n">{{ sush.title }}</b>
          <p class="card-name__info">
            {{ sush.text }}
          </p>
        </div>
        <div class="card-buy">
          <button
            class="card-btn"
            @click="modalOpenProducts({ id: sush.id, sushi: sushi })"
          >
            Выбрать
          </button>
          <span class="card__price">от {{ sush.price }} ₽</span>
        </div>
      </div>

      <template v-else>
        <Blockskeleton
          class="card py"
          v-for="(loading, index) in loadingLength"
          :key="index"
        />
      </template>
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
      <div class="card" v-for="sncak in snacks1" :key="sncak.id" v-if="snacks1">
        <div class="news">NEW</div>
        <router-link :to="/snacks/ + sncak.id">
          <img :src="sncak.img" alt="" />
        </router-link>

        <div class="card__text">
          <b class="card-n">{{ sncak.title }}</b>
          <p class="card-name__info">
            {{ sncak.text }}
          </p>
        </div>
        <div class="card-buy">
          <button class="card-btn">Выбрать</button>
          <span class="card__price">от {{ sncak.price }} ₽</span>
        </div>
      </div>
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
      <div
        class="card"
        v-for="desertsItem in deserts"
        :key="desertsItem.id"
        v-if="deserts"
      >
        <div class="news">NEW</div>
        <router-link :to="/desert/ + desertsItem.id">
          <img :src="desertsItem.img" alt="" />
        </router-link>
        <div class="card__text">
          <b class="card-n">{{ desertsItem.title }}</b>
          <p class="card-name__info">
            {{ desertsItem.text }}
          </p>
        </div>
        <div class="card-buy">
          <button class="card-btn">Выбрать</button>
          <span class="card__price">от {{ desertsItem.price }} ₽</span>
        </div>
      </div>
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
      <div
        class="card"
        v-for="beverage in beverages"
        :key="beverage.id"
        v-if="beverages"
      >
        <div class="news">NEW</div>
        <router-link :to="/beverages/ + beverage.id">
          <img :src="beverage.img" alt="" />
        </router-link>
        <div class="card__text">
          <b class="card-n">{{ beverage.title }}</b>
          <p class="card-name__info">
            {{ beverage.text }}
          </p>
        </div>
        <div class="card-buy">
          <button class="card-btn">Выбрать</button>
          <span class="card__price">от {{ beverage.price }} ₽</span>
        </div>
      </div>
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
      <div
        class="card"
        v-for="sauces in saucesDates"
        :key="sauces.id"
        v-if="saucesDates"
      >
        <div class="news">NEW</div>
        <router-link :to="/sauce/ + sauces.id">
          <img :src="sauces.img" alt="" />
        </router-link>

        <div class="card__text">
          <b class="card-n">{{ sauces.title }}</b>
          <p class="card-name__info">
            {{ sauces.text }}
          </p>
        </div>
        <div class="card-buy">
          <button class="card-btn">Выбрать</button>
          <span class="card__price">от {{ sauces.price }} ₽</span>
        </div>
      </div>
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
