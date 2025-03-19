import { fetchData } from "./fetchData"

test('fetchData', ()=> {
expect(fetchData()).resolves.toEqual({status: 200, data: {id: 1, name: 'test'}});
})