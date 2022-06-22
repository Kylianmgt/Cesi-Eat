<template>
  <base-layout :show-menu-button="true" pageTitle="Editer un Menu">
    <ion-page>
        <ion-content>
            <!-- Menu Edit Form -->
            <IonTitle size="large" color="primary">Informations du {{ menu.name }}</IonTitle>
            <div class="flex flex-col p-8 ">

            <ion-item>
                <ion-label position="floating">Nom du Menu </ion-label>
                <ion-input type="text" v-model="menu.name" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Description du Menu </ion-label>
                <ion-input type="text" v-model="menu.description" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Image du Menu</ion-label>
                <ion-input type="text" v-model="menu.image" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Prix du Menu</ion-label>
                <ion-input type="text" v-model="menu.price" />
            </ion-item>

              <ion-button color="secondary" @click="() => router.back({ name: 'MyRestaurant' })">Enregistrer les modifications</ion-button>
            </div>
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
  IonToolbar,
  IonLabel,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "MenuEdit",
  components: {
    IonIcon,
    IonLabel,
    IonContent,
    IonButton,  
    IonInput,
    IonText,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem
  },

  props: route => ({
    menu: data,
    ...route.params
  }),

  setup() {
    const router = useRouter();
    const route = useRoute();

    let menu = JSON.parse(route.params.menu);
    let menuName = menu.name;
    let menuDescription = menu.description;
    let menuImage = menu.image;
    let menuPrice = menu.price;
    let menuArticles = menu.articles;

    menu = {
        name: menuName,
        description: menuDescription,
        image: menuImage,
        price: menuPrice,
        articles: menuArticles,
    }


    return {
      router,
      menu
    };
  },
  methods: {},

};
</script>
