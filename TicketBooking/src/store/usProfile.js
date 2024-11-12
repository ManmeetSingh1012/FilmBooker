import { create } from "zustand";

const profile = (set, get) => ({
  profile: null,
  
  setProfile: (profile) => {
    set(() => ({
      profile: profile,
    }));
  },
  
  getProfile: () => {
    return get().profile;
  },
  
  reset: () => {
    set(() => ({
      profile: null,
    }));
  }
}); // Remove extra comma and empty object

const useProfile = create(profile);

export default useProfile;