/**
 * Created by GreetingText on 2017/2/15.
 */
import Home from 'components/home/home.vue'
import Product from 'components/product/product.vue'
import My from 'components/my/my.vue'
import More from 'components/more/more.vue'

// 编写路由集合

const routes = [
  {
      name: 'Home',
      path: '/home',
      component: Home
  },
  {
    name: 'Product',
    path: '/product',
    component: Product
  },
  {
    name: 'My',
    path: '/my',
    component: My
  },
  {
    name: 'More',
    path: '/more',
    component: More
  }
]

// 导出路由集合

export default routes
