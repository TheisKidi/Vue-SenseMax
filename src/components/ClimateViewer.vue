<template>
    <div class="climate-grid-container">
      <div class="climate-grid-left">
        <a v-for="artwork in artworks" :key="artwork.id" class="artwork-container" @click="showArtwork(artwork)" href="#app">
          <div class="artwork-icon-container">
            <img class="artwork-icon-content" src="../media/climateIconVector.svg">
          </div>
          <div class="artwork-info-container">
            <div class="artwork-title-container">
              <h4 class="artwork-title-content">{{ artwork.artworkName }}</h4>
              <p class="artwork-text-content">Aktuelle temperatur: {{ artwork.actualTemp.toFixed(2) }} °C</p>
              <p class="artwork-text-content">Aktuelle fugtighed: {{ artwork.actualHumidity.toFixed(2) }} %</p>
            </div>
          </div>
          <div class="arrow-container2">
            <img class="arrow-content" src="../media/arrowButton.png">
          </div>
        </a>
      </div>
      <div class="climate-grid-right">
        <div v-if="selectedArtwork" class="selected-artwork-container">
          <div class="selected-artwork-background" :style="{ backgroundImage: 'url(' + selectedArtwork.artworkPicture + ')' }"></div>
          <div class="selected-artwork-info-container">
            <div class="selected-artwork-edit">
                <p class="edit-text">Redigér</p>
            </div>
            <div class="selected-artwork-text-container">
                <h4 class="artwork-title-content">{{ selectedArtwork.artworkName }}</h4>
                <p class="artwork-text-id">ID: {{ selectedArtwork.artworkId }}</p>
                <p class="artwork-text-content">Grænseværdi, temperatur: [{{ selectedArtwork.minTemp }} - {{ selectedArtwork.maxTemp }}] °C</p>
                <p class="artwork-text-content">Grænseværdi, fugtighed: [{{ selectedArtwork.minHumidity }} - {{ selectedArtwork.maxHumidity }}] %</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      artworks: [],
      selectedArtwork: null
    };
  },
  methods: {
    showArtwork(artwork) {
      this.selectedArtwork = artwork;
    }
  },
  mounted() {
    fetch('https://sensemaxrest.azurewebsites.net/api/artworks')
      .then(res => res.json())
      .then(data => this.artworks = data)
      .catch(err => console.log(err.message));
  }
};
</script>

<style>
/* CONTAINER STYLING */
.climate-grid-container {
    display: flex;
}

.climate-grid-right {
    width: 35vw;
    margin-left: 100px;
}

.climate-grid-left {
    width: 35vw;
    border-top: solid 1px #77767A;
}

.artwork-container {
  margin-top: 25px;
  display: flex;
  cursor: pointer; /* Add cursor style for clickable items */
}

.artwork-container:hover {
    background: #f5f5f5;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
}

.artwork-icon-container {
    border-radius: 0.625rem;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center; 
    align-items: center;
    min-height: 70px;
    max-height: 70px;
    min-width: 70px;
}

.artwork-container:not(:hover) .artwork-icon-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
}

.artwork-container:hover .artwork-icon-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0);
}

.artwork-info-container {
    margin-left: 25px;
}

.arrow-container2 {
    text-align: right;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 20px;
}

/* CONTENT STYLING */
.artwork-icon-content {
    width: 30px;
}

/* FONT STYLING */
.artwork-title-content {
    color: #1D1A22;
    font-family: Poppins;
    font-size: 1.15rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.artwork-text-content {
    color: #77767A;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.artwork-text-id {
    color: #514F56;
    font-family: Poppins;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 10px;
}

.edit-text {
    text-align: right;
    color: #77767A;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding-top: 5px;
}

/* SELECTED ARTWORK STYLING */
.selected-artwork-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
}

.selected-artwork-background {
    width: 420px;
    height: 530px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
}

.selected-artwork-info-container {
    width: 420px;
}

.selected-artwork-edit {
    border-top: solid 1px #77767A;
    margin-top: 30px;
}

.selected-artwork-text-container {
    width: 400px;
}
</style>