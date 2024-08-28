import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


export const pages = reactive({
  pages: [
    `pawserver.it.itba.edu.ar/paw-2024a-01`,
    `pawserver.it.itba.edu.ar/paw-2024a-02`,
    `http://pawserver.it.itba.edu.ar/paw-2024a-03`,
    `http://pawserver.it.itba.edu.ar/paw-2024a-04`,
    `http://pawserver.it.itba.edu.ar/paw-2024a-05`,
    `http://pawserver.it.itba.edu.ar/paw-2024a-06`,
    `http://pawserver.it.itba.edu.ar/paw-2024a-07`,
    `http://pawserver.it.itba.edu.ar/paw-2024a-08`,
    `http://pawserver.it.itba.edu.ar/paw-2024a-09`,
  ],

  currentPage: 0,

  getCurrentPage(){
    return this.pages[this.currentPage]
  },
  
  increment(){
    this.currentPage++
    if(this.currentPage == 9)
      this.currentPage = 0;
  }
})

export const styles = reactive({
  style: [
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``
  ],
  
  newStyles(stylesAux: string[]) {
    this.style = stylesAux
  }
})

