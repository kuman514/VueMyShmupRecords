<template>
  <div class="record-sector">
    <img :src="require(`../assets/recordimgs/${gameId}/${sectorId}.png`)">
    <ul>
      <li>
        {{ sectorName }}
      </li>
      <li>
        Area: {{ maxArea }}
      </li>
      <li>
        Score: {{ score }} Pts.
      </li>
      <li>
        Via: {{ byWhat }}
      </li>
      <li>
        Comment: {{ comment }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecordSector',
  props: {
    gameId: String,
    sectorId: String,
    sectorName: String,
    maxArea: String,
    score: String,
    byWhat: String,
    comment: String
  }
};
</script>

<style scoped>
.record-sector {
  width: 400px;
}

.record-sector > img {
  max-width: 360px;
  max-height: 360px;
}

.record-sector > ul {
  text-align: left;
}
</style>
