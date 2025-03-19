import fetchJsonPlaceholder from "./fetchJsonPlaceholder"

const testData = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
test('realFetch', async ()=> {
  const data = await fetchJsonPlaceholder();

  expect(data).toEqual(testData);
})