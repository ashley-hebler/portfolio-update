<template>
  <section class="container-outer">
    <div class="container">
      <div class="title">
        This is not a page, but please enjoy this Office reference.
      </div>
      <nuxt-link to="/" class="error-btn">Go to main site</nuxt-link>
      <div class="logo">
        <logo/>
      </div>
      <div class="worker">
        <worker/>
      </div>
      <div class="subtitle">
        Coming <span class="letters"><span>C</span><span>h</span><span>r</span><span>i</span><span>s</span><span>t</span><span>m</span><span>a</span><span>s</span> <span> 2</span><span>0</span><span>0</span><span>2</span><span>!</span></span>
      </div>
      <p class="disclaimer">Disclaimer: <a title="The Office Dunder Mifflin Website fail" target="_blank" href="http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/17077143_639042532887207_3997798483019956224_n.jpg">Ashley Hebler Paper Company is not a real thing</a>, but Ashley Hebler, the web developer is. She can build a website better than this one.<br> To contact her send an email to <strong>ash.heb.dev@gmail.com</strong></p>
    </div>
  </section>
</template>

<script>
import Worker from '~/components/Worker.vue'
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Worker,
    Logo
  },
  layout: 'blank-layout'
}
</script>

<style scoped>
  .container-outer {
    text-align: center;
    background-color: #99e1fd;
    padding: 1em 1em 3em;
  }
  .error-btn {
    background: #3a62f7;
    padding: 1em;
    margin: 1em auto;
    font-weight: bold;
    color: #fff;
    display: inline-block;
  }
  .container {
    max-width: 30em;
    margin: 0 auto;
  }
  .worker,
  .logo {
    max-width: 100px;
    margin: 1em auto;
  }
  .logo {
    max-width: 300px;
  }
  .title,
  .subtitle {
    font-size: 2em;
    font-weight: 700;
    margin: 1em 0;
  }
  .title {
    margin-top: 0;
  }
  .disclaimer {
    font-family: 'Lato';
    background-color: #fff;
    color: #3a62f7;
    padding: 1em;
    border: 3px solid #3a62f7;
  }
  .disclaimer a,
  .disclaimer a:visited {
    color: #3a62f7;
  }
  .letters {
    color: green;
  }
  .letters span:nth-child(even) {
    color: red;
  }
</style>
