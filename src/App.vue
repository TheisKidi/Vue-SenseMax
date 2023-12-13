<template>
    <PageViewer :page="pages[activePage]"></PageViewer>
    <Menu
        :pages="pages"
        :active-page="activePage"
        :menu-link-click="(index) => activePage = index"
    ></Menu>
</template>

<script>
import PageViewer from './components/PageViewer.vue';
import Menu from './components/Menu.vue';

export default {
    components: {
        PageViewer,
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
                    pageComponent: 'DashboardComp.vue',
                },
                {
                    link: {text: 'Optælling', url: 'count.html'},
                    pageTitle: 'Optælling',
                    pageIcon: 'amountIconVector.svg',
                    pageComponent: '',
                },
                {
                    link: {text: 'Indeklima', url: 'climate.html'},
                    pageTitle: 'Indeklima',
                    pageIcon: 'climateIconVector.svg',
                    pageComponent: '',
                },
                {
                    link: {text: 'Advarsler', url: 'warnings.html'},
                    pageTitle: 'Asvarsler',
                    pageIcon: 'warningIconVector.svg',
                    pageComponent: '',
                }
            ]
        };
    }
};
</script>