import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
});

const defaultBackground = createStyles({
  backgroundColor: base.frenchVanilla100,
  padding: system.space.x4,
});

const inverseBackground = createStyles({
  backgroundColor: base.blueberry400,
  padding: system.space.x4,
});

export function Basic() {
  return (
    <div className={containerStyles}>
      <div className={defaultBackground}>
        <CountBadge count={427} />
      </div>
      <div className={inverseBackground}>
        <CountBadge count={427} variant="inverse" />
      </div>
    </div>
  );
}
