<template>
  <div class="top-gap shadow-box-container">
    <div class="warning-box-content">
      <div class="warning-box-content-top">
        <img src="../../media/warningIconVector.svg" />
        <h3 class="subtitle-text">
          Antal advarsler i dag
        </h3>
      </div>
      <div class="warning-box-content-mid">
        <p>{{ tickets.length }} advarsler</p>
      </div>
      <div class="warning-box-content-bot">
        <p>Se tidligere advarsler</p>
        <img src="../../media/arrowRightVector 1.svg" />
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

.warning-box-content-mid{
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 3rem;
  padding-top: 30px;
  color: #1d1a22;
  font-weight: 400;
}

.warning-box-content-bot{
  font-size: 1.18rem;
  color: #77767a;
  font-weight: 500;
  margin-top: 70px;
}

</style>

<script>
export default {
  props: {
    tickets: Array
  }
}

</script>