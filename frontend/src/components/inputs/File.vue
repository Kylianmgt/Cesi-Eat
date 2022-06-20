<template>
  <Button
    :size="size"
    :text="iconOnly ? '' : label"
    :icon="icon"
    :iconOnly="iconOnly"
    :isLoading="loading"
    @click="openCamera ? getFilesByCamera() : getFiles()"
  />
  <ion-input
    hidden
    class="d-none"
    type="file"
    ref="fileInput"
    :multiple="multiple"
    :accept="`${accept};capture=camera`"
    @change="filesChange"
  />
</template>

<script>
import { ref } from "vue";
import { IonInput } from "@ionic/vue";
import { document as documentIcon } from "ionicons/icons";

import usePhotoGallery from "../../composition/usePhotoGallery";

import Button from "../Button.vue";

export default {
  name: "FileInput",
  emits: ["files"],
  props: {
    openCamera: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Select files",
    },
    accept: {
      type: String,
      default: "image/*",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      default: documentIcon,
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  components: {
    Button,
    IonInput,
  },
  setup() {
    const Icon = ref({ document: documentIcon });
    const { takePhoto } = usePhotoGallery();

    return { Icon, takePhoto };
  },
  methods: {
    getFiles() {
      const fileInput =
        this.$refs.fileInput.$el.getElementsByTagName("input")[0];
      fileInput.click();
    },
    async getFilesByCamera() {
      const result = await this.takePhoto();
      const file = this.dataUriToBlob(result);

      this.$emit("files", [file] || []);
    },
    filesChange(event) {
      this.$emit("files", event.target.files || []);
    },
    dataUriToBlob(dataURI) {
      return dataURI;
    },
  },
};
</script>
