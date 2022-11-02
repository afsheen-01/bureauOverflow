import create from "zustand";

type GlobalState = {
  name: string;
  password: string;
};
const useGlobalState = create<GlobalState>((set) => ({
  name: "",
  setName: (name?: string) => set(() => ({ name })),
  password: "",
  setPassword: (password?: string) => set(() => ({ password })),
  resetGlobalState: () =>
    set(() => ({
      name: "",
      password: "",
    })),
}));

export default useGlobalState;
