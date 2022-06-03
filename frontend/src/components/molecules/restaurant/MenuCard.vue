<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col size="15">
          <ion-card-header>
            <ion-thumbnail>
              <ion-img :src="data.image"></ion-img>
            </ion-thumbnail>
            <ion-card-title>{{ data.name }}</ion-card-title>
          </ion-card-header>
        </ion-col>
        <ion-col size="15">
          <h1>{{ data.price }}€</h1>
        </ion-col>
      </ion-row>
      <ion-row size="15">
        <ion-col>
          <ion-card-content>{{ data.description }}</ion-card-content>
          <ion-card-footer>Articles : {{ data.articles }}</ion-card-footer>
        </ion-col>
        <ion-col size="15">
          <ion-button shape="round">+</ion-button>
          <h3>0</h3>
          <ion-button shape="round">-</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
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
  IonLabel
} from "@ionic/vue";
import Button from "../../Button.vue";

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
    IonCardTitle
  },
  props: {
    data: {
      type: Object,
      required: false
    },
    className: {
      type: String,
      required: false
    }
  },
  setup() {}
});
</script>
