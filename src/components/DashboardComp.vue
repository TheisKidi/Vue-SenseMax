<template>
  <div class="dashboard-container">
    <WarningBox :tickets="tickets"></WarningBox>
    <WeeklyGraph></WeeklyGraph>
    <CriticalAreas :tickets="tickets" :convertAreaNameToString="convertAreaNameToString"></CriticalAreas>
    <Schedule></Schedule>
  </div>
</template>

<script>
import WarningBox from './dashboard-components/WarningBox.vue';
import CriticalAreas from './dashboard-components/CriticalAreas.vue';
import Schedule from './dashboard-components/Schedule.vue';
import WeeklyGraph from './dashboard-components/WeeklyGraph.vue';

export default {
  components: {
    WarningBox,
    CriticalAreas,
    Schedule,
    WeeklyGraph
  },
  props: {
    tickets: Array,
    convertAreaNameToString: Function
  }
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