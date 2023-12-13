<template>
    <PageViewer 
    v-if="pages.length > 0"
    :page="pages[activePage]"
    ></PageViewer>
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
    
    created() {
        this.getPages();
    },

    data() {
        return {
            activePage: 0,        
            pages: []
        };
    },

    methods: {
        async getPages() {
            let res = await fetch('pages.json');
            let data = await res.json();

            this.pages = data;
        }
    }
};
</script>