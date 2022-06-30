<template>
  <ion-page>
    <ion-content scroll-y="false">
      <ion-col>
        <ion-item>
          <h1>Select a user type</h1>
        </ion-item>
        <ion-item>
          <ion-card @click="
            () =>
              router.push({
                name: 'Signup',
                params: {
                  role: 'client',
                },
              })
          ">
            <ion-img :src="require('@/assets/images/client.png')"></ion-img>
            <div class="myOverlay">
              <div class="card-title">Client</div>
            </div>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card @click="
            () =>
              router.push({
                name: 'Signup',
                params: {
                  role: 'restaurant',
                },
              })
          ">
            <ion-img :src="require('@/assets/images/restaurant.png')"></ion-img>
            <div class="myOverlay">
              <div class="card-title">Restaurant owner</div>
            </div>
          </ion-card>
        </ion-item>
        <ion-item>
          <ion-card @click="
            () =>
              router.push({
                name: 'Signup',
                params: {
                  role: 'delivery',
                },
              })
          ">
            <ion-img :src="require('@/assets/images/delivery.png')"></ion-img>
            <div class="myOverlay">
              <div class="card-title">Delivery</div>
            </div>
          </ion-card>
        </ion-item>
      </ion-col>
    </ion-content>
    <ion-item>
      <ion-button @click="
        () =>
          router.push({
            name: 'Login',
          })
      ">
        You already have an account ? Go to Login
      </ion-button>
    </ion-item>
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

<style scoped>
@media screen and (min-width: 751px) {

  h1 {
    font-size: 4vw;
    margin-left: 1.5rem;
    margin-right: 1rem;
  }

  ion-img {
    width: 60vw;
    height: 10vw;
    object-fit: cover;
  }

  ion-card {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  ion-item {
    padding: 0.2vw;
    margin-left: 30vw;
    margin-right: 30vw;
    align-content: center;
  }

  ion-button {
    bottom: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 3rem;
    width: 100vw;
  }

  .myOverlay {
    width: 100%;
    top: 4rem;
    font-size: 2.5vw;
    width: 20rem;
    line-height: 3rem;
    padding-left: 3rem;
    position: absolute;
    opacity: 1;
    color: var(--ion-color-medium);
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 750px) {
  ion-card {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  ion-item {
    margin-left: 1rem;
    margin-right: 1rem;
    align-content: center;
  }

  ion-button {
    bottom: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
  }

  h1 {
    padding: 2rem;
    line-height: 3rem;
    font-size: 14vw;
  }

  ion-img {
    width: 150vw;
    height: 35vw;
    object-fit: cover;
  }

  .myOverlay {
    width: 100%;
    top: 2rem;
    font-size: 11vw;
    width: 20rem;
    line-height: 3rem;
    padding-left: 0.9rem;
    position: absolute;
    opacity: 1;
    color: var(--ion-color-medium);
  }
}
</style>
