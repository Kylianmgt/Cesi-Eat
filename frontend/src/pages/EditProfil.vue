<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-content v-if="userData.user.role == 'client'">
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input
            :value="clientFields.name"
            v-model="clientFields.name"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Address</ion-label>
          <ion-input
            :value="clientFields.address"
            v-model="clientFields.address"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Image</ion-label>
          <ion-img
            :src="clientFields.image"
            v-if="clientFields.image"
          ></ion-img>
          <File
            open-camera
            label="Open camera and gallery"
            class="mb-2"
            @files="
              (files) => {
                clientFields.image = files[0];
              }
            "
          />
        </ion-item>
      </ion-content>
      <ion-content v-if="userData.user.role == 'delivery'">
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input
            :value="deliveryFields.name"
            v-model="deliveryFields.name"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Address</ion-label>
          <ion-input
            :value="deliveryFields.address"
            v-model="deliveryFields.address"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Image</ion-label>
          <ion-img
            :src="deliveryFields.image"
            v-if="deliveryFields.image"
          ></ion-img>
          <File
            open-camera
            label="Open camera and gallery"
            class="mb-2"
            @files="
              (files) => {
                deliveryFields.image = files[0];
              }
            "
          />
        </ion-item>
      </ion-content>

      <ion-button @click="() => updateProfil()" class="ion-text-center">
        <ion-icon name="save" />
        <span class="ml-2">Save</span>
      </ion-button>
    </ion-page>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonImage,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { mapGetters, mapState, useStore } from "vuex";
import { ref } from "vue";

import File from "../components/inputs/File.vue";

export default {
  name: "EditProfil",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    IonImage,
    IonItem,
    IonLabel,
    IonRow,
    IonCol,
    File,
  },
  computed: {
    userData() {
      console.log(this.$store.state.user.userData);
      return this.$store.state.user.userData;
    },
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const clientFields = ref({
      name: store.state.user.userData.profil.name,
      firstName: store.state.user.userData.profil.firstName,
      address: store.state.user.userData.profil.address,
      image: store.state.user.userData.profil.image,
    });

    const deliveryFields = ref({
      name: store.state.user.userData.profil.name,
      firstName: store.state.user.userData.profil.firstName,
      address: store.state.user.userData.profil.address,
      image: store.state.user.userData.profil.image,
    });
    return {
      router,
      clientFields,
      deliveryFields,
    };
  },
  methods: {
    updateProfil() {
      switch (this.userData.user.role) {
        case "client":
          this.$store.dispatch("user/updateProfil", {
            userId: this.userData.user.id,
            profil: {
              ...this.clientFields,
            },
          });
          this.router.back();
          break;
        case "delivery":
          this.$store.dispatch("user/updateProfil", {
            userId: this.userData.user.id,
            profil: {
              ...this.deliveryFields,
            },
          });
          this.router.back();
          break;
      }
    },
  },
};
</script>
