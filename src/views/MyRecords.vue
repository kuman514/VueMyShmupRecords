<template>
  <div class="my-records">
    <h1>My Records (내 기록)</h1>
    <RecordList />
  </div>
</template>

<script>
import RecordList from '../components/RecordList.vue';

export default {
  name: 'MyRecords',
  components: {
    RecordList
  }
}
</script>
