import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'] 
})
export class AddToCartComponent {
  isAddedToCart = false;
  quantity = 1;

  addToCart() {
    this.isAddedToCart = true;
  }

  decreaseProductItem() {
    if (this.quantity <= 1) {
      this.isAddedToCart = false;
    }
    this.quantity = Math.max(1, this.quantity - 1);
  }

  increaseProductItem() {
    this.quantity++;
  }
}
