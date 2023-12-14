<template>
  <div class="container">
    <div class="ticket-links">
      <a v-for="ticket in ticketsWithArtwork" :key="ticket.ticketId" @click="showArtwork(ticket)">
        <div class="shadow-box-container ticket-box">
          <div class="ticket-top">
            <p class="artwork-text-id">ID {{ ticket.ticketId }}</p>
            <p class="artwork-text-content">{{ convertAreaNameToString(ticket.ticketArea) }}</p>
          </div>
          <div class="ticket-bottom">
            <p>{{ ticket.artworkName }}</p>
          </div>
        </div>
      </a>
    </div>
    <div v-if="selectedTicket" class="ticket-description">
      <div class="description-container">
        <p class="artwork-title-content">{{ selectedTicket.ticketId }}.</p>
        <p class="artwork-title-content"> {{ selectedTicket.artworkName }}</p>
      </div>
      <p>Fejl opdaget: {{ selectedTicket.ticketDate }}</p>
      <p>{{ convertAreaNameToString(selectedTicket.ticketArea) }}</p>
      <p>Løst: {{ selectedTicket.ticketResolved }}</p>
    </div>
  </div>
</template>

<script>
import { convertAreaNameToString } from '@/utils/areaUtils'

const URL = "https://sensemaxrest.azurewebsites.net/api"

export default {
  data() {
    return {
      artworks: [],
      tickets: [],
      ticketsWithArtwork: [],
      selectedTicket: null
    };
  },
  mounted() {
    this.fetchTicketsAndArtworks()
  },
  methods: {
    showArtwork(ticket) {
      this.selectedTicket = {
        ...ticket
      }
      console.log(ticket)
    },
    async fetchTicketsAndArtworks() {
      try {
        // Hent tickets
        let ticketsResponse = await fetch(`${URL}/ticket`);
        let tickets = await ticketsResponse.json();

        // Hent artworks
        let artworksResponse = await fetch(`${URL}/artworks`);
        let artworks = await artworksResponse.json();

        this.ticketsWithArtwork = tickets.map(ticket => {
          let artwork = artworks.find(art => art.artworkId === ticket.artworkInvolved);
          return {
            ...ticket,
            artworkName: artwork ? artwork.artworkName : "Ukendt"
          }
        });
      } catch (err) {
        console.error("Fejl ved hentning af data: ", err);
      }
    },
    convertAreaNameToString,
  }
}


</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 100px;
}

.description-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.ticket-box {
  width: 300px;
  height: fit-content;
  margin-bottom: 20px;
  background-color: rgb(255, 230, 230);
}

.artwork-text-id {
  padding: 0;
}

.ticket-top {
  gap: 10px;
}

.ticket-description {
  width: 600px;
  padding: 20px;
  height: 500px;
  border-radius: 1.5rem;
  background: #FFF;
  box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.10);
}
</style>