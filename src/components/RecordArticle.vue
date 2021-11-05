<template>
  <div class="record-article">
    <h2 class="article-title">
      {{ gameTitle }}
    </h2>
    <div v-for="sector in sectors" v-bind:key="sector.sectorId">
      <RecordSector
        :gameId="gameId"
        :sectorId="sector.sectorId"
        :sectorName="sector.sectorName"
        :maxArea="sector.maxArea"
        :score="sector.score"
        :byWhat="sector.byWhat"
        :comment="sector.comment"
      />
    </div>
  </div>
</template>

<script>
import RecordSector from './RecordSector.vue';

export default {
  name: 'RecordArticle',
  props: {
    gameId: String,
    gameTitle: String,
    sectors: Array
  },
  components: {
    RecordSector
  }
};
</script>
