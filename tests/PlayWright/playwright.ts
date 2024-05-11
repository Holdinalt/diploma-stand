import { test as base } from '@playwright/experimental-ct-react';

export const test = base.extend<{ 'global-hook': void }>({
    'global-hook': [
        async ({},use, testinfo) => {
            testinfo.snapshotSuffix = ''
            await use();
        },
        {auto: true}
    ]
});
export { expect } from '@playwright/experimental-ct-react';
