<template>
  <div class="record-article">
    <h2 class="article-title">
      {{ gameTitle }}
    </h2>
    <div class="record-sectors">
      <RecordSector
        v-for="sector in sectors" v-bind:key="sector.sectorId"
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

<style scoped>
.record-sectors {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
