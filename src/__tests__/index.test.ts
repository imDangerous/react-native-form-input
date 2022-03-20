import { addOne } from '../components/counter';

test('addOne', () => {
  expect(addOne(0)).toEqual(1);
});
