<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Transaksi</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Transaksi</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-item>
            <ion-icon name="pizza" slot="start"></ion-icon>
            <ion-label>
                <h2>No transaksi</h2>
                <p>Tanggal</p>
                <p>jam</p>
            </ion-label>
        </ion-item>
  
      </ion-content>
    </ion-page>
  </template>

  <script setup lang="ts">

</script>