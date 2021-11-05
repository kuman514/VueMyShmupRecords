<template>
  <div class="record-list">
    <div class="list-content" v-for="game in receivedData" v-bind:key="game.id">
      <RecordArticle
        :gameId="game.id"
        :gameTitle="game.title"
        :sectors="game.sector"
      />
    </div>
  </div>
</template>

<script>
import RecordArticle from './RecordArticle.vue';
import gameData from '../assets/records.json';

export default {
  name: 'RecordList',
  data() {
    return {
      receivedData: gameData
    };
  },
  components: {
    RecordArticle
  }
};
</script>
