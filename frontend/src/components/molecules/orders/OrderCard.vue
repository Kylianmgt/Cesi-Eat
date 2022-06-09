<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col size="15">
          <ion-card-header>
            <ion-img
              style="width: 200px; height: 200px;"
              :src="order.image"
            ></ion-img>
            <ion-card-title>{{ order.name }}</ion-card-title>
          </ion-card-header>
        </ion-col>
        <ion-col size="15">
          <h1>{{ order.price }}€</h1>
        </ion-col>
      </ion-row>
      <ion-row size="15">
        <ion-col size="15">
          <ion-button>supprimer</ion-button>
          <!-- shape="round" @click="delete(order.id)" -->
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

import Image from "../../Image.vue";
// import { useRouter } from "vue-router";

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
    Image
  },
  props: {
    order: {
      type: Object,
      required: false
    },
    className: {
      type: String,
      required: false
    }
  },
  setup(props) {
    console.log(props.order);
    // const router = useRouter();
  },
  methods: {}
});
</script>
