import { fetchData } from "./fetchData"

test('fetchData', async ()=> {
  
expect(fetchData()).resolves.toEqual({status: 200, data: {id: 1, name: 'test'}});
expect(fetchData()).resolves.not.toEqual({status: 400, data: {id: 1, name: 'test'}});
})