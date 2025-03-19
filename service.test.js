import Service from "./service"

const testData = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

const createData = {
  "userId": 1,
  "id": 201,
  "title": "delectus aut autem",
  "completed": false
}
const service = new Service()
describe('Service', () => {
  beforeAll(async () => {
    await service.delete(testData.id);
    console.log('delete');
  })

test('getData', async() => {
  const data = await service.getData(testData.id);
  expect(data).toEqual(testData);
})
test('createData', async() => {
  const data = await service.postData(createData);
  expect(data).toEqual(createData);
})
})