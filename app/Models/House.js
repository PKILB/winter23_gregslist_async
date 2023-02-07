export class House {
    constructor (data) {
        this.id = data.id
        this.bedroom = data.bedrooms
        this.bathroom = data.bathrooms
        this.level = data.levels
        this.img = data.imgUrl
        this.year = data.year
        this.price = data.price
    }

    get HouseCard() {
        return /*html*/`
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${this.img}" class="card-img-top car-img"
                alt="car">
                <div class="card-body">
                <div class="card-title fs-5">Built In: ${this.year}</div>
                <div class="py-2">Price: $${this.price}</div>
                <p>Levels: ${this.level ? this.level : "It's a BIG HOUSE"}</p>
                <div class="d-flex justify-content-between">
                <button class="btn ms-1 btn-danger" type="button" onclick="app.carsController.removeCar('${this.id}')">Delete Car!</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.carsController.drawForm('${this.id}')">Edit Car!</button>
                </div>
          </div>
      </div>
    </div>
        `
    }

    static FormButton() {
        return /*html*/ `
        <button onclick="app.housesController.drawForm()" class="btn btn-success ms-3 mb-2" data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        <i class="mdi mdi-plus"></i>
      </button>
        `
    }


}