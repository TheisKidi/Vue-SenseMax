<template>
    <div class="critical-area-container">
        <div class="critical-title-container">
            <h2 class="subtitle h2-ticket">Kritiske områder</h2>
            <h3 class="subtitle-text h3-ticket">Vis alle</h3>
        </div>
        <div v-if="(tickets.length)" v-for="(ticket, index) in tickets">
            <a href="#">
                <div class="ticket-container">
                    <div class="ticket-area-container">
                        <img class="ticket-area-content" src="../../media/amountIconVector.svg">
                    </div>
                    <div class="ticket-content">
                        <h4 class="h4-subtitle">{{ convertAreaNameToString(ticket.ticketArea) }}</h4>
                        <h5 class="h5-text">{{ getartwor }}</h5>
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
import { convertAreaNameToString, fetchArtwork } from '@/utils/areaUtils'

const URL = "https://sensemaxrest.azurewebsites.net/api";

export default {
    data() {
        return {
            artworks: {} // Use an object to store artworks keyed by artworkNum
        }
    },
    props: {
        tickets: Array,
    },
    methods: {
        convertAreaNameToString,
        fetchArtwork,
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
}

.ticket-area-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.625rem;
    background: #FFF;
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

.ticket-area-content {
    height: 40px;
    max-width: 100%;
    max-height: 100%;
}
</style>