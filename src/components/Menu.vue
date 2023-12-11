<template>
    <nav class="menu-container">
        <div class="menu-content">
            <div class="logo-container"><img class="logo-content" src="../media/logoYellowGold.svg"></div>
        </div>
        <div class="profile-picture-container">
        </div>
        <div class="circle"></div>
        <div class="profile-welcome-container">
            <p class="profile-welcome-content">Velkommen tilbage,</p>
        </div>
        <div class="profile-name-container">
            <p class="profile-name-content">Ziggy Stardust</p>
        </div>
        <div class="warnings-container">
            <p class="warnings-content">0</p>
            <p class="warnings-desc">Advarsler i dag</p>
        </div>
        <div class="menu-items-container">
            <div v-for="(page, index) in pages" class="menu-item" :key="index">
                <img class="page-icon" :class="{ activeIcon: activePage === index }" :src="require(`../media/${page.pageIcon}`)" alt="Page Icon">
                <a
                class="menu-item-link"
                :class="{ active: activePage === index }"
                :aria-current="page"
                :href="page.link.url"
                @click.prevent="menuLinkClick(index)"
                >{{ page.link.text }}</a>
            </div> 
        </div>
    </nav>
</template>

<script>
export default {
  props: ['pages', 'activePage', 'menuLinkClick']
};
</script>