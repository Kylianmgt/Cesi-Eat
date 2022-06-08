<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-content scroll-y="true" padding>
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
              <MenuCard
                :order="order"
                v-for="menu in data.menus"
                :data="menu"
              />
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-text color="Dark ">
              <h3>Articles</h3>
            </ion-text>
            <ion-row>
              <ArticleCard
                :order="order"
                v-for="article in data.articles"
                :data="article"
              />
            </ion-row>
          </ion-grid>
          <ion-grid style="height: 100%">
            <ion-row
              justify-content-center
              align-items-center
              style="height: 100%"
            >
              <ion-button @click="validateOrder()">Passer commande</ion-button>
            </ion-row>
          </ion-grid>
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
import useToast from "../../composition/useToast";

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
    var order = [];
    const { openToast } = useToast();
    return {
      router,
      data,
      openToast,
      order
    };
  },
  methods: {
    validateOrder() {
      console.log("before pop :", this.order);
      var cleanOrder = [];
      for (let i = 0; i < this.order.length; i++) {
        if (this.order[i].amount > 0) {
          cleanOrder.push(this.order[i]);
        }
      }
      console.log("after pop :", cleanOrder);
      if (this.order.length == 0) {
        console.log("no item selected !");
        this.openToast("no item selected !", "danger", "0", 1500);
      }

      this.$router.push({
        name: "/client/order-check",
        params: {
          data: JSON.stringify(cleanOrder)
        }
      });
    }
  }
};
</script>
