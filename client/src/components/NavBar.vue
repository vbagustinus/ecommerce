<template>
  <div>
    <!-- NAVIGATION BAR -->
    <nav class="navbar warnaSendiri">
      <div class="navbar-brand">
        <div class="navbar-item" >
          <i class="fa fa-opencart fa-2x" aria-hidden="true"> </i>
            <strong> SmartShop</strong>
          <!-- <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"> -->
        </div>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <!-- ------------------------------------------- -->
          <div class="navbar-item has-dropdown is-hoverable is-mega">
            <div class="navbar-link">
              Categories
            </div>
            <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
              <div class="container is-fluid">
                <div class="columns">
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Men</h1>
                    <a class="navbar-item " href="#">
                      Clothes
                    </a>
                    <a class="navbar-item " href="#">
                      Pants
                    </a>
                    <a class="navbar-item " href="#">
                      Shoes
                    </a>
                    <a class="navbar-item " href="#">
                      Slippers
                    </a>
                    <a class="navbar-item " href="#">
                      Shirt
                    </a>
                    <a class="navbar-item " href="#">
                      Hats
                    </a>
                  </div>
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Woman</h1>
                    <a class="navbar-item " href="#">
                      Clothes
                    </a>
                    <a class="navbar-item " href="#">
                      Pants
                    </a>
                    <a class="navbar-item " href="#">
                      Shoes
                    </a>
                    <a class="navbar-item " href="#">
                      Slippers
                    </a>
                    <a class="navbar-item " href="#">
                      Shirt
                    </a>
                    <a class="navbar-item " href="#">
                      Hats
                    </a>
                  </div>
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Child</h1>
                    <a class="navbar-item " href="#">
                      Clothes
                    </a>
                    <a class="navbar-item " href="#">
                      Pants
                    </a>
                    <a class="navbar-item " href="#">
                      Shoes
                    </a>
                    <a class="navbar-item " href="#">
                      Slippers
                    </a>
                    <a class="navbar-item " href="#">
                      Shirt
                    </a>
                    <a class="navbar-item " href="#">
                      Hats
                    </a>
                  </div>
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Baby</h1>
                    <a class="navbar-item " href="#">
                      Pants
                    </a>
                    <a class="navbar-item " href="#">
                      Shoes
                    </a>
                    <a class="navbar-item " href="#">
                      Slippers
                    </a>
                    <a class="navbar-item " href="#">
                      Shirt
                    </a>
                    <a class="navbar-item " href="#">
                      Hats
                    </a>
                  </div>
                  <div class="column">
                    <h1 class="title is-6 is-mega-menu-title">Animal</h1>
                    <a class="navbar-item " href="#">
                      Pants
                    </a>
                    <a class="navbar-item " href="#">
                      Shoes
                    </a>
                    <a class="navbar-item " href="#">
                      Hats
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- _______________________________ -->
        </div>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="search something">
            </p>
            <p class="control">
              <a class="button is-warning">
                Search
              </a>
            </p>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-warning toggle-modal">
                  <span class="icon">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                  <span class="badge1" v-bind:data-badge="cart">Cart</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
      <!-- NAVIGATION BAR -->
    <nav class="navbar warnaSendiri">
      <div class="navbar-brand">
        <div class="navbar-item">
          <i class="fa fa-opencart fa-2x" aria-hidden="true"> </i>
          <strong> {{ name }} </strong>
          <!-- <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"> -->
        </div>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div v-if="name" id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-warning toggle-modal">
                  <span class="badge1" @click="out">Logout</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- ---------END NAV BAR -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
