import healthIndicator from '../app';

test.each([
    [{ name: 'char1', health: 90 }, 'healthy'],
    [{ name: 'char2', health: 45 }, 'wounded'],
    [{ name: 'char3', health: 5 }, 'critical'],
])('testing health status for %p', (object, expected) => {
    const result = healthIndicator(object);
    expect(result).toBe(expected);
});
