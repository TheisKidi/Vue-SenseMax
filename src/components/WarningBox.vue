<template>
  <div class="top-gap shadow-box-container">
    <div class="warning-box-content">
      <div class="warning-box-content-top">
        <img src="../media/warningIconVector.svg" />
        <h3 class="subtitle-text">Antal advarsler i dag</h3>
      </div>
      <div class="warning-box-content-mid">
        <p> advarsler</p>
      </div>
      <div class="warning-box-content-bot">
        <p>Se tidligere advarsler</p>
        <img src="../media/amountIconVector.svg" />
      </div>
    </div>
  </div>
</template>

<style>
/*Container*/

.top-gap {
  margin-top: 25px;
}

.shadow-box-container {
  padding: 20px;
  width: auto;
  height: auto;
  border-radius: 1.5rem;
  background: #FFF;
  box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.10);
}

.shadow-box-container img {
  width: 30px;
  height: 30px;
}

.warning-box-content-top{
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
}

</style>