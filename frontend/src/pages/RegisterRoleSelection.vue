<template>
  <ion-page>
    <ion-content>
      <ion-col>
        <ion-item>
          <ion-label>Client</ion-label>
          <ion-button
            @click="
              () =>
                router.push({
                  name: 'Signup',
                  params: {
                    role: 'client',
                  },
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
                    role: 'restaurant',
                  },
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
                    role: 'delivery',
                  },
                })
            "
            >DeliveryRegister</ion-button
          >
        </ion-item>
      </ion-col>
    </ion-content>
    <ion-content>
      <ion-button
        @click="
          () =>
            router.push({
              name: 'Login',
            })
        "
      >
        You already have an account ? Go to Login
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonButton,
  IonLabel,
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
    IonLabel,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
