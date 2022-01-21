import { FC, useEffect } from 'react';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { N } from '../constants';
import Square from './components/Square';

const ClockLoader: FC = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(2 * Math.PI, {
        duration: 8000,
        easing: Easing.linear,
      }),
      -1,
    );
  }, []);
  return (
    <>
      {new Array(N).fill(0).map((_, index) => {
        return <Square key={index} {...{ index, progress }} />;
      })}
    </>
  );
};

export default ClockLoader;
