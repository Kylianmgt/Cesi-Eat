<template>
  <base-layout :show-menu-button="true" pageTitle="Editer les Informations du restaurant">
    <ion-page>
        <ion-content>
            <!-- Mains informations about restaurant -->
            <IonTitle size="large" color="primary">Mes Informations</IonTitle>
            <div class="flex p-8">
              <ion-grid>
                <ion-col>
                  Nom du restaurant: {{ restaurant.name }}
                </ion-col>
                  <br>
                <ion-col>
                  Description: {{ restaurant.description }}
                  <br>
                </ion-col>
                <ion-col>
                  Ville: {{ restaurant.city }}
                  <br>
                </ion-col>
                <ion-col>
                  Address: {{ restaurant.address }}
                  <br>
                </ion-col>
                <ion-col>
                  Note des utilisateurs: {{ restaurant.rating }}
                </ion-col>
              </ion-grid>
              <ion-button @click="() => router.push({ name: 'MyRestaurant' })">Enregistrer les modifications</ion-button>
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
    IonContent
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
    IonContent
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
    showData() {
        console.log(restoDatas);
    }
  },

};
</script>
