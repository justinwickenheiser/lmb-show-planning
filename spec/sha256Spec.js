const sha256 = require('../src/js/Sha256.js');

describe("SHA256", function() {
	it ("should hash 'abc' correctly", function() {
		expect(sha256.hash('abc')).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
	});

	it ("should hash 'password' to not be the same as the 'abc' hash", function () {
		expect(sha256.hash('password')).not.toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
	});

	it ("should hash the 'password' the same every time", function () {
		expect(sha256.hash('password')).toBe(sha256.hash('password'));
	});
});