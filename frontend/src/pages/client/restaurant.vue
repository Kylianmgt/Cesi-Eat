<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-content scroll-y="true">
        <ion-grid>
          <ion-grid>
            <ion-row>
              <ion-img :src="data.image" width="10px" height="10px"></ion-img>
            </ion-row>
            <ion-row>
              <ion-text>
                <h1>{{ data.name }}</h1>
              </ion-text>
            </ion-row>
            <ion-row>
              <ion-text color="Dark ">
                <h3>{{ data.description }}</h3>
                <h3>{{ data.address }}</h3>
              </ion-text>
            </ion-row>
            <ion-row>
              <ion-text color="Dark ">
                <h3>A {{ data.distance }}km de chez vous</h3>
                <ion-row>
                  <h3>Note : {{ data.rating }}</h3></ion-row
                ><ion-row size="">
                  <ion-img
                    :src="
                      'https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png'
                    "
                    style="width:50%"
                  ></ion-img
                ></ion-row>
              </ion-text>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-text color="Dark ">
              <h3>Menus</h3>
            </ion-text>
            <ion-row>
              <MenuCard v-for="menu in data.menus" :data="menu" />
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-text color="Dark ">
              <h3>Articles</h3>
            </ion-text>
            <ion-row>
              <ArticleCard v-for="article in data.articles" :data="article" />
            </ion-row>
          </ion-grid>
          <ion-button shape="round">Passer commande</ion-button>
        </ion-grid>
      </ion-content>
      <!-- <ion-img :src="data.image" width="10px" height="10px"></ion-img> -->
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
  IonText
} from "@ionic/vue";

import { useRouter, useRoute } from "vue-router";

import MenuCard from "@/components/molecules/restaurant/MenuCard";
import ArticleCard from "@/components/molecules/restaurant/ArticleCard";
import Image from "../../components/Image.vue";

export default {
  name: "Restaurant",
  components: {
    MenuCard,
    ArticleCard,
    IonIcon,
    IonText,
    IonPage,
    Image
  },
  props: route => ({
    user: userData,
    ...route.params
  }),
  setup() {
    const router = useRouter();
    const route = useRoute();
    var data = JSON.parse(route.params.data);
    console.log("route log : ");
    console.dir(route.params);
    console.dir(data);
    console.log("data image : ", data.image);
    return {
      router,
      data
    };
  }
};
</script>
