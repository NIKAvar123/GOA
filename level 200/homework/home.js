import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set) => ({
      // Theme
      theme: "light",

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      // Counter
      count: 0,

      increment: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      decrement: () =>
        set((state) => ({
          count: state.count - 1,
        })),

      reset: () =>
        set({
          count: 0,
        }),

      // User
      username: "",

      setUsername: (name) =>
        set({
          username: name,
        }),

      clearUsername: () =>
        set({
          username: "",
        }),

      // Favorites
      favorites: [],

      addFavorite: (item) =>
        set((state) => ({
          favorites: [...state.favorites, item],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (item) => item.id !== id
          ),
        })),

      // Language
      language: "ka",

      setLanguage: (language) =>
        set({
          language,
        }),

      // Notifications
      notificationsEnabled: true,

      toggleNotifications: () =>
        set((state) => ({
          notificationsEnabled:
            !state.notificationsEnabled,
        })),

      // Todos
      todos: [],

      addTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text,
            },
          ],
        })),

      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter(
            (todo) => todo.id !== id
          ),
        })),

      // Cart
      cart: [],

      addProduct: (product) =>
        set((state) => ({
          cart: [...state.cart, product],
        })),

      removeProduct: (id) =>
        set((state) => ({
          cart: state.cart.filter(
            (product) => product.id !== id
          ),
        })),

      clearCart: () =>
        set({
          cart: [],
        }),
    }),
    {
      name: "app-storage",
    }
  )
);