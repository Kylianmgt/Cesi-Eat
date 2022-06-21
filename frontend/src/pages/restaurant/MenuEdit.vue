<template>
  <base-layout :show-menu-button="false" pageTitle="Editer un Menu">
    <ion-page>
        <ion-content>
                <h2>{{ restoDatas[0].city }}</h2>
                <p>Description: {{ $route.params.description }}</p>
                <p>Image: {{ $route.params.image }}</p>
                <p>Prix: {{ $route.params.price }}€</p>
                <h2>Articles :</h2>
                <li v-for="article in $route.params.articles">
                  {{ article.length }}   {{ article[0].price }}€
                </li>
                <ion-button @click="() => router.push({ name: 'MyRestaurant' })">Enregistrer les modifications</ion-button>

        </ion-content>
    </ion-page>
   </base-layout>
</template>


<script>
import {
  IonPage,
  IonInput,
  IonItem,
  IonTitle,
  IonIcon,
  IonText,
  IonToolbar 
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "MenuEdit",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem
  },

  props: route => ({
    restoDatas: data,
    ...route.params
  }),

  setup() {
    const router = useRouter();
    const route = useRoute();
    let restoDatas = $route.params.restoDatas;
    console.log(restoDatas)
    return {
      router,
      restoDatas
    };
  },
  methods: {
    showData() {
        console.log(restoDatas);
    }
  },

};
</script>
