import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={345} height={193} />
      <Skeleton variant="text" width={313} height={32} />
      <Skeleton variant="rectangular" width={345} height={155} />
    </Stack>
  );
}