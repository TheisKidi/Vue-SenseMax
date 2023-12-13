<template>
    <PageViewer v-if="pages.length > 0" :page="pages[activePage]" :tickets="tickets"></PageViewer>
    <Menu :pages="pages" :active-page="activePage" :menu-link-click="(index) => activePage = index"></Menu>
</template>

<script>
import PageViewer from './components/PageViewer.vue';
import Menu from './components/Menu.vue';

const URL = 'https://sensemaxrest.azurewebsites.net/api/'

export default {
    components: {
        PageViewer,
        Menu
    },

    created() {
        this.getPages();
        this.GetAllTickets();
    },

    data() {
        return {
            activePage: 0,
            pages: [],
            tickets: [],
        };
    },

    methods: {
        async getPages() {
            let res = await fetch('pages.json');
            let data = await res.json();

            this.pages = data;
        },
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url);
                this.tickets = await response.data;
            }
            catch (error) {
                alert(error.message)
            }
        },
        async GetAllTickets() {
            this.helperGetAndShow(URL + "ticket");
            console.log(this.tickets)
        },
    }
};
</script>