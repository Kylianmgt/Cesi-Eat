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
                <ion-label position="floating">Note du restaurant </ion-label>
                <ion-input type="text" v-model="restaurant.rating" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Note du restaurant </ion-label>
                <ion-input type="text" v-model="restaurant.distance" />
            </ion-item>

            <ion-item>
                <ion-label position="floating">Note du restaurant </ion-label>
                <ion-input type="text" v-model="restaurant.city" />
            </ion-item>

              <ion-button color="secondary" @click="() => router.push({ name: 'MyRestaurant' })">Enregistrer les modifications</ion-button>
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
    IonCard,
    IonCardContent,
    IonContent,
    IonLabel,
  },

  props: route => ({
    restoDatas: data,
    ...route.params
  }),

  setup() {
    const router = useRouter();
    const route = useRoute();

    let restoDatas = JSON.parse(route.params.restoDatas);
    let restoName = restoDatas[0].name;
    let restoDescription = restoDatas[0].description;
    let restoAddress = restoDatas[0].address;
    let restoRating = restoDatas[0].rating;
    let restoDistance = restoDatas[0].distance;
    let restoCity = restoDatas[0].city;

    let restaurant = {
        name: restoName,
        description: restoDescription,
        address: restoAddress,
        rating: restoRating,
        distance: restoDistance,
        city: restoCity,
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
