<template>
    <div class="critical-area-container">
        <div class="critical-title-container">
            <h2 class="subtitle h2-ticket">Kritiske områder</h2>
            <h3 class="subtitle-text h3-ticket">Vis alle</h3>
        </div>
        <a href="#">
            <div class="ticket-container">
                <div class="ticket-area-container">
                    <img class="ticket-area-icon">
                </div>
                <div class="ticket-content">
                    <h4 class="h4-subtitle">Udstillings trængsel</h4>
                    <h5 class="h5-text">Melchior Lock</h5>
                </div>
                <div class="arrow-container">
                    <img class="arrow-content" src="../media/arrowButton.png">
                </div>
            </div>
        </a>
    </div>
</template>

<style>
/* FONT STYLING */

h2.h2-ticket {
    width: 85%;
}

.h3-ticket {
    text-align: right;
    width: 15%;
}

/* CONTAINER STYLE */
.critical-title-container {
    display: flex;
    border-bottom: solid 1px #77767A;
    margin-bottom: 25px;
    padding-bottom: 5px;
}

.ticket-container {
display: flex;
}

/* CONTENT STYLE */
.ticket-content {
    width: 83%;
}

.arrow-content {
    height: 60%;
}

</style>