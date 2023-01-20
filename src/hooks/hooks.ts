import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {TAppDispatch, TRootState} from "../bll/redux-store";

// export const useAppDispatch: () => TAppDispatch = useDispatch;

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
