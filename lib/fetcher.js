// =============================================================================
// Copyright © 2024 Luke Pierce. All rights reserved.
// =============================================================================

export default async (...args) => {
  const res = await fetch(...args);

  return res.json();
};
