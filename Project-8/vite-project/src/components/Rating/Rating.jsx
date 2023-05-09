import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating() {
  return (
    <div>
    <Stack spacing={1} >
      <Rating name="half-rating" defaultValue={0.1} precision={0.5} />
    </Stack>

    </div>
  );
}