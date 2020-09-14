<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="nav-item" to="/">JAMSTACK</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav-item" to="/#store">STORE</g-link>
        <g-link class="nav-item" to="/blog">BLOG</g-link>
        <g-link class="nav-item" to="/contact">CONTACT</g-link>
        <g-link class="nav-item" to="/cart">🛒</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav-item {
  text-decoration: none;
  border-bottom: 4px solid transparent;
  font-weight: bold;
  color: #000;
  margin-left: 20px;
  transition: 0.5s;

  &:hover {
    border-bottom: 4px solid #0d47a1;
    transition: 0.5s;
  }
}

.nav {
  display: flex;
  align-items: center;
}
</style>
