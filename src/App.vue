<template>
    <Menu
      :pages="pages"
      :active-page="activePage"
      :menu-link-click="(index) => activePage = index"
    ></Menu>
    <PageViewer :page="pages[activePage]"></PageViewer>
</template>

<script>
import Menu from './components/Menu.vue';
import PageViewer from './components/PageViewer.vue';

export default {
    components: {
        Menu,
        PageViewer
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