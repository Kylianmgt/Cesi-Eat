<template>
  <base-layout :show-menu-button="true" pageTitle="Ajouter un Menu">
    <ion-page>
        <ion-content class="p-8">
            <!-- Menu Add Form -->
            <IonTitle size="large" color="primary">Informations de votre nouveau Menu</IonTitle>
            <div class="flex flex-col p-8 ">

                <ion-item>
                    <ion-label position="floating">Nom du Menu</ion-label>
                    <ion-input type="text" v-model="menuFields.name" />
                </ion-item>

                <ion-item>
                    <ion-label position="floating" >Description du Menu</ion-label>
                    <ion-input type="text" v-model="menuFields.description" value="test" />
                </ion-item>

                <ion-item>
                  <ion-label position="fixe">Image du Menu</ion-label>
                  <ion-img :src="menuFields.image" />
                  <File
                    name="menuInfo.image"
                    open-camera
                    label="Open camera and gallery"
                    @files="
                      (files) => {
                        menuFields.image = files[0];
                      }
                    "
                  />
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Prix du Menu</ion-label>
                    <ion-input type="text" v-model="menuFields.price" value="test" />
                </ion-item>

                <ion-button color="success" @click="() => createMenu(menuFields)">Enregistrer le Menu</ion-button>
                <ion-button color="primary" @click="() => router.back({ name: 'MyRestaurant' })">Retour en arrière</ion-button>

            </div>
        </ion-content>
    </ion-page>
   </base-layout>
</template>


<script>
import {
  IonIcon,
  IonLabel,
  IonContent,
  IonButton,  
  IonInput,
  IonText,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
} from "@ionic/vue";

import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import File from "../../components/inputs/File.vue";

export default {
  name: "MenuAdd",
  components: {
    IonIcon,
    IonLabel,
    IonContent,
    IonButton,  
    IonInput,
    IonText,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    File,
  },

  computed: {
    userData() {
      console.log("[+] Get profil Data...")
      let userData = this.$store.state.user.userData;
      console.log({ userData });
      return userData;
    }
  },

  setup() {
    const router = useRouter();
    const menuFields = ref({
      name: "",
      description: "",
      image: "",
      price: "",
    });

    return {
      router,
      menuFields,
    };

  },

  methods: {
    createMenu(menuFields) {
      console.log("[ ] Starting Create Article...")
      let userData = this.userData;
      console.log({userData})

      let payload = {
        restaurantId: userData.profil.id,
        article: menuFields
      };

      console.log("Restaurant id: " + payload.restaurantId)
      console.log({menuFields});

      // this.$store.dispatch("restaurant/postArticle", payload);

      this.$store.dispatch("restaurant/postMenu", {
        restaurantId: userData.profil.id,
        menu: {...menuFields},
      });
      this.router.back();
    },
  },

};
</script>
