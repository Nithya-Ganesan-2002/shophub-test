/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Mock Firebase
const mockAuth = {
  onAuthStateChanged: jest.fn(),
  signOut: jest.fn().mockResolvedValue(true),
  currentUser: null
};

const mockFirestore = {
  doc: jest.fn().mockReturnThis(),
  collection: jest.fn().mockReturnThis(),
  onSnapshot: jest.fn(),
  delete: jest.fn().mockResolvedValue(true)
};

global.firebase = {
  auth: () => mockAuth,
};

global.db = mockFirestore;

// Mock Materialize toast
global.M = {
  toast: jest.fn(),
  Modal: {
    getInstance: jest.fn().mockReturnValue({
      close: jest.fn()
    })
  }
};

describe('Cart Counter Functionality', () => {
  let document;
  
  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    
    // Set up DOM
    document.body.innerHTML = `
      <div class="cart-counter">0</div>
      <div class="cartWrapper"></div>
      <div class="hide-cart"></div>
      <div class="show-cart"></div>
      <div class="total-price-count">0</div>
    `;
  });

  describe('Adding items to cart', () => {
    test('should increment counter when item is added to cart', () => {
      // Mock cart data with one item
      const mockCartData = [
        {
          data: () => ({
            name: 'Test Item',
            price: 100,
            image: 'test.jpg'
          })
        }
      ];

      // Call fetchCart with mock data
      fetchCart(mockCartData);

      // Check if counter was updated
      expect(document.querySelector('.cart-counter').textContent).toBe('1');
    });

    test('should update cart display when items are added', () => {
      const mockCartData = [
        {
          data: () => ({
            name: 'Test Item',
            price: 100,
            image: 'test.jpg'
          })
        }
      ];

      fetchCart(mockCartData);

      // Verify cart display is updated
      expect(document.querySelector('.show-cart').style.display).toBe('block');
      expect(document.querySelector('.hide-cart').style.display).toBe('none');
      expect(document.querySelector('.cartWrapper').innerHTML).toContain('Test Item');
    });
  });

  describe('Removing items from cart', () => {
    test('should decrement counter when item is removed', () => {
      // Mock current user
      mockAuth.currentUser = { email: 'test@test.com' };

      // Set up initial cart state
      const mockCartData = [
        {
          data: () => ({
            name: 'Test Item',
            price: 100,
            image: 'test.jpg'
          })
        }
      ];

      fetchCart(mockCartData);

      // Remove item
      removeItem('Test Item', 'test@test.com', 100);

      // Verify counter was updated through a new fetch
      const updatedMockData = [];
      fetchCart(updatedMockData);
      expect(document.querySelector('.cart-counter').textContent).toBe('0');
    });
  });

  describe('Page refresh persistence', () => {
    test('should maintain cart count after auth state change', () => {
      // Simulate page load with authenticated user
      const mockUser = { email: 'test@test.com' };
      const mockCartData = [
        {
          data: () => ({
            name: 'Test Item',
            price: 100,
            image: 'test.jpg'
          })
        }
      ];

      // Trigger auth state change
      const authCallback = mockAuth.onAuthStateChanged.mock.calls[0][0];
      authCallback(mockUser);

      // Simulate cart data fetch
      const snapshotCallback = mockFirestore.onSnapshot.mock.calls[0][0];
      snapshotCallback({ docs: mockCartData });

      // Verify cart counter persists
      expect(document.querySelector('.cart-counter').textContent).toBe('1');
    });
  });

  describe('Login/logout behavior', () => {
    test('should reset cart counter on logout', () => {
      // Set up initial cart state
      const mockCartData = [
        {
          data: () => ({
            name: 'Test Item',
            price: 100,
            image: 'test.jpg'
          })
        }
      ];

      fetchCart(mockCartData);

      // Simulate logout
      const logoutButton = document.createElement('button');
      logoutButton.id = 'logout';
      document.body.appendChild(logoutButton);

      // Trigger logout click
      logoutButton.click();

      // Verify cart is reset
      expect(mockAuth.signOut).toHaveBeenCalled();
      // After logout, a new fetch with empty data would occur
      fetchCart([]);
      expect(document.querySelector('.cart-counter').textContent).toBe('0');
    });

    test('should show correct cart count on login', () => {
      // Simulate login
      const mockUser = { email: 'test@test.com' };
      const mockCartData = [
        {
          data: () => ({
            name: 'Test Item',
            price: 100,
            image: 'test.jpg'
          })
        }
      ];

      // Trigger auth state change for login
      const authCallback = mockAuth.onAuthStateChanged.mock.calls[0][0];
      authCallback(mockUser);

      // Simulate cart data fetch after login
      const snapshotCallback = mockFirestore.onSnapshot.mock.calls[0][0];
      snapshotCallback({ docs: mockCartData });

      // Verify cart counter shows correct count
      expect(document.querySelector('.cart-counter').textContent).toBe('1');
    });
  });

  describe('Empty cart state', () => {
    test('should show empty cart message when cart is empty', () => {
      // Call fetchCart with empty data
      fetchCart([]);

      // Verify empty cart state
      expect(document.querySelector('.hide-cart').style.display).toBe('block');
      expect(document.querySelector('.show-cart').style.display).toBe('none');
      expect(document.querySelector('.cart-counter').textContent).toBe('0');
    });
  });
});