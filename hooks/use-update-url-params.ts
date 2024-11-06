'use client';

import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useUpdateUrlParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateUrlParams = useCallback(
    (param: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set(param, value);
      } else {
        params.delete(param);
      }

      router.replace(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  return updateUrlParams;
}
