import { atom, selector } from "recoil";

export interface User {
  memberId: number | null;
  baekjoonHandle: string | null;
  imgUrl: string | null;
  nickname: string | null;
  roles: string[];
}

export const userState = atom<User>({
  key: "userState",
  default: {
    memberId: null,
    baekjoonHandle: "",
    imgUrl: null,
    nickname: "",
    roles: [],
  },
});

export const isAuth = selector({
  key: "isAuth",
  get: ({ get }) => {
    const { memberId } = get(userState);
    return { isLogin: !!memberId, id: memberId };
  },
});
