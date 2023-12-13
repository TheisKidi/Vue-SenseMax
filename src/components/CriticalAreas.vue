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
a {
    text-decoration: none;
}

h2.subtitle {
    color: #1D1A22;
    font-family: Poppins;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

h2.h2-ticket {
    width: 85%;
}

h3.subtitle-text {
    color: #77767A;
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.h3-ticket {
    text-align: right;
    width: 15%;
}

h4.h4-subtitle {
    color: #000;
    font-family: Poppins;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

h5.h5-text {
    color: #77767A;
    font-family: Poppins;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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