<template>
    <div class="critical-area-container">
        <div class="critical-title-container">
            <h2 class="subtitle h2-ticket">Kritiske områder</h2>
            <h3 class="subtitle-text h3-ticket">Vis alle</h3>
        </div>
        <div v-if="ticketsWithArtwork.length" v-for="(ticket, index) in ticketsWithArtwork" :key="index">
            <a @click="selectTicket(ticket.ticketId)">
                <div class="ticket-container">
                    <div class="ticket-area-container">
                        <img class="ticket-area-content" src="../../media/amountIconVector.svg">
                    </div>
                    <div class="ticket-content">
                        <h4 class="h4-subtitle">{{ convertAreaNameToString(ticket.ticketArea) }}</h4>
                        <h5 class="h5-text">{{ ticket.artworkName }}</h5>
                    </div>
                    <div class="arrow-container">
                        <img class="arrow-content" src="../../media/arrowButton.png">
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>


<script>
import { convertAreaNameToString, selectTicket } from '@/utils/areaUtils'

const URL = "https://sensemaxrest.azurewebsites.net/api";

export default {
    data() {
        return {
            artworks: [],
            tickets: [],
            ticketsWithArtwork: []
        }
    },
    mounted() {
        this.fetchTicketsAndArtworks()
    },
    props: {
        tickets: Array,
    },
    methods: {
        convertAreaNameToString,
        selectTicket,
        async fetchTicketsAndArtworks() {
            try {
                // Hent tickets
                let ticketsResponse = await fetch(`${URL}/ticket`);
                let tickets = await ticketsResponse.json();

                // Hent artworks
                let artworksResponse = await fetch(`${URL}/artworks`);
                let artworks = await artworksResponse.json();

                // Kombiner tickets og artworks
                this.ticketsWithArtwork = tickets.map(ticket => {
                    let artwork = artworks.find(art => art.artworkId === ticket.artworkInvolved);
                    return {
                        ...ticket,
                        artworkName: artwork ? artwork.artworkName : 'Ukendt'
                    };
                });
            } catch (err) {
                console.error("Fejl ved hentning af data: ", err);
            }
        }
    }
}


</script>


<style>
h2.h2-ticket {
    width: 85%;
}

.h3-ticket {
    text-align: right;
    width: 15%;
}

/* CONTAINER STYLE */
.critical-title-container {
    display: flex;
    border-bottom: solid 1px #77767A;
    margin-bottom: 25px;
    padding-bottom: 5px;
}

.ticket-container {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    transition: background-color 0.1s ease-in-out;
}

.ticket-area-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.625rem;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    width: 50px;
    padding: 5px 10px;
    height: 50px;
}

/* CONTENT STYLE */
.ticket-content {
    width: 85%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.arrow-content {
    height: 25px;
}

.arrow-container {
    width: 15%;
    text-align: right;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ticket-container:hover {
    background-color: #f5f5f5;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0.625rem;
}

.ticket-container:hover .ticket-area-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0);
}

.ticket-area-content {
    height: 40px;
    max-width: 100%;
    max-height: 100%;
}
</style>