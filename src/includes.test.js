import {includes} from './includes';

describe('includes', () => {
  test('should return true if array includes exact value', () => {
    expect(includes(['a', 'b', 'c'], 'a')).toBe(
      true
    );
  });
});
