<template>
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
        v-else
        v-for="(loading, index) in loadingLength"
        :key="index"
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
    ...mapState(["postsSushi"]),
  },
  methods: {
    ...mapActions(["getPostsSushi"]),
    ...mapMutations(["modalOpenProducts"]),
  },
  mounted() {
    this.getPostsSushi();
  },
};
</script>

<style>
.card-n {
  color: #191919;
}

.card-name__info {
  color: #191919;
}
</style>
