import {includes} from './includes';

describe('includes', () => {
  test('should return true if array includes exect value', () => {
    expect(includes(['a', 'b', 'c'], 'a')).toBe(
      true
    );
  });

  test('should return true if array includes stringify number value', () => {
    expect(includes(['1', 'b', 'c'], 1)).toBe(
      true
    );
  });

  test('should return false if array does not include string value', () => {
    expect(includes(['a', 'b', 'c'], 'z')).toBe(
      false
    );
    expect(includes(['a', 'b', 'c'], 'az')).toBe(
      false
    );
    expect(includes(['a', 'b', 'c'], 'za')).toBe(
      false
    );
  });

  test('should return false if array does not include number value', () => {
    expect(includes(['11', 'b', 'c'], 1)).toBe(
      false
    );
    expect(includes(['1', 'b', 'c'], 11)).toBe(
      false
    );
  });
});
