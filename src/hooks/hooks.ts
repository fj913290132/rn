import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import type {RootState, AppDispatch} from '../store';
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const AppShallowEqual = shallowEqual;
