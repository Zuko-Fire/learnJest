import axios from "axios";

export default class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    this.service.interceptors.response.use(
      (value) => value.data)
  }
  async getData(id) {
    const data = await this.service.get('todos/' + id);
    return data
  }
  async postData(data) {
    const data_1 = await this.service.post('todos', data);
    return data_1
  }
  async delete (id) { 
    const data = await this.service.delete('todos/' + id);
    return data
  }
}
