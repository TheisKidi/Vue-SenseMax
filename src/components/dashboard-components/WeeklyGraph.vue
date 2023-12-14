<template>
  <div>
    <h2>Overblik</h2>
    <div class="shadow-box-container bar-chart">
      <div v-for="artwork in  artworks.slice(0, 15) " class="bar-wrapper">
        <p class="bar-temp">{{ artwork.actualTemp.toFixed(0) }} °C</p>
        <div class="bar" :style="{ height: calculateHeight(artwork.actualTemp) + '%' }">
        </div>
        <p>Id: {{ artwork.artworkId }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      artworks: []
    }
  },
  mounted() {
    fetch('https://sensemaxrest.azurewebsites.net/api/artworks')
      .then(res => res.json())
      .then(data => this.artworks = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    calculateHeight(temp) {
      const maxTemp = Math.max(...this.artworks.map(a => a.actualTemp))
      return (temp / maxTemp) * 90;
    }
  }
}

</script>

<style scoped>
.bar-chart {
  height: 300px;
  display: flex;
  flex-direction: row;
  gap: 16.5px;
  justify-content: space-evenly;
}

.bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.bar-wrapper p {
  color: #bababa;
  transition: color 0.1s ease-in-out;
}

.bar-temp {
  font-size: 12px;
}

.bar {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.bar-wrapper div {
  width: 46px;
  background-color: rgb(255, 171, 171);
  border-radius: 5px;
  transition: background-color 0.1s ease-in-out;
}

.bar-wrapper:hover div {
  background-color: rgb(228, 67, 67);
  cursor: pointer;
}

.bar-wrapper:hover p {
  color: black;
  cursor: pointer;
}
</style>