import { describe, it } from 'vitest'

import * as EyesSdk from '@applitools/eyes'
import * as EyesPlaywrightSdk from '@applitools/eyes-playwright'
import * as EyesWebdriverIOSdk from '@applitools/eyes-webdriverio'
import { Wrapper } from './Wrapper';

describe('Eyes', () => {

    describe('base SDK', () => {

        const eyesRunnerConfig: EyesSdk.RunnerOptionsPlain = {}

        const eyesConfig: EyesSdk.ConfigurationPlain = {
            isDisabled: true,
        }

        it('works', async () => {
            const runner = new EyesSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesSdk.Eyes(runner, eyesConfig)

            await eyes.open({})
        })

        it('can be wrapped', async () => {
            const runner = new EyesSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesSdk.Eyes(runner, eyesConfig)

            const wrapper = new Wrapper(eyes, eyesConfig)
            await wrapper.open()
            await wrapper.check('demo', EyesSdk.Target.window().fully())
            await wrapper.check('demo', EyesSdk.TargetImage.path('./example.png'))
            await wrapper.close()
        })
    });

    describe('Playwright SDK', () => {

        const eyesRunnerConfig: EyesPlaywrightSdk.RunnerOptionsPlain = {}

        const eyesConfig: EyesPlaywrightSdk.ConfigurationPlain = {
            isDisabled: true,
        }

        it('works', async () => {
            const runner = new EyesPlaywrightSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesPlaywrightSdk.Eyes(runner, eyesConfig)

            await eyes.open({})
        })

        it('can be wrapped', async () => {
            const runner = new EyesPlaywrightSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesPlaywrightSdk.Eyes(runner, eyesConfig)

            const wrapper = new Wrapper(eyes, eyesConfig)
            await wrapper.open()
            await wrapper.check('demo', EyesPlaywrightSdk.Target.window().fully())
            await wrapper.check('demo', EyesPlaywrightSdk.TargetImage.path('./example.png'))
            await wrapper.close()
        })
    });

    describe('WebdriverIO SDK', () => {

        const eyesRunnerConfig: EyesWebdriverIOSdk.RunnerOptionsPlain = {}

        const eyesConfig: EyesWebdriverIOSdk.ConfigurationPlain = {
            isDisabled: true,
        }

        it('works', async () => {
            const runner = new EyesWebdriverIOSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesWebdriverIOSdk.Eyes(runner, eyesConfig)

            await eyes.open({})
        })


        it('can be wrapped', async () => {
            const runner = new EyesWebdriverIOSdk.VisualGridRunner(eyesRunnerConfig)
            const eyes = new EyesWebdriverIOSdk.Eyes(runner, eyesConfig)

            const wrapper = new Wrapper(eyes, eyesConfig)
            await wrapper.open()
            await wrapper.check('demo', EyesWebdriverIOSdk.Target.window().fully())
            await wrapper.check('demo', EyesWebdriverIOSdk.TargetImage.path('./example.png'))
            await wrapper.close()
        })
    });
})
