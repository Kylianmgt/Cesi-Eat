<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col size="15">
          <ion-card-header>
            <ion-img
              style="width: 200px; height: 200px"
              :src="selected_item.image"
            ></ion-img>
            <ion-card-title>{{ selected_item.name }}</ion-card-title>
          </ion-card-header>
        </ion-col>
        <ion-col size="15">
          <p>{{ selected_item.price }}€ (unité)</p>
          <h1>
            {{ selected_item.price }}x {{ selected_item.amount }}={{
              selected_item.price * selected_item.amount
            }}
            €
          </h1>
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
  IonLabel,
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
    Image,
  },
  props: {
    selected_item: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
  },
  setup() {},
  methods: {
    deleteItem() {},
  },
});
</script>
