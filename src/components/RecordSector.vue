<template>
  <div class="record-sector">
    <img :src="`../assets/recordimgs/${gameId}/${sectorId}.png`">
    <ul>
      <li>
        {{ sectorName }}
      </li>
      <li>
        {{ maxArea }}
      </li>
      <li>
        {{ score }}
      </li>
      <li>
        {{ byWhat }}
      </li>
      <li>
        {{ comment }}
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
