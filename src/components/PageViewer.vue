<template>
    <div class="banner-container">
    </div>
    <div class="pag-container">
        <div class="page-title-container">
            <h1 class="page-title">{{ page.pageTitle }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: ['page']
}
</script>