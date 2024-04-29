<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-button @click="back">
            <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Scanner</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Transaksi</ion-title>
        </ion-toolbar>
      </ion-header>

      <qrcode-stream @detect="onDetect" :track="paintBoundingBox" :formats="['qr_code', 'code_128', 'ean_13']">
      </qrcode-stream>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { arrowBackOutline } from 'ionicons/icons';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import { useRouter } from 'vue-router';

const  router = useRouter()

const back = () => {
  router.back()
}

const onDetect = (data: any) => {
  console.log(data[0].rawValue)
}

// tracking function // pilih salah satu

function paintBoundingBox(detectedCodes: any, ctx: any){
  for (const detectedCode of detectedCodes) {
    const {
      boundingBox: {x, y, width, height }
    } = detectedCode

    ctx.linewidht = 2
    ctx.strokeStyle = '#007bff'
    ctx.strokerect(x, y, width, height)
  }
}
</script>