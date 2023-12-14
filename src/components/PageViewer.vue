<template>
    <div class="banner-container"></div>
    <div class="page-container">
        <div class="page-title-container">
            <h1 class="page-title">{{ page.pageTitle }}</h1>
            <div v-if="page.pageTitle == 'Dashboard'">
                <DashboardComp :tickets="tickets" :convertAreaNameToString="convertAreaNameToString"></DashboardComp>
            </div>
            <div v-else-if="page.pageTitle == 'Indeklima'">
                <ClimateViewer></ClimateViewer>
            </div>
            <div v-else-if="page.pageTitle == 'Advarsler'">
                <TicketViewer></TicketViewer>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardComp from './DashboardComp.vue';
import ClimateViewer from './ClimateViewer.vue';
import TicketViewer from './TicketViewer.vue';

export default {
    props: {
        page: {
            type: Object,
            default: (rawProps) => {
                return {
                    pageTitle: '',
                    pageIcon: ''
                };
            }
        },
        tickets: {
            type: Array,
            convertAreaNameToString: Function
        },
    },

    components: { DashboardComp, ClimateViewer, TicketViewer }
}
</script>

<style>
* {
    font-family: 'Poppins';
    margin: 0;
}

.banner-container {
    background-image: url("../media/banner.png");
    background-color: rgba(75, 31, 31, 0.4);
    background-blend-mode: multiply;
    background-size: cover;
    height: 15vh;
    z-index: -1;
    /* Change this line */
    position: relative;
    /* Add this line */
}

.page-container {
    width: 78vw;
    margin-left: auto;
    position: relative;
    /* Add this line */
    z-index: 2;
    /* Increase z-index */
}
</style>