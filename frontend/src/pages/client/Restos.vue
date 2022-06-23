<style scoped>
.scroller {
  height: 100%;
}
</style>

<template>
  <base-layout :show-menu-button="false" :showHeader="false">
    <ion-page>
      <ion-content scroll-y="true" class="">
        <ion-text>
          <h1 class="text-left ml-2 font-bold text-xl">
            Our restaurant selection, just for you.
          </h1>
        </ion-text>
        <ion-list class="px-2">
          <RestaurantCard v-for="item in restaurants" :data="item" />
        </ion-list>
      </ion-content>
    </ion-page>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
} from "@ionic/vue";
import { useRouter } from "vue-router";

import RestaurantCard from "@/components/molecules/restos/RestaurantCard";

export default {
  name: "Restos",
  components: {
    RestaurantCard,
    IonIcon,
    IonText,
    IonPage,
  },
  mounted() {
    this.fetchRestaurants();
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  computed: {
    restaurants() {
      return this.$store.state.client.restaurants;
    },
  },
  methods: {
    fetchRestaurants() {
      this.$store.dispatch("client/getRestaurants");
      console.log(this.$store.state.client.restaurants);
    },
  },
};
</script>
