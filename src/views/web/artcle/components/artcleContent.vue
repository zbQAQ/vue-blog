<template>
  <div class="artcleContent" v-html="content"></div>
</template>

<script>
export default {
  props: ["content"]
};
</script>

<style scoped>
@import "../styles/markdown.css";
.artcleContent {
  font-family: "PingFang SC", "Lantinghei SC", "Microsoft Yahei",
    "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans;
  font: 300 1em/1.8 "PingFang SC", "Lantinghei SC", "Microsoft Yahei",
    "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans;
  font-size: 14px;
}

.artcleContent >>> h1,
.artcleContent >>> h2,
.artcleContent >>> h3,
.artcleContent >>> h4,
.artcleContent >>> h5,
.artcleContent >>> h6 {
  font-family: "TimesNewRomanPS-ItalicMT", "PingFang SC", "Lantinghei SC",
    "Microsoft Yahei", "Hiragino Sans GB", "Microsoft Sans Serif",
    "WenQuanYi Micro Hei", sans;
  /*font-family: "PingFang SC", "Lantinghei SC", "Microsoft Yahei", "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans;*/
  -webkit-font-smoothing: initial;
  font-weight: 100;
  color: #333;
  line-height: 1.35;
  font-variant-numeric: lining-nums;
  margin-bottom: 1em;
  margin-bottom: 1em;
  margin-top: 1.5em;
}
.artcleContent >>> h1,
.artcleContent >>> h2 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

.artcleContent >>> .hljs {
  background-color: transparent;
}
.artcleContent >>> blockquote {
  margin-left: 0;
}
.artcleContent >>> .hljs-center {
  text-align: center;
}
.artcleContent >>> pre,
.artcleContent >>> img {
  margin-top: 2em;
  margin-bottom: 2em;
}

.artcleContent >>> ul,
.artcleContent >>> ol {
  padding-left: 2em;
  list-style: upper-roman;
}
</style>
