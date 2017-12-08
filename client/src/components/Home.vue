<template>
  <div class="columns">
    <div class="column is-9">
      <!-- HEADER -->
      <!-- Flickity HTML init -->
      <!-- <section class="hero is-info is-large">
            <div class="carousel" data-flickity='{ "autoPlay": true }'>
              <div class="carousel-cell">
                <img src="https://static.pexels.com/photos/581339/pexels-photo-581339.jpeg" alt="orange tree" />
              </div>
              <div class="carousel-cell">
                <img src="https://static.pexels.com/photos/1702/bow-tie-businessman-fashion-man.jpg" alt="One World Trade" />
              </div>
              <div class="carousel-cell">
                <img src="https://static.pexels.com/photos/581087/pexels-photo-581087.jpeg" alt="drizzle" />
              </div>
              <div class="carousel-cell">
                <img src="https://static.pexels.com/photos/297933/pexels-photo-297933.jpeg" alt="cat nose" />
              </div>
              <div class="carousel-cell">
                <img src="https://static.pexels.com/photos/9379/drinking-alley-fun-bowling-9379.jpg" alt="contrail" />
              </div>
              <div class="carousel-cell">
                <img src="https://static.pexels.com/photos/267202/pexels-photo-267202.jpeg" alt="golden hour" />
              </div>
            </div>
      </section> -->
      <!-- MAIN CONTENT
        List Categories
        List Item
        Shopping Cart
        Checkout -->
      <section class="section">
        <div class="container">
          <!-- Featured Products -->
            <div class="row">
              <!-- Product 1 -->
                <div class="wadah col-xs-8 col-sm-4 col-md-2 col-md-1 flex-item" v-for="product in products" :key="product._id">
                  <a>
                    <img class="image" v-bind:src="product.picture" alt="">
                    <hr/>
                    <h3 class="subtitle">{{ product.products_name }}</h3>
                    <p class="subtitle">
                      <i class="fa fa-money" aria-hidden="true"></i> Rp {{ product.prices }}
                    </p>
                    <p class="title">
                      <a v-on:click.prevent="addCart(product)" class="button is-white">
                        <span class="icon">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </span>
                        <br/>
                        <span class="text-is-white">Add to Cart</span>
                      </a>
                    </p>
                    <div class="down">
                      <i class="fa fa-question-circle dropbtn" aria-hidden="true"></i>
                      <div class="dropdown-details">
                        {{ product.details }}
                      </div>
                    </div>
                  </a>
                </div>
            <!-- /.container -->
            <!-- MODAL -->
              <div class="modal" id="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">List Carts</p>
                    <button class="delete toggle-modal"></button>
                  </header>
                  <section class="modal-card-body">

                    <!-- v-for="transaction in transactions"  -->
                    <div v-if="transactions.length !== 0">
                        <table class="table">
                          <thead>
                            <tr>
                              <td>No</td>
                              <th>Jumlah</th>
                              <th>Gambar</th>
                              <th>Barang</th>
                              <th>Harga</th>
                              <th>Hapus</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(transaction, i) in transactions" :key="i">
                              <td>{{ i + 1 }}</td>
                              <td>{{ transaction.amount }}</td>
                              <td><img class="small" v-bind:src="transaction.picture" alt="product"></td>
                              <th>{{ transaction.products_name }}</th>
                              <td>{{ transaction.amount * transaction.prices }}</td>
                              <td><i v-on:click.prevent="removeItem(transaction._id)" class="fa fa-trash-o" aria-hidden="true"></i></td>
                            </tr>
                          </tbody>
                          </table>
                          <div class="level-right">
                            <p class="level-item title">Total : {{ total }}</p>
                          </div>
                    </div>

                    <div v-else>
                      <p class="subtitle" href="">No transactions</p>
                    </div>
                    <!-- Content ... -->

                  </section>
                  <footer class="modal-card-foot">
                    <a v-if="transactions.length !== 0" v-on:click="makePayment" class="toggle-modal button is-warning ">Payment</a>
                    <a class="button toggle-modal">Cancel</a>
                  </footer>
                </div>
              </div>
            <!-- MODAL -->
          </div>
        </div>
      </section>
      </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      cart: 0,
      total: 0,
      transactions: []
    }
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  methods: {
    ...mapActions([
      'allProducts'
    ]),
    makePayment () {
      // $('modal').classList.toggle('is-active')
      // toggleClass()
      // // console.log('INI PAYMENT',this.transactions)
      // let ObjId = []
      // this.transactions.map(transaction => {
      //   ObjId.push(transaction._id)
      // })
      // console.log('INI TRANSAKSI ID', ObjId)
      // // axios.post('http://api.smartshopp.ga/transactions',{
      //   axios.post('http://api.smartshopp.ga/transactions',{
      //   id: ObjId,
      //   total: this.total
      // })
      // .then(response => {
      //   this.transactions = []
      //   this.cart = 0
      //   console.log('SUKSES nggGA YA',response)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    },
    addCart (product) {
      console.log('KWESINI')
      this.cart += 1
      // console.log('INI PRODUCT',product)
      console.log(product._id)
      // this.transactions.push(product)
      if (this.transactions === 0) {
        product.amount = 1
        this.total += product.prices
        this.transactions.push(product)
      } else {
        this.transactions.forEach(trans => {
          // console.log(trans._id !== product._id )
          if (trans._id !== product._id) {
            if (!product.amount) {
              product.amount = 1
              this.total += product.prices
              this.transactions.push(product)
            }
            // product.amount = 1
          }
          if (trans._id === product._id) {
            trans.amount++
            this.total += product.prices
          }
        })
      }
    },
    removeItem (id) {
    //   this.transactions.map((trans, i) => {
    //     if(trans._id == id){
    //       this.transactions.splice(i, 1)
    //       this.total -= trans.prices * trans.amount
    //       this.cart -= trans.amount
    //     }
    //   })
    }
  },
  created () {
    this.allProducts()
  }
}
</script>

<style>

</style>
