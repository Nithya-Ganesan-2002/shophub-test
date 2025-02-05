// Set up DOM environment
document.body.innerHTML = `
  <div class="cart-counter">0</div>
  <div class="cartWrapper"></div>
  <div class="hide-cart"></div>
  <div class="show-cart"></div>
  <div class="total-price-count">0</div>
  <button id="logout">Logout</button>
`;

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

// Mock window.location
delete window.location;
window.location = { reload: jest.fn() };