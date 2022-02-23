import React, {
  Profiler,
  ProfilerOnRenderCallback,
  PropsWithChildren,
} from 'react';
import { View } from 'react-native';

import performance from 'react-native-performance';
import StatusComponent from './StatusComponent';
// this function measures the render durations of a component --- > used in profiler
const traceRender: ProfilerOnRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed  ---> componet referance name
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  return performance.measure(id, {
    start: performance.timeOrigin + startTime,
    duration: actualDuration,
  });
};

export type ProfilerProps = {
  id: string;
};

const ProfilerComponent = ({
  id,
  children,
}: PropsWithChildren<ProfilerProps>) => {
  return (
    <View>
      <StatusComponent />
      <Profiler id={id} onRender={traceRender}>
        {children}
      </Profiler>
    </View>
  );
};

export default ProfilerComponent;
