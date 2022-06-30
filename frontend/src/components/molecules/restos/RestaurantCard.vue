<template>
  <ion-item>
    <ion-card class="rounded-lg" @click="goToRestaurantPage()">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-thumbnail class="card-image-container">
              <Image :src="data.image" />
            </ion-thumbnail>
          </ion-col>
          <ion-col>
            <ion-card-subtitle class="card-subtitle">{{
                data.address
            }}</ion-card-subtitle>
            <ion-card-title class="card-title">{{ data.name }}</ion-card-title>
            <ion-card-content class="text-sm"> </ion-card-content>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card>
  </ion-item>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonIcon,
  IonThumbnail,
  IonImg,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
} from "@ionic/vue";

import Image from "../../Image.vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  components: {
    IonIcon,
    IonLabel,
    IonThumbnail,
    IonImg,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    Image,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
    className: {
      type: String,
      required: false,
    },
  },
  setup() {
    const router = useRouter();
  },
  methods: {
    goToRestaurantPage() {
      this.$router.push({
        name: "Restaurant",
        params: {
          data: JSON.stringify(this.data),
        },
      });
    },
  },
});
</script>

<style scoped>
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */

@media screen and (max-width: 750px) {}

@media screen and (min-width: 751px) {}

ion-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ion-card {
  width: 100vw;
  height: 19vw;
  border-radius: 0;
  border: none;
}

.card-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-image-container {
  width: 15vw;
  height: 12vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--ion-color-primary);
}

.card-subtitle {
  font-size: 1.2rem;
  color: var(--ion-color-medium);
}

.card-description {
  font-size: 1.2rem;
  color: var(--ion-color-medium);
}

.card-button {
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.card-button:hover {
  background-color: #000;
  color: #fff;
}

.card-button:active {
  background-color: #000;
  color: #fff;
}

.card-button:focus {
  background-color: #000;
  color: #fff;
}
</style>
