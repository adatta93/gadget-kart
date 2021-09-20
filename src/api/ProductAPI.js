export default class ProductAPI {
  //static URL = "http://localhost:4000";
  static URL = "https://gadget-kart-server.herokuapp.com";

  static GetAllProducts() {
    return fetch(`${this.URL}/products`).then((response) => response.json());
  }

  static GetProduct(id) {
    return fetch(`${this.URL}/products/${id}`).then((response) =>
      response.json()
    );
  }

  static GetProductByCategory(category) {
    return fetch(
      `${this.URL}/products/?category=${category}`
    ).then((response) => response.json());
  }

  static AddProduct(data) {
    return fetch(`${this.URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  static EditProduct(id, data) {
    return fetch(`${this.URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  static DeleteProduct(id) {
    return fetch(`${this.URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  static GetTopViewedProductsPerUser(userId) {
    return fetch(`${this.URL}/top_products?userId=${userId}`).then((response) =>
      response.json()
    );
  }

  static AddUpdateTopViewedProduct(product, userId) {
    this.GetTopViewedProductsPerUser(userId).then((allTopProducts) => {
      console.log(allTopProducts);
      let foundProduct = allTopProducts.find(
        (d) => d.productId === product.id && d.userId === userId
      );
      if (foundProduct) {
        foundProduct.view_count += 1;
        foundProduct.userId = userId;
        return fetch(`${this.URL}/top_products/${foundProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(foundProduct),
        }).then((response) => response.json());
      } else {
        let viewed_data = {
          name: product.title,
          productId: product.id,
          view_count: 1,
          userId: userId,
        };
        return fetch(`${this.URL}/top_products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(viewed_data),
        }).then((response) => response.json());
      }
    });
  }
}
