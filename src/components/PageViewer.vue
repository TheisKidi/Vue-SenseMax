<template>
    <div class="banner-container"></div>
    <div class="page-container">
        <div class="page-title-container">
        <h1 class="page-title">{{ page.pageTitle }}</h1>
        </div>
    </div>
    <Menu
        :pages="pages"
        :active-page="activePage"
        :menu-link-click="(index) => activePage = index"
    ></Menu>
</template>

<script>
import Menu from '../components/Menu.vue';
export default {
    props: ['page'],
    components: {
        Menu
    },
    data() {
        return {
            activePage: 0,        
            pages: [
                {
                    link: {text: 'Dashboard', url: 'index.html'},
                    pageTitle: 'Dashboard',
                    pageIcon: 'dashboardIconVector.svg',
                },
                {
                    link: {text: 'Optælling', url: 'count.html'},
                    pageTitle: 'Optælling',
                    pageIcon: 'amountIconVector.svg',
                },
                {
                    link: {text: 'Indeklima', url: 'climate.html'},
                    pageTitle: 'Indeklima',
                    pageIcon: 'climateIconVector.svg',
                },
                {
                    link: {text: 'Advarsler', url: 'warnings.html'},
                    pageTitle: 'Asvarsler',
                    pageIcon: 'warningIconVector.svg',
                }
            ]
        };
    }
};
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
    height: 10vh;
    z-index: 1;
    position: relative; /* Add this line */
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