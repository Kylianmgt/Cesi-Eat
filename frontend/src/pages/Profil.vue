<style>
.profil-img::part(image) {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>

<template>
  <base-layout :show-menu-button="false" :showHeader="false">
    <ion-page>
      <ion-content>
        <ion-img
          class="profil-img flex justify-center align-center ion-padding"
          :src="userData.profil.image"
          v-if="userData.profil.image"
        >
        </ion-img>
        <ion-grid>
          <ion-col>
            <ion-item class="">
              <ion-text class="text-2xl text-center">
                <h1>@{{ userData.profil.name }}</h1>
              </ion-text>
            </ion-item>
            <ion-item>
              <ion-text class="text-lg">
                Email: {{ userData.user.email }}
              </ion-text>
            </ion-item>
            <ion-item>
              <ion-text> Address: {{ userData.profil.address }} </ion-text>
            </ion-item>
            <ion-item>
              <ion-text class="text-bold text-2xl">
                MySponsorCOde: {{ userData.user.publicSponsorCode }}
              </ion-text>
            </ion-item>
            <ion-item v-if="userData.sponsoredProfiles">
              <ion-text> Sponsored Profiles </ion-text>
              <ion-list>
                <ion-item v-for="profil in userData.sponsoredProfiles">
                  <ion-text>
                    {{ profil.name }}
                  </ion-text>
                </ion-item>
              </ion-list>
            </ion-item>
            <ion-item v-if="userData.sponsorProfil">
              <ion-text> My Sponsor Profil </ion-text>
              <ion-item>
                <ion-text>
                  {{ userData.sponsorProfil.name }}
                </ion-text>
              </ion-item>
            </ion-item>
          </ion-col>
        </ion-grid>

        <ion-button name="edit-profil" @click="router.push('/edit-profil')">
          <ion-icon name="create" />
          <span class="ml-2">Edit profil</span>
        </ion-button>
        <ion-button name="logout" @click="router.push('/logout')">
          <ion-icon name="log-out" />
          <span class="ml-2">Logout</span>
        </ion-button>
        <ion-button name="delete-account">
          <ion-icon name="trash" @click="() => deleteAccount()" />
          <span class="ml-2">Delete account</span>
        </ion-button>
      </ion-content>
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
  IonButton,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { mapGetters, mapState } from "vuex";
import { Storage } from "@capacitor/storage";
import { ref } from "vue";

import Button from "../components/Button.vue";

export default {
  name: "Profil",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    Button,
    IonImage,
    IonButton,
  },
  computed: {
    userData() {
      console.log({ ...this.$store.state.user.userData });
      return this.$store.state.user.userData;
    },
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  mounted() {},
  methods: {
    deleteAccount() {
      this.$store.dispatch("deleteAccount");
      this.router.push("/logout");
    },
  },
};
</script>
