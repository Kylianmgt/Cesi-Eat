<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col size="15">
          <ion-card-header>
            <ion-img
              style="width: 200px; height: 200px"
              :src="data.image"
            ></ion-img>
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
          <ion-button shape="round" @click="increase(data.id)">+</ion-button>
          <h3>{{ count }}</h3>
          <ion-button shape="round" @click="decrease(data.id)">-</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import { computed, defineComponent } from "vue";
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
import Button from "../../Button.vue";

export default defineComponent({
  data: () => ({ count: 0 }),
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
    selected_menus: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    console.log("Menu data :", props);
  },
  methods: {
    increase: function (id) {
      //increase counter
      this.count++;
      //add to selected_menus variable the selected item and amount
      this.selected_menus.push(this.data.id);
    },
    decrease: function (id) {
      if (this.count > 0) this.count--;
      const indice = this.selected_menus.findIndex((id) => id === this.data.id);
      this.selected_menus.splice(indice, 1);
    },
  },
});
</script>
