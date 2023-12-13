<template>
    <div class="menu-content-container">
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
    </div>
</template>

<script>
export default {
  props: ['pages', 'activePage', 'menuLinkClick']
};
</script>

<style>


/* CONTAINERS */

.menu-content-container {
    max-width: 350px;
    min-width: 300px;
    height: 98vh;
    text-align: center;
    border-radius: 25px;
    box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.10);
    margin: 15px auto 15px 15px;
    position: absolute;
    top: 0;
    background-color: #FFF;
}

.logo-container {
    padding-top: 55px;
}

.warnings-container {
    padding-top: 2vh;
}

.menu-items-container {
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
}

/* CONTENT */
.logo-content {
    height: 40px;
}

.menu-item {
    display: flex;
    align-items: center;
    margin: 2vh auto;
}
  
/* FONTS */
p.profile-welcome-content {
    color: #77767A;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

p.profile-name-content {
    color: #1D1A22;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

p.warnings-content {
    color: #1D1A22;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

p.warnings-desc {
    color: #77767A;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

a.menu-item-link {
    text-decoration: none;
    color: #77767A;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    margin-left: 20px;
}

.menu-item-link.active {
    color:#1D1A22;
}

/* MEDIA */
img.page-icon {
    height: 35px;
}

.circle {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    background-image: url('https://i0.wp.com/lacarteleramx.com/wp-content/uploads/2022/08/1a57b7e3-david-bowie-estrella-paseo-de-la-fama-musica-londres-lacarteleramx.jpg?resize=750%2C450&ssl=1');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 3vh auto 2vh auto;
}

</style>