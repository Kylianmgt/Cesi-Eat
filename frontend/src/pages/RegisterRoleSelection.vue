<template>
  <ion-page>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Client</ion-label>
          <ion-button
            @click="
              () =>
                router.push({
                  name: 'Signup',
                  params: {
                    role: 'client'
                  }
                })
            "
            >ClientRegister</ion-button
          >
        </ion-item>
        <ion-item>
          <ion-label>Restaurant</ion-label>
          <ion-button
            @click="
              () =>
                router.push({
                  name: 'Signup',
                  params: {
                    role: 'restaurant'
                  }
                })
            "
            >RestaurantRegister</ion-button
          >
        </ion-item>
        <ion-item>
          <ion-label>Delivery</ion-label>
          <ion-button
            @click="
              () =>
                router.push({
                  name: 'Signup',
                  params: {
                    role: 'delivery'
                  }
                })
            "
            >DeliveryRegister</ion-button
          >
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
//import ionic components used in template
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonButton,
  IonLabel
} from "@ionic/vue";

//import vue router
import { useRouter } from "vue-router";

export default {
  name: "RegisterRoleSelection",
  components: {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonButton,
    IonLabel
  },
  setup() {
    const router = useRouter();
    return {
      router
    };
  }
};
</script>
