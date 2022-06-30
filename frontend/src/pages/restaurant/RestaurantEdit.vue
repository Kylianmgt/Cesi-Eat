<template>
  <base-layout :show-menu-button="true" pageTitle="Editer les Informations du restaurant">
    <ion-page>
      <ion-content>
        <!-- Mains informations about restaurant -->
        <IonTitle size="large" color="primary">Mes Informations</IonTitle>
        <div class="flex flex-col p-8 ">

          <ion-item>
            <ion-label position="floating">Nom du restaurant </ion-label>
            <ion-input type="text" v-model="restaurant.name" />
          </ion-item>

          <ion-item>
            <ion-label position="floating">Description du restaurant </ion-label>
            <ion-input type="text" v-model="restaurant.description" />
          </ion-item>

          <ion-item>
            <ion-label position="floating">Addresse du restaurant </ion-label>
            <ion-input type="text" v-model="restaurant.address" />
          </ion-item>

          <ion-item>
            <ion-label position="floating">Ville du restaurant </ion-label>
            <ion-input type="text" v-model="restaurant.city" />
          </ion-item>

          <ion-item>
            <ion-label position="floating">Code Postal du restaurant </ion-label>
            <ion-input type="text" v-model="restaurant.zipCode" />
          </ion-item>

          <ion-item>
            <ion-label position="floating">Image du restaurant </ion-label>
            <ion-img :src="restaurant.image" alt="restaurant image"></ion-img>
          </ion-item>

          <ion-button color="secondary" @click="() => router.push({ name: 'MyRestaurant' })">Enregistrer les
            modifications</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </base-layout>
</template>


<script>
import {
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonCol,
  IonGrid,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonLabel,
  IonImg,

} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "RestaurantEdit",
  components: {
    IonIcon,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonCol,
    IonGrid,
    IonButton,
    IonImg,
    IonCard,
    IonCardContent,
    IonContent,
    IonLabel,
  },

  props: route => ({
    restoData: data,
    ...route.params
  }),

  setup() {
    const router = useRouter();
    const route = useRoute();
    let restoDatas = JSON.parse(route.params.restoData);
    let restoName = restoDatas.profil.name;
    let restoDescription = restoDatas.profil.description;
    let restoAddress = restoDatas.profil.address;
    let restoZipCode = restoDatas.profil.zipCode;
    let restoDistance = restoDatas.profil.distance;
    let restoCity = restoDatas.profil.city;
    let restoImage = restoDatas.profil.image;

    let restaurant = {
      name: restoName || "sample",
      description: restoDescription || "sample",
      address: restoAddress || "sample",
      zipCode: restoZipCode,
      distance: restoDistance || "sample",
      city: restoCity || "sample",
      image: restoImage
    }

    return {
      router,
      restaurant
    };
  },
  methods: {
  },

};
</script>
