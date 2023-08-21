<template>
  <section class="products">
    <div class="products-header container">
      <h3 class="products-header__title">Комбо</h3>
      <div class="filter">
        <i class="bx bx-filter-alt"></i>
        <span class="filter__name">Фильтры</span>
      </div>
    </div>
    <div class="cards container">
      <div
        class="card"
        v-for="hom in commboProducts"
        :key="hom.id"
        v-if="commboProducts"
      >
        <!-- <div class="news">NEW</div> -->
        <router-link :to="/combo/ + hom.id">
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
      <Blockskeleton
        class="card py"
        v-for="(itemLoading, index) in loadingLength"
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
    ...mapState(["commboProducts"]),
  },
  methods: {
    ...mapActions(["getCommbo"]),
    ...mapMutations(["modalOpenProducts"]),
  },
  mounted() {
    this.getCommbo();
  },
};
</script>

<style></style>
