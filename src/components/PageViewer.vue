<template>
    <div class="page-container">
        <div class="page-title-container">
        <h1 class="page-title">{{ page.pageTitle }}</h1>
        <div v-if="page.pageTitle == 'Dashboard'">
            <DashboardComp/>
        </div>
        </div>
    </div>
</template>

<script>
import DashboardComp from './DashboardComp.vue';


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
        }
    },
    components: { DashboardComp, DashboardComp }
}
</script>

<style>
* {
    font-family: 'Poppins';
    margin: 0;
}

.page-container {
    width: 78vw;
    margin-left: auto;
    position: relative; /* Add this line */
    z-index: 2; /* Increase z-index */
}

/* FONT STYLES */
h1.page-title {
    color: #1D1A22;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>