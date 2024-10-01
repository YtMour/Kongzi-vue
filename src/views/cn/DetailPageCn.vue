<template>
    <div class="detail-page">

      <main class="main-content">
        <section class="content">
          <h2>孔子简介</h2>
          <p>
            孔子（BC551-BC479），中国古代伟大的思想家和教育家。他的思想形成了中国传统文化的核心，
            对后世影响深远。孔子提倡仁爱、礼仪和道德，强调家庭和社会的和谐。
          </p>
          <img src="../assets/confucius_image.png" alt="孔子" class="confucius-image" />
        </section>
      </main>
      <footer class="footer">
        <p>© 2024 孔子文化展览. 保留所有权利.</p>
      </footer>
    </div>
  </template>
  <script>
  export default {};
  </script>
  <style scoped>
  .detail-page {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  .content {
    padding: 40px 20px;
  }
  .confucius-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-top: 20px;
  }
  .footer {
    margin-top: 40px;
    padding: 10px 0;
    background-color: #f8f9fa;
  }
  </style>