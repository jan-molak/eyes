import { describe, it } from 'vitest'

import * as EyesSdk from '@applitools/eyes'
import * as EyesPlaywrightSdk from '@applitools/eyes-playwright'
import * as EyesWebdriverIOSdk from '@applitools/eyes-webdriverio'
import { wrapper } from './wrapper';

describe('Eyes', () => {

    describe('base SDK', () => {

        const eyesRunnerConfig: EyesSdk.RunnerOptionsPlain = {
        }

        const eyesConfig: EyesSdk.ConfigurationPlain = {
            isDisabled: true,
        }

        it('works', async () => {
            const runner = new EyesSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesSdk.Eyes(runner, eyesConfig)

            await eyes.open({ })
        })

        it('can be wrapped', async () => {
            const runner = new EyesSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesSdk.Eyes(runner, eyesConfig)

            await wrapper(eyes, eyesConfig);
        })
    });

    describe('Playwright SDK', () => {

        const eyesRunnerConfig: EyesPlaywrightSdk.RunnerOptionsPlain = {
        }

        const eyesConfig: EyesPlaywrightSdk.ConfigurationPlain = {
            isDisabled: true,
        }

        it('works', async () => {
            const runner = new EyesPlaywrightSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesPlaywrightSdk.Eyes(runner, eyesConfig)

            await eyes.open({ })
        })

        it('can be wrapped', async () => {
            const runner = new EyesPlaywrightSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesPlaywrightSdk.Eyes(runner, eyesConfig)

            await wrapper(eyes, eyesConfig);
        })
    });

    describe('WebdriverIO SDK', () => {

        const eyesRunnerConfig: EyesWebdriverIOSdk.RunnerOptionsPlain = {
        }

        const eyesConfig: EyesWebdriverIOSdk.ConfigurationPlain = {
            isDisabled: true,
        }

        it('works', async () => {
            const runner = new EyesWebdriverIOSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesWebdriverIOSdk.Eyes(runner, eyesConfig)

            await eyes.open({ })
        })


        it('can be wrapped', async () => {
            const runner = new EyesWebdriverIOSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesWebdriverIOSdk.Eyes(runner, eyesConfig)

            await wrapper(eyes, eyesConfig);
        })
    });
})
