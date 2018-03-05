<template>
  <section class="logo">
    <svg viewBox="0 0 230 150">
        <text font-size="50" class="logo__main">
          <tspan textLength="220" x="0" y="1em">ASHLEY</tspan>
          <tspan textLength="200" x="0" dy="1em">
            <tspan textLength="215">HEBLER</tspan>
            <tspan class="logo__sub" x="215">,</tspan>
            <tspan style="writing-mode: tb;" x="223" y="4.6em" font-size="13">INC</tspan>
          </tspan>
        </text>
        <text font-size="30" class="logo__sub">
          <tspan textLength="220" x="0" dy="4.5em"
            lengthAdjust="spacingAndGlyphs">PAPER COMPANY</tspan>
        </text>
      </svg>
  </section>
</template>

<style>
  .logo {
    background-color: #3a62f7;
    padding: 0 .3em;
  }
  .logo__main {
    font-family: 'Bowlby One', serif;
    font-weight: 900;
    fill: #fff;
  }
  .logo__sub {
    font-weight: 300;
    fill: #fff;
  }
</style>
