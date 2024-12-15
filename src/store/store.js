import { create } from 'zustand'

export const useUserStore = create((set) => ({

  Username: "",
  SetUsername: (newUsername) => set({Username:newUsername}),
  Email: "",
  SetEmail: (newEmail) => set({ Email:newEmail }),
  UserId: "",
  SetUserId: (newId) => set({ UserId:newId }),
  Role: "",
  SetRole: (role) => set({ Role:role }),

  IsLogin: false,
  SetIsLogin: (newIsLogin) => set({ IsLogin: newIsLogin }),
 



}))