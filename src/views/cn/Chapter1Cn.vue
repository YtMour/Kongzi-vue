<template>
    <div class="chapter-page">

      <main class="main-content">
        <section class="content">
          <h2>第一章 孔子生平与孔子思想</h2>
          <p>
            孔子（BC551-BC479），中国历史上伟大的思想家、教育家、政治家，
            他的思想对中国乃至世界的影响深远，特别是在伦理道德和社会秩序方面。
          </p>
          <p>
            孔子提出的“仁”“礼”“中庸”等思想，至今仍对我们的生活产生深刻影响。
          </p>
        </section>
        <button class="next-button" @click="goToDetail">下一页: 孔子详情</button>
      </main>
      <footer class="footer">
        <p>© 2024 孔子文化展览. 保留所有权利.</p>
      </footer>
    </div>
  </template>
  <script>
  export default {
    methods: {
      goToDetail() {
        this.$router.push('/cn/detail'); // 跳转到详情页
      },
    },
  };
  </script>
  <style scoped>
  .chapter-page {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  .content {
    padding: 40px 20px;
  }
  .next-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }
  .footer {
    margin-top: 40px;
    padding: 10px 0;
    background-color: #f8f9fa;
  }
  </style>