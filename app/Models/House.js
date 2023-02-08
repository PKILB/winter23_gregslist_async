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
                alt="house">
                <div class="card-body">
                <div class="card-title fs-5">Built In: ${this.year}</div>
                <div class="py-2">Price: $${this.price}</div>
                <p>Levels: ${this.level ? this.level : "It's a BIG HOUSE"}</p>
                <div class="d-flex justify-content-between">
                <button class="btn ms-1 btn-danger" type="button" onclick="app.housesController.removeHouse('${this.id}')">Delete House!</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.housesController.drawForm('${this.id}')">Edit House!</button>
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

    static HouseForm(editable) {
        if(!editable.id) {
            editable = new House({
                bedrooms: 4,
                bathrooms: 6,
                year: 2010,
                levels: 2,
                imgUrl: '',
                price: 10000
            })
        }

        return `
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form ${editable.id ? `onsubmit="app.housesController.editHouse('${editable.id}')"` : 'onsubmit="app.housesController.createHouse()"'}>
        <div class="modal-body">
          <div class="mb-3">
            <label for="make" class="form-label">bedroom</label>
            <input required type="text" value="${editable.bedroom}" class="form-control" id="bedroom" placeholder="bedroom..." name="bedrooms">
          </div>
          <div class="mb-3">
            <label for="model" class="form-label">bathroom</label>
            <input required type="text" value="${editable.bathroom}" class="form-control" id="bathroom" placeholder="bathroom..." name="bathrooms">
          </div>
          <div class="mb-3">
            <label for="year" class="form-label">year</label>
            <input required type="number" value="${editable.year}" class="form-control" id="year" placeholder="year..." name="year">
          </div>
          <div class="mb-3">
            <label for="img" class="form-label">img</label>
            <input required type="text" value="${editable.img}" class="form-control" id="img" placeholder="img..." name="imgUrl">
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">price</label>
            <input required type="number" value="${editable.price}" class="form-control" id="price" placeholder="price..." name="price">
          </div>
          <div class="mb-3">
            <label for="level" class="form-label">level</label>
            <input required type="number" value="${editable.level}" class="form-control" id="level" placeholder="levels..." name="levels">
          </div>
        

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    `
  }

    }


