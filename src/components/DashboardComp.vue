<template>
  <div class="dashboard-container">
    <WarningBox></WarningBox>
    <WeeklyGraph></WeeklyGraph>
    <CriticalAreas></CriticalAreas>
    <Schedule></Schedule>
  </div>


</template>

<script>
  import WarningBox from './WarningBox.vue';
  import CriticalAreas from './CriticalAreas.vue';
  import Schedule from './Schedule.vue';
  import WeeklyGraph from './WeeklyGraph.vue';

  export default {
    components: {
      WarningBox,
      CriticalAreas,
      Schedule,
      WeeklyGraph
    },
  }

</script>

<style>
.dashboard-container {
  display: grid;
  grid-template-columns: 30vw 45vw;
  grid-template-rows: auto auto;
  gap: 20px;
}
</style>