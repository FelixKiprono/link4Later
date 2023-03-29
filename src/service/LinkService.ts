

export class LinkService {
//test with local url
  async findAll() {
    fetch('http://localhost:3001/api/links').then(r => r.text()).then(result => {
      console.log(result)
    // Result now contains the response text, do what you want...
    })
    // return this.collection.find().toArray();
  }

}