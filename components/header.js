class PageHeader extends HTMLElement {
  constructor() {
      super();
  }
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  renderRoutes(){
    const routes = ["order", "ingredient", "beverage", "size",];
    return routes.reduce((acc, route)=> acc + 
    `<li class="nav-item">
      <a class="nav-link" href="/app/${route}/${route}s.html">${this.capitalize(route)}s</a>
    </li>`  ,"");
  }
  connectedCallback() {
      this.innerHTML = `
          <header class="header-section container-fluid">
          <nav class="navbar navbar-expand navbar-dark bg-dark">
              <a class="navbar-brand" href="/">
              <img src="/images/image4.png" width="50" height="50" class="d-inline-block align-top" alt="" />
              L'ultima Cena
              </a>
              <ul class="navbar-nav mr-auto"></ul>
              <ul class="navbar-nav">
              <!-- LINKS -->

              <li class="nav-item">
                  <a class="nav-link" href="/">Build Your Pizza!</a>
              </li>
              ${this.renderRoutes()}
          </nav>
          </header>
      `;
  }
}

customElements.define('page-header', PageHeader);