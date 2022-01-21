import { FC } from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { N, SQUARE_SIZE } from '../../constants';

type Props = {
  index: number;
  progress: Animated.SharedValue<number>;
};

const Square: FC<Props> = ({ index, progress }) => {
  const offsetAngle = (2 * Math.PI) / N;
  const finalAngle = offsetAngle * (N - 1 - index);

  const rotate = useDerivedValue(() => {
    if (progress.value <= 2 * Math.PI)
      return Math.min(finalAngle, progress.value);
    if (progress.value - 2 * Math.PI < finalAngle) return finalAngle;
    return progress.value;
  }, []);

  const translateY = useDerivedValue(() => {
    if (rotate.value === finalAngle) return withSpring(-N * SQUARE_SIZE);
    if (progress.value > 2 * Math.PI)
      return withTiming((index - N) * SQUARE_SIZE);
    return withSpring(-index * SQUARE_SIZE);
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotate.value}rad` },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'white',
          height: SQUARE_SIZE,
          aspectRatio: 1,
          // opacity: (index + 1) / N,
          position: 'absolute',
        },
        rStyle,
      ]}
    />
  );
};

export default Square;
